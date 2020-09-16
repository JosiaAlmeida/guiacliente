<template>
    <div id="cadastro">
        <p>Nome:{{addd.nome}}</p>
        <p>Email:{{addd.email}}</p>
        <p>Idade:{{addd.idade}}</p>
        <button @click="emitirecentosdeletar()">Deletar</button>
    </div>
</template>

<script>

export default {
    data(){
        return{
            
        }
    },
    props:{
        addd:Object
    },
    methods:{
        emitirecentosdeletar: function(){
        console.log("Emitindo do filho");
        this.$emit("deletar",{idcliente:this.addd.id});
    }
    }
}
</script>

<style scoped>
    #cadastro{
        width: 400px;
        padding: 5px;
        height: auto;
        background: rgb(56, 55, 55);
        color: rgb(196, 196, 202);
        text-align: center;
        margin: auto;
        font-size: 20px;
    }
</style>