<template>
  <div id="registro">
      
      <!-- Prestador -->
       <div class="Prestador">
         <h2>Prestador</h2>
         <router-link to="/Login">Login</router-link>
        <form class="registro-form" @submit.prevent="onSubmit">
          <div class="input" :class="{invalid: $v.email.$error}">
            <div class="input">
              <input
                  type="name"
                  placeholder="Nombre"
                  id="name"
                  v-model="name">
               <input
                  type="apellido"
                  placeholder="Apellido"
                  id="apellido"
                  v-model="apellido">
          </div>
              <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  @blur="$v.email.$touch()"
                  v-model="email">
        </div>
      
        <div class="input" :class="{invalid: $v.password.$error}">
          <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password">
        </div>

        <div>
          <input
                  type="number" min="100000" max="5000000"
                  placeholder="Number"
                  id="number"
                  v-model="number">
        </div>

          <button type="submit" :disabled="$v.$invalid">Crear</button>
          <p class="message">¿Ya eres usuario? <router-link to="/LoginView">Registrar</router-link></p>
        </form> 
    </div>
    <!-- Prestamista -->
    <h2>Prestamista</h2>
    <div class="Prestamista">
        <form class="registro-form" @submit.prevent="onSubmit">
          <div class="input" :class="{invalid: $v.email.$error}">
            <div class="input">
              <input
                  type="name"
                  placeholder="Nombre"
                  id="name"
                  v-model="name">
               <input
                  type="apellido"
                  placeholder="Apellido"
                  id="apellido"
                  v-model="apellido">
          </div>
              <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  @blur="$v.email.$touch()"
                  v-model="email">
        </div>
      
        <div class="input" :class="{invalid: $v.password.$error}">
          <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  @blur="$v.password.$touch()"
                  v-model="password">
        </div>

        <div>
          <input
                  type="number" min="100000" max="5000000"
                  placeholder="Number"
                  id="number"
                  v-model="number">
        </div>

        <div>
          <input
                  type="text"
                  placeholder="Text"
                  id="text"
                  v-model="text">
        </div>

         <div>
          <input
                  type="textarea" cols="10" rows="100"
                  placeholder="Textarea"
                  id="textarea"
                  v-model="textarea">
        </div>

          <button type="submit" :disabled="$v.$invalid">Crear</button>
          <p class="message">¿Ya eres usuario? <router-link to="/LoginView">Registrar</router-link></p>
        </form> 
    </div>
  </div>
</template>

<style scoped>
 @import url(https://fonts.googleapis.com/css?family=Roboto:300);

    #registro {
    width: 80%;
    margin: auto;
  }
  h2{
    text-align: center;
    font-family:  "Roboto", sans-serif;
  }

</style>

<script>

import { required, email, minLength,} from 'vuelidate/lib/validators'
  import axios from 'axios'
export default {
    data () {
      return {
        name: '',
        apellido: '',
        email: '',
        number: '',
        password: '',
        text: '',
        textarea: '',
      }
    },
     methods : {
       onSubmit () {
        const RegistroViewData = {
          name:this.name,
          apellido:this.apellido,
          email: this.email,
          number: this.number,
          password: this.password,
          text: this.text,
          textarea: this.textarea,
        }
        console.log(RegistroViewData)
        this.$store.dispatch('RegistroView', RegistroViewData)
      }
     },
     validations: {
      email: {
        required,
        email,
        unique: val => {
          if (val === '') return true
          return axios.get('https://app-pagos-prestamos-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="' + val + '"')
            .then(res => {
              return Object.keys(res.data).length === 0
            })
        }
      },
      password: {
        required,
        minLen: minLength(6)
      },
    }
}
</script>