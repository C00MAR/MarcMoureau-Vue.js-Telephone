<template>
  <div class="main_box">
    <nav>
    <router-link to="/journal">Journal</router-link>
    <router-link to="/">Contact</router-link>
    <router-link to="/clavier">Clavier</router-link>
  </nav>
  <router-view/>
  </div>
</template>

<style>
body{
  background-color: black;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #212121;
  border-radius: 15px;
  height: 97vh;
  text-align: center;
  width: 35%;
  margin-left: 32.5%;
  text-align: center;
}

nav {
  margin-top: 30px;
  border-radius: 15px;
  padding: 30px;
  background-color: #2A2A2A;
}

nav a {
  font-family: 'Helvetica 25 UltraLight', sans-serif;
  font-weight: 100;
  color: #7d7d7d;
  position: relative;
  text-decoration: none;
  padding: 0px 15px;
  text-transform: uppercase;
}

nav a::before {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 10%;
  right: 0;
  width: 80%;
  height: 1px;
  background-color: #5C8F86;
  transform-origin: bottom center;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

nav a:hover::before, nav a.router-link-exact-active::before {
  transform-origin: bottom center;
  transform: scaleX(1);
}

nav a.router-link-exact-active::before {
  height: 2px;
}

nav a.router-link-exact-active {
  color: #5C8F86;
  font-family: 'Helvetica Neue', sans-serif;
}

h1{
  color: #5C8F86;
  letter-spacing: 0.5px;
  font-family: 'Helvetica Neue', sans-serif;
}

h2{
  color: #7d7d7d;
  font-family: 'Helvetica 55 Roman', sans-serif;
}

span{
  font-family: 'Helvetica 25 UltraLight', sans-serif;
}

p{
  font-family: 'Helvetica 35 Thin', sans-serif;
}

</style>
