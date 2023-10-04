import Vue from 'vue'
import DiscordUserCard from './DiscordUserCard.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(DiscordUserCard),
  }).$mount('#card1')
