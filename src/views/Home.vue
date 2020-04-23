<template>
  <div id="home-container">
    <h1 class="text-center mb-3 mb-lg-5">Welcome to your address book...</h1>

    <div class="list-form-container">
      <AddressList />
      <div class="address-container">
        <AddressForm />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddressList from "@/components/AddressList.vue";
import AddressForm from "@/components/AddressForm.vue";

export default {
  name: "Home",
  components: {
    AddressList,
    AddressForm
  },
  computed: {
    ...mapState(["user"])
  },
  mounted() {
    this.$nextTick(function() {
      if (!this.user.username) this.$router.push("/login");
    });
  }
};
</script>

<style lang="scss">
#home-container {
  .list-form-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .address-container {
      margin-left: 2rem;

      @media only screen and (max-width: 800px) {
        margin-left: 0;
        margin-top: 2rem;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }

    .list-form-container {
      flex-direction: column;
    }
  }
}
</style>
