export const mixin = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.error("hello")
    },
}

export const mixin1 = {
data() {
    return {
        x:1000,
        y:2
    }
},
    mounted() {
        console.error("hello111")
    },
}