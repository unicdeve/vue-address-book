<template>
  <div id="address-container">
    <b-list-group v-if="addressBook">
      <b-list-group-item v-for="(item, i) in addressBook" :key="`${i}`">
        <span class="name">{{ item.name }}</span
        >, <span class="number">{{ item.phoneNumber }}</span> <br />
        <span class="address">{{ item.address }}</span>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AddressList",
  computed: {
    ...mapState(["addressBook"])
  }
};
</script>

<style lang="scss">
#address-container {
  width: 80%;
  max-width: 550px;

  .list-group {
    color: #333;
    line-height: 1.1;

    .list-group-item {
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

      &:hover {
        background: #f5f5f5;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }
  }
}
</style>
