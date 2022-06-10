<template>
  <div id="app">
    <h1>Cooperativa Chile</h1>
   <div id="nav">
      <router-link to="/">Registro</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/prestamista">Prestamista</router-link> |
      <router-link to="/prestatario">Prestatario</router-link>
    </div>
    <router-view v-slot="{ Component }">
      <suspense>
        <component :is="Component" />
      </suspense>
    </router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
 @import url(https://fonts.googleapis.com/css?family=Roboto:300);

body{
  background: linear-gradient(to right, rgb(160, 226, 158), white);;
}
h1{
  font-size: 3em;
  text-align: center;
  position: absolute;
  left: 35%;
  line-height: 200px;
  color: rgb(11, 99, 30);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-shadow: 1px 1px 1px rgb(112, 107, 107);
}
#nav{
  width: 40%;
  height: auto;
  margin: 0px auto;
  text-align: center; 
  line-height: 500px;
  font-size: 1.5em;
}
#nav a{
  text-decoration: none;
  color: black;
  width: 20px;
  height: 20px;
  padding: 10px;
  border-radius: 10px;
  transition: background 2s, color 1s ease-out;
}
#nav a:hover{
    border-radius: 20px;
    background: rgb(11, 99, 30);
    color: antiquewhite;
}
</style>

