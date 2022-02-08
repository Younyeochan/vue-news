<template>
  <div>
    <p v-for="blog in fetchedBlog">
      <router-link v-bind:to="`blog/${blog.id}`">
        {{ blog.title }}
      </router-link>
      <small> ID: {{ blog.id }}</small>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      fetchedBlog: 'fetchedBlog'
    }),
  },
  created() {
    this.$store.dispatch('FETCH_BLOG');
  }, 
}
</script>

<style>
  
</style>