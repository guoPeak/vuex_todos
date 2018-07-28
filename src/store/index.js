import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  todoList: [
    {id: 3, todoItem: '吃饭', complete: true, edit: false},
    {id: 2, todoItem: '看书', complete: false, edit: false},
    {id: 1, todoItem: '敲代码', complete: true, edit: false}
  ],

  todoName: ''

}

const mutations = {
  // 更新 todoName 的值
  updateTodoName (state, payload) {
    state.todoName = payload.todoName
  },

  addTodoItem (state, payload) {
    let id
    if (state.todoList.length === 0) {
      id = 1
    } else {
      id = state.todoList[0].id + 1
    }

    state.todoList.unshift({ id, todoItem: payload.name, complete: false })

    // 清空文本框
    state.todoName = ''
  },

  removeItem (state, payload) {
    state.todoList = state.todoList.filter(item => item.id !== payload.id)
  },

  clearCompleted (state) {
    state.todoList = state.todoList.filter(item => !item.complete)
  },

  editTodoItem (state, payload) {
    state.todoList.forEach(e => {
      if (e.id === payload.id) {
        e.edit = true
      }
    })
  },

  removeEdit (state, payload) {
    state.todoList.forEach(e => {
      if (e.id === payload.id) {
        e.edit = false
      }
    })
  }
}

const getters = {
  // 未完成的 todo 项统计
  unCompleteNum (state) {
    return state.todoList.filter(item => !item.complete).length
  },

  showClearCompleted (state) {
    return state.todoList.some(item => item.complete)
  }

}

const store = new Vuex.Store({
  state,
  mutations,
  getters
})

// 导出
export default store
