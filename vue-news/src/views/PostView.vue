<template>
  <div>
    <h2>Blog Post 😀</h2>
    <div class="user-description">
      <!-- <i class="fas fa-user"></i> -->
      <small class="blogTitle">{{ postInfo.title }}</small>
      <small class="blogName">UserName : {{ postInfo.id }}</small>
      <p class="blogBody">{{ postInfo.body }}</p>
    </div>
    <h1>comment 🙃</h1>

 <!-- <div class="inputBox shadow">
      <input type="text" v-model="newComment" @keyup.enter="addComment">
      <span class="addContainer" v-on:click="addComment">
        <i class="addBtn fas fa-plus" aria-hidden="true"></i>
      </span>
    </div> -->

    <div v-for="comment in fetchedComment" :key="comment.id" class="comments">
      <p class="commentCo">{{ comment.body }}</p>
      <input style="display: none;" class="inputBox shadow" type="text" v-model="comment.body" @keyup.enter="addComment">
      <div class="gub2">
        <small class="commentEmail">{{ comment.email }}</small>
        <span v-on:click="updateData" class="btn1">수정</span>
        <span v-on:click="deleteData" class="btn2">삭제</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    postInfo() {
      return this.$store.state.post;
    },
    ...mapGetters({
      fetchedComment: 'fetchedComment'
    }),
  },
  created() {
    const postName = this.$route.params.id;
    this.$store.dispatch('FETCH_POST', postName);

    this.$store.dispatch('FETCH_COMMENT');
  },
  methods: {
    deleteData(comment, index) {
      this.$store.commit('removeComment', {comment, index});
    },
    updateData(comment, index) {
      this.$store.commit('editComment', {comment, index});
    }
  },
}
</script>

<style scoped>
h1 {
  margin-left: 30px;  
  padding-top: 50px;
}
h2 {
  margin-left: 30px;  
  padding-top: 10px;
  font-size: 30px;
}
.comments p {
  font-size: 19px;
  font-weight: 600;
  padding: 24px;
}
.btn1 {
  background-color: #42b883;
  color: #d7fff1;
  padding: 4px 9px;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
}
.btn2 {
  background-color: #fa5041;
  color: #fff0e4;
  padding: 4px 9px;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  font-size: 15px;
  margin-left: 5px;
  margin-right: 40px;
}
.gub2 {
  float: right;
}
.commentEmail {
  font-size: 18px;
}
.blogName {
  float: right;
  margin-right: 40px;
  padding-top: 10px;
  font-size: 20px;
}
.blogBody {
  font-size: 28px;
}
.blogTitle {
  font-size: 30px;
  font-weight: 900;
}
.comments {
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-top: 30px;
  padding-left: 30px;
}
.time {
  font-size: 0.7rem;
}
/* 댓글 영역 */
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin: 0 40px 0 30px;
}
.inputBox input {
  border-style: none;
  margin-left: 20px;
  font-size: 0.9rem;
  width: 80%;
}
.addContainer {
  float: right;
  background: #42b983;
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
  margin-left: 16px;
}
.closeModalBtn {
  color: #42b983;
}
</style>