<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  box-shadow: 0px 16px 24px #50b0f117;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 1.5rem;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
