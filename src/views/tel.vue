<template>
  <div class="tel">
    <h2>tel: 13247252330</h2>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {

  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', (msg) => {
      this.message = msg
    })
  },
  methods: {}
}
</script>

<style lang=''>

</style>
