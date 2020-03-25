<template>
  <div class="study">
    <h1>This is an study page</h1>
    <a-input @input="handleInput" />
    <a-Show :content='inputValue'/>
    <!-- <h3>{{inputValue}}</h3> -->
  </div>
</template>

<script>
import AInput from '@/components/AInput'
import AShow from '@/components/AShow'
export default {

  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

<style lang=''>

</style>
