<template>
    <div v-bind:class="{formOpen: showClass}">
        <div class="divButton">
            <button v-on:click="addClassToForm" class="buttonStyle">+</button>
        </div>
        <div id="form" class="form">
            <button v-on:click="removeClassToForm" class="buttonStyle">+</button>
            <form @submit.prevent="ajoutContact()">
                <h2 class="titleform">Ajouter un Contact</h2>
                <input class="inputform" type="text" placeholder="Nom du contact" v-model="formContact.prenom" />
                <input class="inputform" type="text" placeholder="Numéro du contact" v-model="formContact.num" />
                <br>
                <input class="submitform" type="submit">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactAdd',
    data() {
        return {
            formContact: {
                prenom: '',
                num: ''
            },
            showClass: false
        }
    },
        methods: {
            addClassToForm() {
                this.showClass = true
            },
            removeClassToForm() {
                this.showClass = false
            },
            ajoutContact() {
                this.$store.commit('ajoutContact', this.formContact)
                this.formContact = {
                    prenom: '',
                    num: ''
                }
            }
        }
}
</script>

<style scoped>

.formOpen .submitform{
    background-color: #5C8F86;
    border: 3px solid #2A2A2A;
    padding: 10px 20px;
    width: 200px;
    height: 40px;
    border-radius: 15px;
    font-size: 15px;
    margin-top: 35px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.15s all ease-in-out;
    font-family: 'Helvetica 25 UltraLight', sans-serif;
}

.formOpen .submitform:hover{
    transition: 0.4s all ease-in-out;
    background-color: #2A2A2A;
    color: #7D7D7D;
    letter-spacing: 3px;
}

.formOpen .inputform{
    background-color: #2A2A2A;
    border: 0px;
    padding: 10px 20px;
    width: 200px;
    height: 40px;
    border-radius: 15px;
    font-size: 15px;
    margin-bottom: 15px;
    font-family: 'Helvetica 25 UltraLight', sans-serif;
}
.titleform{
    color: black;
}

#form{
    transition: 0.4s all ease-in-out;
    transform: scale(0);
    transform-origin: bottom right;
}

.formOpen #form{
    position: absolute;
    display: flex;
    top: 235px;
    padding: 30px;
    border-radius: 15px;
    width: 350px;
    height: 50vh;
    background-color: #5C8F86;
    z-index: 50;
    transform: scale(1);
    transform-origin: bottom right;
}

.form .buttonStyle{
    transform: rotate(45deg);
    border: 0px #2A2A2A solid;
}

.form .buttonStyle:hover{
    transform: rotate(315deg);
    border: 2px #2A2A2A solid;
}

.buttonStyle{
    cursor: pointer;
    position: absolute;
    background-color: #2A2A2A;
    border: 0px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    font-size: 35px;
    color: #5C8F86;
    bottom: 45px;
    right: 65px;
    transition: 0.7s all ease-in-out;
}

.divButton .buttonStyle{
    z-index: 10;
}

.formOpen .form .buttonStyle{
    right: 15px;
    bottom: 15px;
}

.formOpen .divButton .buttonStyle{
    color: #5C8F86;
    transition: 0.4s all ease-in-out;
}

.buttonStyle:hover{
    background-color: #5C8F86;
    color: #FFFFFF;
    transition: 0.4s all ease-in-out;
    transform: rotate(270deg);
}
</style>
