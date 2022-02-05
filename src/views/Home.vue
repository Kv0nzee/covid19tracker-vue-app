<template>
  <main>
    <Totallist></Totallist>
    <Dailyreport></Dailyreport>
    <Countries></Countries>
  </main>
</template>

<script>
import Dailyreport from '../components/Dailyreport'
import Countries from '../components/Countries'
import Totallist from '../components/Totallist'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Dailyreport,
    Countries,
    Totallist,
  }
}
</script>
<style scoped>
  

</style>