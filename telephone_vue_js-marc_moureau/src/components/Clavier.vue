<template>
    <div>
        <h2>{{ this.$store.state.CallNumber }} <svg @click="reset()" id="reset" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.30958 3.54424C7.06741 2.56989 8.23263 2 9.46699 2H20.9997C21.8359 2 22.6103 2.37473 23.1614 2.99465C23.709 3.61073 23.9997 4.42358 23.9997 5.25V18.75C23.9997 19.5764 23.709 20.3893 23.1614 21.0054C22.6103 21.6253 21.8359 22 20.9997 22H9.46699C8.23263 22 7.06741 21.4301 6.30958 20.4558L0.687897 13.2279C0.126171 12.5057 0.126169 11.4943 0.687897 10.7721L6.30958 3.54424ZM10.2498 7.04289C10.6403 6.65237 11.2734 6.65237 11.664 7.04289L14.4924 9.87132L17.3208 7.04289C17.7113 6.65237 18.3445 6.65237 18.735 7.04289L19.4421 7.75C19.8327 8.14052 19.8327 8.77369 19.4421 9.16421L16.6137 11.9926L19.4421 14.8211C19.8327 15.2116 19.8327 15.8448 19.4421 16.2353L18.735 16.9424C18.3445 17.3329 17.7113 17.3329 17.3208 16.9424L14.4924 14.114L11.664 16.9424C11.2734 17.3329 10.6403 17.3329 10.2498 16.9424L9.54265 16.2353C9.15212 15.8448 9.15212 15.2116 9.54265 14.8211L12.3711 11.9926L9.54265 9.16421C9.15212 8.77369 9.15212 8.14052 9.54265 7.75L10.2498 7.04289Z" fill="#000000"/></svg></h2>
        <div class="clavier">
            <button v-for="button in [1,2,3,4,5,6,7,8,9,0]" @click="addNumber(button)">
                {{ button }}
            </button>
            <button @click="Call()" class="call">Appeler</button>
        </div>
        <p>{{ people }}</p>
    </div>
</template>

<script>
export default {
    name: 'ClavierView',
    props: [
        'CallNumber'
    ],
    computed: {
        calls() {
            return this.$store.state.CallNumber
        }
    },
    methods: {
        addNumber(num){
            this.$store.state.CallNumber += num
        },
        reset(){
            if(this.$store.state.CallNumber.length >0){
                this.$store.state.CallNumber = this.$store.state.CallNumber.slice(0,-1)
            }
        },
        Call(){
            if(this.$store.state.CallNumber.length > 0){
                this.$store.commit('addCalls',{
                    date: new Date().toLocaleString('fr-fr'),
                    number: this.$store.state.CallNumber
                })
            this.$store.state.CallNumber = ""
            }
        }
    }
}
</script>

<style scoped>
p{
    color: #7D7D7D;
}
#reset{
    position: absolute;
    right: 50px;
    cursor: pointer;
}
#reset path{
    fill: #2A2A2A;
    transition: 0.4s all ease-in-out;
}
#reset path:hover{
    fill: #5C8F86;
    transition: 0.4s all ease-in-out;
}
div h2{
    transition: 0.4s all ease-in-out;
    height: 25px;
}
.clavier{
    display: grid;
    height: 350px;
    width: 80%;
    margin-left: 10%;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
}
.call{
    grid-row: 4;
    grid-column: 2/4;
}

button{
    color: #5C8F86;
    font-size: 15px;
    background-color: #2A2A2A;
    border: 0px solid;
    border-radius: 15px;
    transition: 0.4s all ease-in-out;
    cursor: pointer;
}
button:hover{
    font-size: 20px;
    background-color: #5C8F86;
    color: #000000;
    transition: 0.4s all ease-in-out;
}
</style>