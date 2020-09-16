<template>
    <div>

        <div :class="{'prop': !premium,'premium1': premium}">
            <p>Nome :{{clientes.nome}}</p>
            <p >Email:{{clientes.email}}</p>
            <p v-if="showidade">idade:{{conteudo.idade}}</p>
            <p v-else>Escondeu a idade, velho pra carai</p>
            
            <hr>
        </div>
       <!-- <div id="form">    
            <form>
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" v-model="nome2">
                <input type="text" name="nome1" id="nome1">
                //--Data binding one way
                <h1>{{nome2}}</h1>  
            </form>
            <br>
            <br> <br> <br>
            </div>-->
    </div>
    
</template>

<script>
export default {
    //Data binding one way
    data(){
        return{
            premium: false,
            nome:"Oi"
        }
    },
    props:{
      nome2:String,
      conteudo:Object,
      showidade:Boolean,
      showemail:Boolean,
     
    },
    methods:{
      bot: function($event){
        console.log($event);
        this.premium=!this.premium;
      }
    }
}
</script>

<style scoped>
    /*#form{
        background: #0fd4adad;
        color: #ffffff;
        width: 300px;
        text-align: center;
        box-align: center;
        margin: auto;
    }*/
    .prop{
        margin: 10px;
        background: #e2dbdbab;
    }
    .premium1{
        width: 300px;
        margin: auto;
        background: rgb(19, 13, 58);
        color: aliceblue;
    }
</style>