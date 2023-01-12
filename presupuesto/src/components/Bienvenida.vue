<template>
  <div id="bienvenida">    <h1>   Te damos la bienvenida a nuestro servicio de Presupuestos on-line </h1> <br> <br>
 <button>  <router-link :to="{ name: 'Home'}">Calcula tu presupuesto </router-link></button> 
  </div>
</template>

<script>
export default {
    name:'Bienvenida',

}

</script>

<style>
#bienvenida {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #14c3e2;
}
button{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width:  auto;
  height: auto;
  margin:20px;
  padding: 10px;
  border-color: #1cd6bd;
  background-color: #10a08d;
  color: white;
  border-radius: 5%;
  text-align: center;
  font-size: 14px;
  }

  




button a {
  font-weight: bold;
  color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

button a.router-link-exact-active {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #42b983;
}
</style>
