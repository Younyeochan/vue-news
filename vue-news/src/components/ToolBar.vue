<template>
  <div class="header">
    Youn yeochan  😀.🙃.😄 - 
    <router-link to="/blog">&nbsp;&nbsp;Blog📝&nbsp;</router-link> | 
    <router-link to="/map">&nbsp;Map🗺️&nbsp;</router-link> | 
    <router-link to="/photo">&nbsp;Photo📷&nbsp;</router-link> | 
    <router-link to="/game">&nbsp;Game🕹️&nbsp;</router-link> | 
    <router-link to="/news">&nbsp;News📰&nbsp;</router-link> | 
    <router-link to="/ask">&nbsp;Ask🙋&nbsp;</router-link> | 
    <router-link to="/jobs">&nbsp;Jobs✨&nbsp;</router-link>
  </div>
</template>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 15px;
  font-size: 20px;
}
.header .router-link-exact-active {
  font-weight: 900;
  color: greenyellow;
}
.header a {
  text-decoration: none;
  color: white;
  font-weight: 500;
}
</style>