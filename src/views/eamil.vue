<template>
  <div class="email">
    <h2>email: panzhansong@163.com</h2>
    <Button @click="handleClick">Say Hello</Button>
  </div>
</template>

<script>
export default {

  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'hello')
    }
  }
}
</script>

<style lang=''>

</style>
