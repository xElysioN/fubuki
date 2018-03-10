<template>
  <div id="parameters">
    <h1>
      Paramètres
    </h1>
    <h2>Niveau de difficulté</h2>
    <div id="difficulties">
      <div>
        <input type="radio" name="difficulty" v-model="fubuki.config.difficulty" v-bind:value="Fubuki.DIFFICULTY_EASY" /> Facile
      </div>
      <div>
        <input type="radio" name="difficulty" v-model="fubuki.config.difficulty" v-bind:value="Fubuki.DIFFICULTY_MEDIUM" /> Moyen
      </div>
      <div>
        <input type="radio" name="difficulty" v-model="fubuki.config.difficulty" v-bind:value="Fubuki.DIFFICULTY_HARD" /> Difficile
      </div>
    </div>
    <h2>Afficher le chronomètre</h2>
    <div id="time">
      <div>
        <input type="radio" name="time" v-model="fubuki.config.time" v-bind:value=true> Oui
      </div>
      <div>
        <input type="radio" name="time" v-model="fubuki.config.time" v-bind:value=false> Non
      </div>
    </div>
    <h2>Mode de jeu</h2>
    <div id="type">
      <div>
        <input type="radio" name="type" v-model="fubuki.config.type" v-bind:value="Fubuki.TYPE_ADDITION"> Addition
      </div>
      <div>
        <input type="radio" name="type" v-model="fubuki.config.type" v-bind:value="Fubuki.TYPE_MULTIPLICATION"> Multiplication
      </div>
    </div>
  </div>
</template>

<script>
import Fubuki from '../model/fubuki'
export default {
  name: 'Parameters',
  data () {
    return {
      fubuki: this.$fubuki,
      Fubuki: Fubuki
    }
  }
}
</script>

<style lang="scss" scoped>
  #parameters {
    color: white;
    padding: 0 3%;
  }
  h1 {
    text-transform: uppercase;
    padding-bottom: 3px;
    border-bottom: 1px solid white;
  }
  #difficulties, #time, #type {
    &::after {
      content: "";
      clear: both;
      display: table;
    }

    > div {
      float: left;
      margin-left: 10px;
    }
  }
</style>
