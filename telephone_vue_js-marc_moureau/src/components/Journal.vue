<template>
    <div class="call">
        <h2>{{ call.number }}</h2>
        <p v-if="$store.state.contacts.find(contact => contact.num === call.number)">{{ findContactName(call.number) }} le {{ call.date }}</p>
        <p v-else>Inconnu le {{ call.date }}</p>
        <button @click="Call(call.number)">
            <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="call-out" class="icon glyph"><path d="M21,15v3.93a2,2,0,0,1-2.29,2A18,18,0,0,1,3.14,5.29,2,2,0,0,1,5.13,3H9a1,1,0,0,1,1,.89,10.74,10.74,0,0,0,1,3.78,1,1,0,0,1-.42,1.26l-.86.49a1,1,0,0,0-.33,1.46,14.08,14.08,0,0,0,3.69,3.69,1,1,0,0,0,1.46-.33l.49-.86A1,1,0,0,1,16.33,13a10.74,10.74,0,0,0,3.78,1A1,1,0,0,1,21,15Z" style="fill:#5C8F86"></path><path d="M16,9a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l5-5a1,1,0,1,1,1.42,1.42l-5,5A1,1,0,0,1,16,9Z" style="fill:#5C8F86"></path><path d="M21,9a1,1,0,0,1-1-1V4H16a1,1,0,0,1,0-2h5a1,1,0,0,1,1,1V8A1,1,0,0,1,21,9Z" style="fill:#5C8F86"></path></svg>
        </button>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'JournalView',
    props: [
        'contact',
        'call'
    ],
    methods: {
        VerifPrenom(number) {
            let contact = this.$store.state.contacts.find(contact => {
                return contact.prenom === number
            })
            return contact?contact.num:number
        },
        findContactName(number) {
        let contact = this.contacts.filter(contact => contact.num === number)
        return contact.length > 0 ? contact[0].prenom : 'Inconnu'
        },
        Call(number){
            this.$store.commit('addCalls',{
                date: new Date().toLocaleDateString('fr-fr'),
                number: number
            })
        }
    },
    computed: {
        ...mapState(['contacts', 'calls']),
    }
}
</script>
<style scoped>
.call{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-top: 2px solid black;
}

button{
    background-color: transparent;
    border: 0;
    cursor: pointer;
}
svg{
    transition: 0.4s all ease-in-out;
}
svg:hover{
    border: 3px solid #5C8F86;
    border-radius: 35px;
    padding: 5px;
    transition: 0.4s all ease-in-out;
}

h2{
    font-size: 20px;
}
</style>
