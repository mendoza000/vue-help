<template>
  <div id="prestamista">
    <a href="#login.vue">Logaut</a>
    <div class="resumen-1">
        <table class="table">
            <tr>
                <td>Nombre</td>
                <td></td>
            </tr>
            <tr>
                <td>Saldo de la cuenta</td>
                <td></td>
            </tr>
        </table>
        <h2>Lista de persona que necesitan ayuda</h2>
        <table class="table-1">
            <tr>
                <td>Nombre</td>
                <td></td>
            </tr>
            <tr>
                <td>Dinero Necesario Para</td>
                <td></td>
            </tr>
            <tr>
                <td>Descripcion</td>
                <td></td>
            </tr>
            <tr>
                <td>Cantidad Requerida</td>
                <td></td>
            </tr>
             <tr>
                <td>Cantidad Recaudada</td>
                <td></td>
            </tr>
             <tr>
                <td>Accion</td>
                <form class="accion">
                    <div>
                        <input
                            type="number" min="100000" max="5000000"
                            placeholder="Number"
                            id="number"
                            v-model="number">
                        <button type="submit">Prestar</button>
                    </div>
                    <div>
                        <input
                            type="number" min="100000" max="5000000"
                            placeholder="Number"
                            id="number"
                            v-model="number">
                        <button type="submit">Prestar</button>
                    </div>
                    <div>
                        <input
                            type="number" min="100000" max="5000000"
                            placeholder="Number"
                            id="number"
                            v-model="number">
                        <button type="submit">Prestar</button>
                    </div>
                    <div>
                        <input
                            type="number" min="100000" max="5000000"
                            placeholder="Number"
                            id="number"
                            v-model="number">
                        <button type="submit">Prestar</button>
                    </div>
                </form>
            </tr>
        </table>
         <h2>Lista de personas a la que le prestaste dinero</h2>
        <table class="table-2">
            <tr>
                <td>Nombre</td>
                <td></td>
            </tr>
             <tr>
                <td>Dinero Necesario Para</td>
                <td></td>
            </tr>
             <tr>
                <td>Descripcion</td>
                <td></td>
            </tr>
            <tr>
                <td>Cantidad Requerida</td>
                <td></td>
            </tr>
             <tr>
                <td>Cantidad Recaudada</td>
                <td></td>
            </tr>
             <tr>
                <td>Cantidad Prestada</td>
                <td></td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>

// import { required, email, numeric, minValue, minLength, sameAs } from 'vuelidate/lib/validators'
//   import axios from 'axios'
// export default {
//     data () {
//       return {
//         email: '',
//         name: '',
//         age: null,
//         password: '',
//         confirmPassword: ''
//       }
//     },
//      methods : {
//        onSubmit () {
//         const signupData = {
//           name:this.name,
//           email: this.email,
//           age: this.age,
//           password: this.password,
//           confirmPassword : this.confimPassword
//         }
//         console.log(signupData)
//         this.$store.dispatch('signup', signupData)
//       }
//      },
//      validations: {
//       email: {
//         required,
//         email,
//         unique: val => {
//           if (val === '') return true
//           return axios.get('https://reporte-de-eventos-e35e0-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="' + val + '"')
//             .then(res => {
//               return Object.keys(res.data).length === 0
//             })
//         }
//       },
//       age: {
//         required,
//         numeric,
//         minVal: minValue(18)
//       },
//       password: {
//         required,
//         minLen: minLength(6)
//       },
//       confirmPassword: {
// //        sameAs: sameAs('password')
//         sameAs: sameAs(vm => {
//           return vm.password
//         })
//       }
//     }
// }
// </script>