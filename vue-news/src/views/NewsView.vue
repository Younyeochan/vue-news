<template>
  <div>
    <p v-for="item in this.$store.state.news">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago}} by
        <!-- <router-link :to="'/user/' + item.user">{{ item.user }}</router-link> -->
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index' 

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }, 
}
</script>

<style>

</style>