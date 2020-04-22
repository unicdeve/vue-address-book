<template>
  <div id="nav">
    <div class="nav-container">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  box-shadow: 0px 16px 24px #50b0f117;
  margin: 0 auto;

  .nav-container {
    display: flex;
    justify-content: center;
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 1.5rem;

    @media only screen and (max-width: 800px) {
      margin: 0 0.5rem;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
