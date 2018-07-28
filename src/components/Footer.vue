<template>
  <!-- This footer should hidden by default and shown when there are todos -->
  <footer class="footer">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"> <strong>{{ unCompleteNum }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <!-- <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li> -->
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" v-show="showClearCompleted" @click="clearCompleted">Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {

  computed: mapGetters(['unCompleteNum', 'showClearCompleted']),

  methods: mapMutations(['clearCompleted'])

}
</script>

<style>

</style>
