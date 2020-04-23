import users from "../data/users";

export default {
  addAddress: ({ commit }, data) => {
    let books = localStorage.getItem("addressBook");
    if (books) {
      books = [data, ...JSON.parse(localStorage.getItem("addressBook"))];
      console.log(books);
      localStorage.setItem("addressBook", JSON.stringify(books));
    }

    commit("appendAddress", data);
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
  }
};
