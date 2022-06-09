// conecxion base de datos firebase
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    RegistroViewUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, user) {
      state.user = user
    },
    clearRegistroViewData (state) {
      state.idToken = null
      state.userId = null
      state.user = null
    }
  },
  actions: {
    signup ({commit, dispatch}, RegistroViewData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBOgde5SP0n8sxaUIWYtqpvVLbsvrRaGd4', {
        email: RegistroViewData.email,
        password: RegistroViewData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('RegistroViewUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('email', res.data.email)
          dispatch('storeUser', RegistroViewData)
           router.push('/LoginView')
        })
        //.catch(error => alert(error.message))
    },
     postData ({state}, eventoData) {
      if (!state.idToken) {
        return
      }
      axios.post('https://app-pagos-prestamos-default-rtdb.firebaseio.com/evento.json' + '?RegistroView=' + state.idToken , eventoData)
        .then(res => {
         console.log(res)
        })
        alert("Done")
        //.catch(error => console.log(error))
    },
    login ({commit}, RegistroViewData) {
      axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBOgde5SP0n8sxaUIWYtqpvVLbsvrRaGd4', {
        email: RegistroViewData.email,
        password: RegistroViewData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('email', res.data.email)
          commit('RegistroViewhUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })

           router.push('/LoginView')
        })
        //.catch(error => alert(error.message))
    },
    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('RegistroViewUser', {
        token: token,
        userId: userId
      })
       router.push('/LoginView')
    },
    logout ({commit}) {
      commit('clearRegistroViewData')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/signin')
    },
    storeUser ({ state}, userData) {
      if (!state.idToken) {
        return
      }
      axios.post('https://app-pagos-prestamos-default-rtdb.firebaseio.com/users.json' + '?RegistroView=' + state.idToken, userData)
        .then(res => console.log(res))
        //.catch(error => console.log(error))
    },
    fetchUser ({ commit, state}) {
      if (!state.idToken) {
        return
      }
      const email = localStorage.getItem('email')
      axios.get('https://app-pagos-prestamos-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="' + email + '"')
        .then (res => {
          console.log(res)
        
         // const users = [] 
          console.log(res.data)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
            console.log(users)
          }
         commit('storeUser', users[0])
        })
        //.catch(error => console.log(error))
    }
  },
  getters: {
    user (state) {
       return state.user
    },
    isAuthenticated (state) {
      return state.idToken !== null
    }
  }
})