import { fetchBlogComments } from "../api";

export default {
  SET_NEWS(state, news) {
  state.news = news;
  },
  SET_JOBS(state, jobs) {
    state.jobs = jobs;
  },
  SET_ASK(state, ask) {
    state.ask = ask;
  },
  SET_USER(state, user) {
    state.user = user;
  }, 
  SET_ITEM(state, item) {
    state.item = item;
  }, 
  SET_BLOG(state, blog) {
    state.blog = blog;
  },
  SET_POST(state, post) {
    state.post = post;
  },
  SET_COMMENT(state, comment) {
    state.comment = comment;
  },
  SET_PHOTO(state, photo) {
    state.photo = photo;
  },
  removeComment(state, payload) {
    state.comment.splice(payload.index, 1);
  },
  editComment() {
    console.log('dwdwdw')
    if($store.state.isStatusOn) {
      console.log('123dwdwdwdwdwd')
    } else {
      console.log('334dwdwdwdwd')
    }
  },


  // 게임 뮤테이션
  SET_GAME(state, game) {
    state.game = game;
  },
  run() {
    if(isPlaying) {
      return;
    }
    isPlaying = true;
    time = GAME_TIME;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    buttonChange('게임 중')
  },  
  checkStatus() {
    if(!isPlaying && time === 0) {
      buttonChange("게임 시작")
      clearInterval(checkInterval)
    }
  },
  //단어 불러오기
  getWord(){
    axios.get('https://random-word-api.herokuapp.com/word?number=100')
      .then(function (response) {
        response.data.forEach((word)=>{
          if(word.length < 10) {
            words.push(word);
          }
        })
        console.log(words);
        buttonChange('게임 시작')
      })
      .catch(function (response) {
        console.log(response)
      })
  },
  //단어 일치 체크
  checkMatch() {
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
      wordInput.value = "";
      if(!isPlaying) {
        return;
      }
      score++;
      scoreDisplay.innerText = score;
      time = GAME_TIME;
      const randomIndex = Math.floor(Math.ramdom() * words.length);
      wordDisplay.innerText = words[randomIndex];
    }
  },
  countDown() {
    // (조건) ? 참일 경우 : 거짓일 경우
    time > 0 ? time-- : isPlaying = false;
    if(!isPlaying) {
      clearInterval(timeInterval)
    }
    timeDisplay.innerText = time;
  },
  buttonChange(text) {
    button.innerText = text;
    text === '게임 시작' ? button.classList.remove('loading') : button.classList.add('loading')
  }
}