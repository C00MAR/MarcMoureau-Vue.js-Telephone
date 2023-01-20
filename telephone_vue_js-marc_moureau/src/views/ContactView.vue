<template>
  <div class="home">
    <h1>Contact</h1>
    <h2>Liste des Contacts</h2>
    <div class="list">
      <div v-for="contact in contacts" :key="contact.prenom">
        <ContactList :contact="contact"/>
      </div>
    </div>
    <ContactAdd />
  </div>
</template>

<script>

import ContactList from '@/components/Contact.vue';
import ContactAdd from '@/components/ContactAdd.vue';

export default {
  name: 'ContactInfo',
  components: {
    ContactList,
    ContactAdd
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    }
  }
}
</script>

<style scoped>
.list{
  overflow-y: scroll;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list div{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  margin: 10px 0;
  background-color: #2A2A2A;
}

.list::-webkit-scrollbar{
	width: 6px;
	background-color: transparent;
}

.list::-webkit-scrollbar-thumb{
  border-radius: 15px;
	background-color: #5C8F86;
}
</style>
