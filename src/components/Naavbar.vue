<template>
  <div id="nav" class="w-full">
      <div class="logo">
          <router-link to="/" exact-active-class="no-active" > <img src="../assets/logo.png" alt=""></router-link>
      </div>
    <div class="link"> 
        <div class="flex mr-10 space-x-6 text-2xl">
            <router-link to="/" exact-active-class="no-active" ><h1>Covid19 Tracker<i class="fas fa-virus"></i></h1></router-link>
            <router-link to="/about" class="my-auto">About</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #nav{
        display: flex;
        flex-direction:column;
        
    }
    .logo{
        width:100%;
        height:100px;
        background:#ededed;
         display:flex;
         align-items:center;
    }
    .logo img{
        width:250px;
        height:50px;
        margin-left:25px;
    }
    .link{
         width:100%;
         height:100px;
         background:#035D71;
         display:flex;
         justify-content:space-between;
         align-items:center;
         color:#fff;
         padding:0 20px;
    }
    .link h1{
        font-size:2em;
        margin-right:25px;
    }
     @media (max-width:1020px) {
     .link h1{
        font-size:1em;  
    }
 }
</style>