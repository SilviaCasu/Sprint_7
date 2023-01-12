<template>
    <div id="Baseinput" >
      
     
        <input type="number" name="BaseInput"
        :value="saveValor"  @input="$emit('update:saveValor',$event.target.value)"> 
      
    <!--    A: < template > o a methods:
< button @click="$emit('accio1',variable)" >
Aceptar
< / button >
A: export default{: escriuriem allò que volem enviar al pare
emits: [‘accio1’’]-->

    </div>
</template>


<script>
export default {
    name: 'BaseInput',
    props:['value'],
    data() {
        return {
     
       
         }
        },
        methods: {
          saveValor() {
      this.$emit("value");
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