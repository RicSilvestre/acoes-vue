<template>
  <div class="body-wrapper favorite-wrapper">
    <h1>Página favoritos</h1>
    <FavCard/>
  </div>
</template>

<script>
import FavCard from "../components/FavCard.vue";
export default {
  components: {
    FavCard
  }
}
</script>

<style>

.favorite-wrapper {
  flex-direction: column;
  text-align: left;
  
}

.favorite-wrapper h1 {
  margin-bottom: 2rem;
}

</style>