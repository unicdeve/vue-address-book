export default {
  appendAddress: (state, data) => {
    state.addressBook = [data, ...state.addressBook];
  }
};
