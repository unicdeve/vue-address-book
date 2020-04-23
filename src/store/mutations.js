export default {
  appendAddress: (state, data) => {
    state.addressBook = [data, ...state.addressBook];
  },
  setUser: (state, user) => {
    state.user = user;
  },
  logoutUser: state => {
    state.user = {};
  },
  setErrors: (state, errors) => {
    state.errors = errors;
  }
};
