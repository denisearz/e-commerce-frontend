<template>
  <div class="card">
     <p>Contratar Servicio</p>
        <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">$ <span></span></p>
        <button class="btn btn-dark" @click="comprar(speciality)">Comprar</button>
        </div>
  </div>
</template>
<script>
export default {
  name: "Card"
}
</script>