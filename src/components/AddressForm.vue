<template>
  <div id="form-container">
    <h5>Add new Address</h5>
    <b-form @submit.prevent="handleSubmit" v-if="show">
      <b-form-group id="input-group-2">
        <b-form-input
          id="name"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3">
        <b-form-input
          id="address"
          v-model="formData.address"
          placeholder="Enter address"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-input
          id="phoneNumber"
          v-model="formData.phoneNumber"
          placeholder="Enter phone number"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddressForm",
  computed: {},
  data() {
    return {
      show: true,
      formData: {
        name: "",
        address: "",
        phoneNumber: ""
      }
    };
  },
  methods: {
    ...mapActions(["addAddress"]),
    handleSubmit() {
      this.addAddress(this.formData);
      this.formData = {
        name: "",
        address: "",
        phoneNumber: ""
      };
    }
  }
};
</script>

<style lang="scss"></style>
