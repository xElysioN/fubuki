<template>
  <div id='home'>
    <router-link :to="{ name: 'Game' }">Partie Rapide</router-link>
    <a href="">Règles du jeu</a>
    <router-link :to="{ name: 'Parameters' }">Paramètres</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
  #home {
    text-align: center;
    padding-top: 5%;

    a {
      width: 70%;
      display: block;
      padding: 5%;
      background-color: purple;
      color: white;
      margin-left: 10%;
      margin-bottom: 5%;
    }
  }
</style>
