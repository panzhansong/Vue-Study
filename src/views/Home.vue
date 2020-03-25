<template>
  <div class="home">
    <HelloWorld :msg='title'/>
    <p>Name: {{ name }}</p>
    <p>{{englishNameWithChineseName}}</p>
    <p>telPhone: {{ tel }}</p>
    <p>telPhone first number is {{ telFirstNumber }}</p>
    <p>QQ： {{ QQ }}</p>
    <button @click="handleChangeName">修改名称</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      title: 'Welcome to Your Vue.js App'
    }
  },
  // created () {
  //   console.log(this.$route)
  // },
  computed: {
    // name () {
    //   return this.$store.state.name
    // },
    // tel () {
    //   return this.$store.state.user.tel
    // }
    // englishNameWithChineseName () {
    //   return this.$store.getters.englishNameWithChineseName
    // },
    ...mapState({
      name: state => state.name,
      tel: state => state.user.tel,
      QQ: state => state.QQ
    }),
    ...mapGetters([
      'telFirstNumber',
      'englishNameWithChineseName'
    ])
    // ...mapGetters('user', [
    //   'telFirstNumber'
    // ])
    // ...mapState([
    //   'name'
    // ])
  },
  methods: {
    ...mapMutations([
      'SET_NAME',
      'SET_QQ'
    ]),
    ...mapActions([
      'updateName'
    ]),
    handleChangeName () {
      this.SET_NAME('panzhansong')
      this.SET_QQ()
      this.updateName()
    }
  },
  components: {
    HelloWorld
  }
}
</script>
