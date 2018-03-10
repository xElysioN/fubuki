<template>
  <div id='home'>
    <router-link :to="{ name: 'Game' }">Partie Rapide</router-link>
    <router-link :to="{ name: 'Rules' }">Règles du jeu</router-link>
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
      background-color: $home-li-background;
      color: $home-li-color;
      text-transform: uppercase;
      text-decoration: none;
      margin-left: 10%;
      margin-bottom: 5%;
      border: 2px solid $home-li-border-background;
      font-family: 'Orbitron-Bold';
    }
  }
</style>
