<template>
    <div id="panell" >
     
        <label for="cantidadPaginas" class="mediana">Eliges las cantidad de páginas</label>
        <br>
        <button @click="calcularPresupuesto('masPag')">+</button>
        <input type="number" min="1" id="cantidadPaginas"  :cantidadPaginas="cantidadPaginas" :value="cantidadPaginas" @change="calcularPresupuesto('manualPag')"> 
        <button @click="calcularPresupuesto('menosPag')">-</button>


             <!-- Button trigger modal -->
    <button type="button" class="info" data-bs-toggle="modal" data-bs-target="#exampleModal">
  
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </svg>
    </button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      En este componente deberá indicar el numero de idiomas que tendrá su sitio
      </div>
     
    </div>
  </div>
</div>
        <br>
        

        
        <label for="cantidadIdiomas"  class="mediana"> Eliges la cantidad de idiomas</label>
        <br>
        <button @click="calcularPresupuesto('masIdio')">+</button>
        <!-- <baseInput /> -->
        <input type="number" min="1" id="cantidadIdiomas"  :cantidadIdiomas="cantidadIdiomas" :value="cantidadIdiomas"  @change="calcularPresupuesto('manualIdio')" >
        <button @click="calcularPresupuesto('menosIdio')">-</button>
        
        
       <!-- Button trigger modal -->
    <button type="button" class="info" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
    </svg>
    </button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      En este componente deberá indicar el numero de páginas que tendrá su sitio
      </div>
     
    </div>
  </div>
</div>
        
      
    </div>
</template>


<script>

import BaseInput from '@/components/BaseInput.vue'
export default {
    name: 'Panell',
    components:{
   BaseInput
    },
    props:['calcularPresupuesto' , 'value', ],

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
    
    
    },

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
 
  background-color: #2e9164;
  color: white;
  border-radius: 5%;
  text-align: center;
  font-size: 16px;
  
}
.info{
  width:  40px;
  height: 40px;
  border-radius: 50%;
  border:0px;
  background-color: transparent;
  color: grey;
}

#panell{
  width: auto;
  height: auto;
  margin: 30px;
  border: 1px solid;
  border-color: grey ;
}

</style>