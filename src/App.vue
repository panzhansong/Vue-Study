<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to='/study'>Study</router-link> |
      <!-- 命名路由 -->
      <!-- <router-link :to='{ name: Study}'>Study</router-link> | -->
      <!-- 动态路由 -->
      <router-link to="/learn/sonpanzhan">Learn</router-link> |
      <!-- 嵌套路由 -->
      <router-link to="/parent">Parent</router-link> |
      <router-link to="/named_view">Named_view</router-link> |
    </div>
    <router-view/>
    <!-- 命名视图 -->
    <router-view name='eamil'/>
    <router-view name='tel'/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
