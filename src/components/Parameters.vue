<template>
  <div>
    <h1>
      Parameters<icon name="beer"></icon>
    </h1>
    <router-link :to="{ name: 'Home' }">Home</router-link> -
    <router-link :to="{ name: 'Game' }">Game</router-link>
  </div>
</template>

<script>
export default {
  name: 'Parameters'
}
</script>
