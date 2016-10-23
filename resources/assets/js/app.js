import Vue from 'vue'
import Profile from './Profile.vue';
import Multiselect from './MyMultiselect.vue';
// import { Multiselect } from 'vue-multiselect';

new Vue({
  el: '#app',
  components: { Profile, Multiselect }
})