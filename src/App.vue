<template>
  <div>
    

    <h4 id="erro" v-show="error">Preencha os dados corretamente!</h4>
    <input type="text" placeholder="Nome" v-model="nomefield">
    <input type="email" placeholder="Email" v-model="emailfield">
    <input type="number" placeholder="Idade" v-model="idadefield">
    <button @click="cadastrar">Cadastrar</button>
    <hr>
    <div v-for="add in ordenarpelonome" :key="add.id">
      <formulario :addd="add" @deletar="deletarusuario($event)"/>
      <hr>
    </div>
    
  </div>
  
</template>

<script>
import _ from 'lodash';
import formulario from './components/formulario';
export default {
  name:"App",
  components:{
    formulario
  },
  data(){
    return{
            error:false,
            nomefield:"",
            idadefield:0,
            emailfield:"",
          adicionar:[
            { id: 2,
              nome:"Josia",
              email:"Almeida@gmail.com",
              idade:17
            },
            { id: 22,
              nome:"Aosia",
              email:"Almeida@gmail.com",
              idade:17
            }
          ]
    }
  },
  props: {
    add:Object
  },
  methods:{
    cadastrar: function(){
      if(this.nomefield=="" || this.emailfield=="" || this.nomefield.length<3|| this.emailfield.length<3){
        this.error=true;
      }else if(this.idadefield>=150){
        this.error=true;
      }
      else{
        this.adicionar.push({nome: this.nomefield,email: this.emailfield, idade: this.idadefield, id:Date.now()})
        this.nomefield="";
        this.emailfield="";
        this.idadefield=0;
        this.error=false;
      }
    },
    deletarusuario: function($event){
      console.log("Deletado")
      console.log($event)
      var id= $event.idcliente
      var novoarray=this.adicionar.filter(add  => add.id != id)
      this.adicionar=novoarray;
    }
  },
  computed:{
    idespecial: function(){
      return this.emailfield.toUpperclose()
    },
    ordenarpelonome: function(){
      return _.orderBy(this.adicionar,['idade','nome'],['asc'])
    }
  }
}
</script>

<style scoped>
  div{
    text-align: center;
  }
  #erro{
    color: red;
    background: black;
  }
</style>