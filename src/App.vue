<template>
  <div id="app">
    <Header />
    <div class="router-view-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .router-view-container {
    display: flex;
    flex-direction: column;
    margin: 2rem 15rem;

    @media only screen and (max-width: 800px) {
      margin: 0 1rem;
    }
  }
}
</style>
