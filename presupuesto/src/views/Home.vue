<template>
  
  <div class="home">
   
    <div id="iniciar" >
 <h1>Seleciona las opciónes que deseas</h1><br>
    <label> Presupuesto por una pàgina web - 500 €</label> 
    <input type="checkbox" id="web" value="500" v-model.number="optionsForm.options" v-on:change="calcularPresupuesto()">
    <br> <br> 
      <div id="panellWeb" v-if="optionsForm.options[0]==500 || optionsForm.options[1]==500 || optionsForm.options[2]==500">
          <panell @cantidadPaginas="cantidadPaginas=$event"  @cantidadIdiomas="cantidadIdiomas=$event"/>
         

          <p class="mediana"> has selecionado {{cantidadPaginas }} páginas</p>
          <p class="mediana"> has selecionado {{cantidadIdiomas }} idiomas</p>
        </div>

    <label> Presupuesto por una campaña SEO - 300 €</label>
    <input type="checkbox" id="seo" value="300" v-model.number="optionsForm.options" v-on:change="calcularPresupuesto()">
    <br><br>
    <label> Presupuesto por una campaña publicitaria - 200 €</label>
    <input type="checkbox" id="pub"  value="200" v-model.number="optionsForm.options"  v-on:change="calcularPresupuesto()">
  <br><br> 
  <p> Total presupuesto: {{ total }}€</p>
  <button @click="$router.go(-1)">Vuelve atras</button>
   
 </div>

 </div>
</template>

<script>

// @ is an alias to /src
import Bienvenida from '@/components/Bienvenida.vue'
import Panell from '@/components/Panell.vue'

export default {
  name: 'Home',
  components: {
    Bienvenida,
    Panell,
    
    
  },
 
 
  
  data (){
    return{

      total:0,
     //iniciar: false,
      optionsForm :{
      options  : [],
      cantidadPaginas:0,
      cantidadIdiomas:0,
    }
  }
},
methods: {
      
calcularPresupuesto(accion){
console.log(this.optionsForm);
  if (accion=="masPag") {
    this.cantidadPaginas++;
    cantidadPaginas.value=this.cantidadPaginas;
  }
  if (accion =="menosPag") {
    if(this.cantidadPaginas <= 1) {
      alert ("la cantidad mínima es una pagina!");
    } else {
    this.cantidadPaginas--;
    cantidadPaginas.value=this.cantidadPaginas;
    }
  }
  if (accion=="manualPag") {
    if (cantidadPaginas.value < 1) {
      alert ("la cantidad mínima es una pagina!");
      cantidadPaginas.value = 1;
    }

    
    this.cantidadPaginas=cantidadPaginas.value;
  }
  if (accion=="masIdio") {
    this.cantidadIdiomas++;
    cantidadIdiomas.value=this.cantidadIdiomas;
  }
  if (accion=="menosIdio") {
    if(this.cantidadIdiomas <= 1) {
      alert ("la cantidad mínima es un idioma!");
    } else {
    this.cantidadIdiomas--;
    cantidadIdiomas.value=this.cantidadIdiomas;
    }
  }
  if (accion=="manualIdio") {
    if (cantidadIdiomas.value < 1) {
      alert ("la cantidad mínima es un idioma!");
      cantidadIdiomas.value = 1;
    }
    this.cantidadIdiomas=cantidadIdiomas.value;
  }

  

   
    let total = 0;
    this.optionsForm.options.forEach(option=> total += parseInt(option));
    this.total = total;
    let paginas = parseInt(this.cantidadPaginas);
    let idiomas = parseInt(cantidadIdiomas.value);   
    let presupuesto = this.total + (idiomas * paginas*30);  
       
   // alert(paginas); alert(idiomas);
    this.total = presupuesto;   
}
},

     
}
 
        
</script>
<style scoped>

.home {
 
  color: rgb(189, 182, 182) ;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  font-size:16px;
  color: #0da5c0;
  
}

h1{
  text-align: center;
  font-size:20px;
  color: #0aa590;

}
#iniciar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #0d0e0f;
}

button{
  width:  160px;
  height: auto;
  margin:20px;
  padding: 5px;
  border-color: #1cd6bd;
  background-color: #10a08d;
  color: white;
  border-radius: 5%;
  text-align: center;
  font-size: 14px;
  }
  .mediana {
 
 font-family: Avenir, Helvetica, Arial, sans-serif;
   text-align: center;
 color: #0d0e0f;
 font-size: 14px;
}
</style>