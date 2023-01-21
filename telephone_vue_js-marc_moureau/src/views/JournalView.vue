<template>
    <div>
        <h1>Journal d'appel</h1>
        <div v-for="call in $store.state.calls" :key="call.number">
            <Journal :call="call" :contact="contact"/>
        </div>
        <ContactAdd/>
    </div>
</template>

<script>

import Journal from '@/components/Journal.vue';
import ContactAdd from '@/components/ContactAdd.vue';


export default {
    name: 'JournalView',
    components: {
        Journal,
        ContactAdd
    }
}
</script>

<style>
</style>