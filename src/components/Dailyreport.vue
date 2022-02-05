<template>
   <div class="totallist_container" v-if="datas">
       <div class="timeline">
          Last Updated: {{datas.date}}
       </div>
       <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas.confirmed"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Today Confirmed</p>
       </div>
        <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas.recovered"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Today Recovered</p>
       </div>
        <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas.critical"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Today Critical</p>
       </div>
        <div class="data animate__animated animate__fadeInUp">
           <number
	:from="0"
	:to="datas.deaths"
	:duration="3.5"
    easing="Power1.easeOut"/>
           <p>Today Deaths</p>
       </div>
    </div>
    <div v-else>
       <button @click.prevent="result">View Daily Report </button>
    </div>
</template>

<script>    
import {ref} from 'vue'
export default {
    setup(){
        const datas = ref();
        const result = async () => {
           fetch("https://covid-19-data.p.rapidapi.com/report/totals?date=2020-07-21", {
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
        return { datas, result }

    }
}
</script>

<style scoped>
    .totallist_container{
    width: 100%;
    height: 500px;
    background: #272727;
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
 button{
     width:100%;
     background-color:#035D71;
     color: #fff;
     outline: none;
     border: 1px solid rgb(46, 71, 75);
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