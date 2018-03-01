<template>
  <div id="app">
    <header>
      <div id="header-home">
        <router-link :to="{ name: 'Home' }">
          <icon name='home'></icon>
        </router-link>
      </div>
      <div id="header-logo">
        LOGO
      </div>
      <div id="header-parameters">
        <router-link :to="{ name: 'Parameters' }">
          <icon name='cog'></icon>
        </router-link>
      </div>
    </header>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fubuki'
}
</script>

<style lang='scss'>
html,body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

header {
  width: 100%;
  height: 20%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: yellow;
  color: black;
}

#content {
  background-color: green;
  position: absolute;
  left: 0;
  top: 20%;
  width: 100%;
  height: 80%;
  overflow-y: scroll;
}
</style>
