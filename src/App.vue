<template>
  <div id="app">
    <header>
      <div id="header-home">
        <router-link :to="{ name: 'Home' }">
          <img src="./assets/home.png" alt="Home">
        </router-link>
      </div>
      <div id="header-logo">
        <router-link :to="{ name: 'Home' }">
          <img src="./assets/logo.png" alt="Logo">
        </router-link>
      </div>
      <div id="header-parameters">
        <router-link :to="{ name: 'Parameters' }">
          <img src="./assets/gear.png" alt="Gear">
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
@font-face {
    font-family: 'Akashi';
    src: url('./assets/fonts/akashi.ttf');
}

@font-face {
    font-family: 'OpenSans-Bold';
    src: url('./assets/fonts/OpenSans-Bold.ttf');
}

@font-face {
    font-family: 'Orbitron-Bold';
    src: url('./assets/fonts/Orbitron-Bold.otf');
}

html,body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

h1 {
  font-family: 'Akashi';
}

h2 {
  font-family: 'OpenSans-Bold';
}

header {
  width: 100%;
  height: 15%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $header-background;
  color: $header-color;
  border-bottom: 1px solid $header-border-background;

  a {
    color: $header-color;
  }

  > div {
    float: left;
    text-align: center;
    height: 100%;
    position: relative;

    img {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

  #header-home, #header-parameters {
    width: 20%;
    img {
      max-width: 25px;
    }
  }

  #header-logo {
    width: 60%;
  }
}

#content {
  position: absolute;
  left: 0;
  top: 15%;
  width: 100%;
  height: 85%;
  overflow-y: scroll;
  background: url('./assets/background.jpg') no-repeat center fixed;
  background-size: cover;
}
</style>
