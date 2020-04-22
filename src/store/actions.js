export default {
  addAddress: ({ commit }, data) => {
    commit("appendAddress", data);
  }
};
