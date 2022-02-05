<template>
   <div class="totallist_container" v-if="datas">
       <div class="timeline">
          Last Updated: {{datas[0].lastUpdate}}
       </div>
       <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas[0].confirmed"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Total Confirmed</p>
       </div>
        <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas[0].recovered"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Total Recovered</p>
       </div>
        <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas[0].critical"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Total Critical</p>
       </div>
        <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas[0].deaths"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Total Deaths</p>
       </div>
    </div>
    <div v-else>
        ...loading
    </div>
</template>

<script>    
import {ref} from 'vue'
export default {
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
                datas.value = {...data};
            })
            .catch(err => {
                console.error(err);
            });
        }
        result();
        return { datas}

    }
}
</script>

<style scoped>
    .totallist_container{
    width: 100%;
    height: 500px;
    background: #3d3d3d;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    position: relative;
    color: rgb(255, 255, 255);
  }
  .timeline{
      position: absolute;
      top: 30px;
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
 }
</style>