<template>
  <div id="form-container">
    <h5>Add new Address</h5>
    <b-form @submit.prevent="handleSubmit" v-if="show">
      <b-form-group id="input-group-2">
        <b-form-input id="name" v-model="formData.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3">
        <b-form-input id="address" v-model="formData.address" placeholder="Enter address" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-input
          id="phoneNumber"
          v-model="formData.phoneNumber"
          placeholder="Enter phone number"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="button" v-if="btnText === 'Edit'" class="mr-2" @click="handleCancel">Cancel</b-button>
      <b-button type="submit" variant="primary">{{ btnText }}</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "AddressForm",
  computed: {
    ...mapState(["errors", "selectedAddress"])
  },

  data() {
    return {
      show: true,
      btnText: "Add",
      formData: {
        name: "",
        address: "",
        phoneNumber: ""
      }
    };
  },
  methods: {
    ...mapActions(["addAddress", "editAddress", "selectAddress"]),
    handleSubmit() {
      if (this.selectedAddress.name) {
        this.editAddress(this.formData);
      } else {
        this.addAddress(this.formData);
      }
      this.resetForm();
    },

    resetForm() {
      this.formData = {
        name: "",
        address: "",
        phoneNumber: ""
      };
    },

    handleCancel() {
      this.btnText = "Add";
      this.selectAddress({});
      this.resetForm();
    }
  },
  updated: function() {
    this.$nextTick(function() {
      if (this.errors.general) this.showErrors = true;
      else this.showErrors = false;

      if (this.selectedAddress.name) {
        this.btnText = "Edit";
      }
    });
  },
  watch: {
    selectedAddress(newValue, oldValue) {
      console.log("newValue", newValue);
      if (newValue.name) {
        this.formData = newValue;
      }
    }
  }
};
</script>

<style lang="scss"></style>
