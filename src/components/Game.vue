<template>
  <div>
    <h1>Game</h1>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Parameters' }">Parameters</router-link> -
  </div>
</template>

<script>
export default {
  name: 'Game'
}
</script>
