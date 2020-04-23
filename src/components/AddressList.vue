<template>
  <div id="address-container">
    <b-list-group v-if="addressBook">
      <b-list-group-item v-for="(item, i) in addressBook" :key="`${i}`">
        <div>
          <span class="name">{{ item.name }}</span>,
          <span class="number">{{ item.phoneNumber }}</span>
          <br />
          <span class="address">{{ item.address }}</span>
        </div>

        <div class="icons-container">
          <b-icon
            icon="trash-fill"
            variant="success"
            v-b-tooltip.hover
            title="Delete"
            class="mr-2"
          />
          <b-icon
            icon="pencil"
            variant="success"
            v-b-tooltip.hover
            title="Edit"
            @click="handleSelectedAddress(item)"
          />
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "AddressList",
  computed: {
    ...mapState(["addressBook"])
  },
  methods: {
    ...mapActions(["selectAddress"]),
    handleSelectedAddress(address) {
      this.selectAddress(address);
    }
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
      display: flex;
      justify-content: space-between;

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

      .icons-container {
        display: none;

        svg {
          cursor: pointer;
        }
      }

      &:hover {
        background: #f5f5f5;

        .icons-container {
          display: inline-block;
        }
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
