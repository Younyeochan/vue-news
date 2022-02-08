<template>
  <!-- <div>
    <img class="px" v-for="photo in this.$store.state.photo" :key="photo.id" src="photo.thumbnailUrl" alt="사진"/>
  </div> -->
  <div id="app">
    <div v-for="photo in this.$store.state.photo">
      <img class="px" :src="photo.thumbnailUrl">
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_PHOTO');
  }, 
}
</script>

<style>
.px {
  float: left;
  width: 150px;
  height: 150px;
  margin: 15px 5px 5px 50px ;
}
</style>