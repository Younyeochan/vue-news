<template>
  <section class="gameAll">
  <div class="header">
    <h1>😀 Typing Game! 😀</h1>
  </div>
  <div class="word-display">
    Hello
  </div>
  <div class="word-input-box">
    <input type="text" class="word-input" />
  </div>
  <div class="game-info">
    <div> 남은시간 : <span class="time">0</span> 초</div>
    <div> 획득점수 : <span class="score">0</span> 점</div>
  </div>
  <button class="button loading" onclick="run">
    게임을 불러오는중...
  </button>
  <div class="toast-wrap">

  </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      run: 'run',
      checkStatus: 'checkStatus',
      getWord: 'getWord',
      checkMatch: 'checkMatch',
      countDown: 'countDown',
      buttonChange: 'buttonChange',
    }),
  },
  created() {
    this.$store.dispatch('FETCH_GAME');
  }, 
}
</script>

<style>
.gameAll {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  width: 100%;
  background: #266e4e;
  color: #fff;
  text-align: center;
  padding: 1rem;
}

.word-display {
  margin-top: 3rem;
  font-size: 80px;
  color: #42b883;
}

.word-input-box {
  margin-top: 2rem;
}

.word-input {
  padding: 0.5rem;
  width: 300px;
}

.game-info {
  margin-top: 2rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  width: 220px;
}

.time,
.score {
  font-size: 30px;
}

.button {
  width: 200px;
  height: 35px;
  background: #42b883;
  color: #fff;
  border: none;
  margin-top: 3rem;
  cursor: pointer;
}

.loading {
  background: #ccc;
  cursor: not-allowed
}

.toast-wrap {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
}

.toast-item {
  width: 250px;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  text-align: center;
  color: #fff;
  transition: left 500ms ease-in-out, top 500ms ease-in-out;
  position: relative;
  background: linear-gradient(to left, #FBD3E9, #BB377D)
}
</style>