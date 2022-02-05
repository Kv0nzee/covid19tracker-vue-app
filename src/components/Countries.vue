<template>
    <div class="countries_container">
        <div class="searchform">
            <input type="text" placeholder="Search Country" v-model="searchh" @keypress.enter="search">
        </div>
           
          <div class="country animate__animated animate__fadeIn" v-if="country !== ''">
            <img :src="`https://flagcdn.com/w320/${country.code.toLowerCase()}.jpg`" alt="">
            <div class="coun_data ">
                <h1>{{country.country}}</h1>
                <p><strong>Total Confirmed : </strong>{{country.confirmed}}</p>
                <p><strong>Total Recovered : </strong>{{country.recovered}}</p>
                <p><strong>Total Critical : </strong>{{country.critical}}</p>
                <p><strong>Total Deaths : </strong>{{country.deaths}} </p>
            </div>
        </div>
         <h1 v-else class="error">
                Country not found
        </h1>
        
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        const country = ref('');
        const searchh = ref();
        const search = async (event) => {
           fetch(`https://covid-19-data.p.rapidapi.com/country?name=${event.target.value}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f3b9d18db7msh8955b2c2a4dd921p174dafjsn4c0d9396da90",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
        })
        .then(response => {
                 country.value = "";
                 return response.json();
            })
            .then(data => {
                country.value = data[0];
                searchh.value = "";
            })
            .catch(err => {
                console.log(err);
                
            });
        }
        
        return { country, search, searchh}
    }
}
</script>

<style scoped>
    .countries_container{
        width: 100%;
        padding: 25px 35px;
        height: 700px;
        display: flex;
        flex-direction:column;
         background: #202C37;
         color:rgb(252, 252, 252);
    }
    .country{
        display: flex;
        border-radius:15px;
        margin: auto 0;
    }
    .country img{
        width: 800px;
        border-radius:20px ;
        margin-right: 30px;
    }
    .coun_data{
        padding: 30px;
    }
    .coun_data h1{
        font-size:5.5em;
        font-weight:800;
        margin-bottom: 10px;
    }
    .coun_data p{
        font-size:2em;
        color:rgb(165, 165, 165);
    }
    .coun_data p strong{
        font-size:1.4em;
        font-weight:600;
    }
    .searchform{
        margin: 0 auto;
        width:80%;
    }
    .searchform input{
        width:100%;
        border:none;
        background:transparent;
        outline:none;
        color:aliceblue;
        border-bottom:1px solid #ededed;   
    }
    .error{
        margin:  auto;
        font-size:2em;
    }
     @media (max-width:1020px) {
        .country img{
            width: 500px;
        }
        .coun_data h1{
            font-size:3.5em;
            font-weight:800;
            margin-bottom: 10px;
        }
        .coun_data p{
            font-size:1em;
            color:rgb(165, 165, 165);
        }
    }
     @media (max-width:460px) {
         .country{
        flex-direction: column;

        }
        .country img{
            width: 300px;
        }
        .coun_data h1{
            font-size:1em;
            font-weight:800;
            margin-bottom: 10px;
        }
        .coun_data p{
            font-size:0.5em;
            color:rgb(165, 165, 165);
        }
    }

</style>