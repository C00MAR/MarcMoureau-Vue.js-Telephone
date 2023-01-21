<template>
    <h1>Journal d'appel</h1>
    <div class="journal">
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
.journal{
    overflow-y: scroll;
    height: 65vh;
}

.journal::-webkit-scrollbar{
	width: 6px;
	background-color: transparent;
}

.journal::-webkit-scrollbar-thumb{
    border-radius: 15px;
	background-color: #5C8F86;
}
</style>