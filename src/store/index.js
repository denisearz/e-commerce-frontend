import { createStore } from 'vuex'

export default createStore({
    state: {
      specialities: [],
      shoppingCart: {}
    },
    mutations: {
        //La mutation modifica el state, en este caso, el payload, es el listado de specialities
      setSpecialities(state, payload) {
        state.specialities = payload
      },
      setCarrito(state, payload) {
        state.shoppingCart[payload.id] = { ...payload }
        console.log(state.shoppingCart)
      },
      setVaciar(state) {
        state.shoppingCart = {}
      },
      aumentar(state, payload) {
        state.shoppingCart[payload].cantidad = state.shoppingCart[payload].cantidad + 1
      },
      disminuir(state, payload) {
        state.shoppingCart[payload].cantidad = state.shoppingCart[payload].cantidad - 1
        if (state.shoppingCart[payload].cantidad === 0) {
          delete state.shoppingCart[payload]
        }
      }
    },
    actions: {
      async fetchData({commit}) {
        try {
          const res = await fetch('http://localhost/speciality')
          .then(response => response.json())
          .then(data => console.log(data));
          const specialities = await res.json()
          commit('setSpecialities', specialities)
        } catch (error) {
          console.log(error)
        }
      },
      agregarCarrito({ commit, state }, speciality) {
        state.shoppingCart.hasOwnProperty(speciality.id)
          ? speciality.cantidad = state.shoppingCart[speciality.id].cantidad + 1
          : speciality.cantidad = 1
        commit('setCarrito', producto)
      }
    },
    getters: {
      totalCantidad(state) {
        return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
      },
      totalPrecio(state) {
        return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
      }
    }
  })