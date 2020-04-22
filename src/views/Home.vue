<template>
  <div id="home-container">
    <h1>Welcome to your address book...</h1>

    <AddressList />
  </div>
</template>

<script>
import AddressList from "@/components/AddressList.vue";

export default {
  name: "Home",
  components: {
    AddressList
  }
};
</script>

<style lang="scss">
#home-container {
  .list-group {
    color: #333;
    line-height: 1.1;

    .name,
    .number {
      font-weight: 800;
    }

    .number {
      font-size: 90%;
    }

    .address {
      font-size: 80%;
      color: #ccc;
    }
  }
  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }
  }
}
</style>
