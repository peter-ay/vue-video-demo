import Vue from 'vue'
import App from './App.vue'
import VideoPlayer from 'vue-video-player'

Vue.use(VideoPlayer)
new Vue({
  el: '#app',
  render: h => h(App)
})
