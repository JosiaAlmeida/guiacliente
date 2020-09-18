<template>
    <div>{{count}} <br>
        <a @click="decrement" class="btn btn-link">Decrementar </a>
        <a @click="increment" class="btn btn-link">Incrementar</a>
    </div>
    
</template>

<script>
export default {

    computed:{
        count:{
            set(v){
                return this.$store.commit('setCount', v)
            },
            get(){
                return this.$store.state.count;
            }
            
        }
    },

    methods:{
        increment(){
            this.count +=1
        },
        decrement(){
            this.count -=1
        }
    }
}
</script>