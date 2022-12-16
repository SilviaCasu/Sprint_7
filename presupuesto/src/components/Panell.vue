<template>
    <div id="panell" >
     
        <label for="cantidadPaginas" class="mediana">Eliges las cantidad de páginas</label>
        <br>
        <button @click="calcularPresupuesto('masPag')">+</button>
        <input type="number" id="cantidadPaginas"  :cantidadPaginas="cantidadPaginas" :value="cantidadPaginas" @change="calcularPresupuesto('manualPag')"> 
        <button @click="calcularPresupuesto('menosPag')">-</button>
        <br>


        <label for="cantidadIdiomas"  class="mediana"> Eliges la cantidad de idiomas</label>
        <br>
        <button @click="calcularPresupuesto('masIdio')">+</button>
        <input type="number" id="cantidadIdiomas"  :cantidadIdiomas="cantidadIdiomas" :value="cantidadIdiomas"  @change="calcularPresupuesto('manualIdio')" >
        <button @click="calcularPresupuesto('menosIdio')">-</button>

    </div>
</template>


<script>
export default {
    name: 'Panell',
    props:['calcularPresupuesto' , 'value'],

    data() {
        return {
        cantidadPaginas:1,
        cantidadIdiomas:1,
        
        }
    },
    mounted(){
    this. $emit("cantidadPaginas", this.cantidadPaginas),
    this. $emit("cantidadIdiomas", this.cantidadIdiomas);

    },
    methods: {
        calcularPresupuesto(accion){
        this.$parent.calcularPresupuesto(accion);
    }
    }

}


</script>

<style scoped>

.home {
 
  color: rgb(189, 182, 182) ;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size:large;
  color: #242029;
  
 
}
.medium {
 
  font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
  color: #031222;
  font-size: 14px;
}

button{
  width:  30px;
  height: 40;
  margin:20px;
  padding: 5px;
  border-color:  #42b983;
  background-color: #2e9164;
  color: white;
  border-radius: 5%;
  text-align: center;
  font-size: 16px;
  
  


}
</style>