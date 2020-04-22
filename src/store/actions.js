export default {
  addAddress: ({ commit }, data) => {
    let books = localStorage.getItem("addressBook");
    if (books) {
      books = [data, ...JSON.parse(localStorage.getItem("addressBook"))];
      console.log(books);
      localStorage.setItem("addressBook", JSON.stringify(books));
    }

    commit("appendAddress", data);
  }
};
