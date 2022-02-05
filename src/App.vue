<template>
  <Naavbar></Naavbar>
  <router-view/>
</template>
<script>

import Naavbar from './components/Naavbar'
export default({
  components: {
    Naavbar,
  }
})
</script>

<style>
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
#nav a.router-link-exact-active {
  color: #6e6e6e;
}
</style>
