<template>
  <div class="about">
    <h1>Clavier de Composition</h1>
    <Clavier/>
    <ContactAdd/>
  </div>
</template>

<script>

import Clavier from '@/components/Clavier.vue';
import ContactAdd from '@/components/ContactAdd.vue';


export default {
  name: 'ClavierView',
  components: {
    Clavier,
    ContactAdd
  }
}
</script>

