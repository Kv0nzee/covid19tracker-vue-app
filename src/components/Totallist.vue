<template>
   <div class="totallist_container" v-if="datas">
       <h1 class="title">Latest Total</h1>
       <div class="timeline">
          Last Updated: {{datas.lastUpdate}}
       </div>
       <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas.confirmed"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Total Confirmed</p>
       </div>
        <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas.recovered"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Total Recovered</p>
       </div>
        <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas.critical"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Total Critical</p>
       </div>
        <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas.deaths"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Total Deaths</p>
       </div>
    </div>
    <Loader v-else></Loader>
</template>

<script>    
import Loader from './Loader'
import {ref} from 'vue'
export default {
  components: { Loader },
    setup(){
        const datas = ref();
        const result = async () => {
           fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "f3b9d18db7msh8955b2c2a4dd921p174dafjsn4c0d9396da90",
                    "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
                }
            })
            .then(response => {
                 return response.json();
            })
            .then(data => {
                datas.value = data[0];
            })
            .catch(err => {
                console.error(err);
            });
        }
        result();
        return { datas }

    }
}
</script>

<style scoped>
    .totallist_container{
    width: 100%;
    height: 500px;
    padding: 20px;
    background: #3d3d3d;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    position: relative;
    color: rgb(255, 255, 255);
  }
  .title{
    position: absolute;
      top: 0;
      left:30px;
      font-size:1em;
      color: #ededed;
  }
  .timeline{
      position: absolute;
      top: 10px;
      right:30px;
      font-size:1em;
      color: #ededed;
  }
  .data{
      padding: 10px 20px;
  }
  .data span{
      font-size: 3.5em;
    }
 .data p{
     font-size:2em;
 }
 @media (max-width:1020px) {
     .totallist_container{
         flex-direction: column;
         height: auto;
         padding: 20px 0;
     }
     .totallist_container .data span{
         font-size: 3em;
     }
     .timeline{
      display: none;
      color:transparent;
    }
 }
</style>