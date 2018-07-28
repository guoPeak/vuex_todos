<template>
  <!-- This section should be hidden by default and shown when there are todos -->
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list" v-for="item in todoList" :key="item.id">
      <!-- 当有 editing 这个类时 处于编辑状态
            completed 这个类则为完成状态
       -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li :class="{completed: item.complete, editing: item.edit }">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.complete">
          <label @dblclick="editTodoItem({ id: item.id })">{{ item.todoItem }}</label>
          <button class="destroy" @click="removeItem({id: item.id})"></button>
        </div>
        <input class="edit" v-model="item.todoItem"
        @blur="removeEdit({ id: item.id })" @keyup.enter="removeEdit({ id: item.id })">
      </li>

    </ul>
  </section>
</template>

<script>

import { mapState, mapMutations } from 'vuex'

export default {

  computed: mapState(['todoList']),

  methods: mapMutations(['removeItem', 'editTodoItem', 'removeEdit'])

  // {
  //   removeItem (id) {
  //     console.log(id)
  //     this.$store.commit('removeItem', { id })
  //   }
  // }
}
</script>

<style>

</style>
