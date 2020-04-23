import users from "../data/users";

export default {
  addAddress: ({ commit }, data) => {
    commit("appendAddress", data);
  },

  editAddress: ({ commit }, data) => {
    commit("editAddress", data);
  },

  login: ({ commit }, data) => {
    const errors = {};
    const user = users.find(
      user => user.username === data.username && user.password === data.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));

      commit("setUser", user);
    } else {
      errors.general = "Wrong username/password";
      commit("setErrors", errors);
    }
  },

  logout: ({ commit }) => {
    localStorage.removeItem("user");
    commit("logoutUser");
  },

  clearError: ({ commit }) => {
    commit("setErrors", {});
  },

  selectAddress: ({ commit }, address) => {
    commit("selectAddress", address);
  }
};
