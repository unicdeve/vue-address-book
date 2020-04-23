const saveAddressBook = addressBook => {
  const books = localStorage.getItem("addressBook");
  if (books) {
    localStorage.setItem("addressBook", JSON.stringify(addressBook));
  }
};

export default {
  appendAddress: (state, data) => {
    const addressBook = [
      data,
      ...JSON.parse(localStorage.getItem("addressBook"))
    ];

    saveAddressBook(addressBook);
    state.addressBook = addressBook;
  },

  editAddress: (state, data) => {
    const books = [...state.addressBook];

    const index = books.findIndex(book => book.name === data.name);

    if (index !== -1) {
      books[index] = data;
      state.addressBook = books;
      saveAddressBook(state.addressBook);
    }
  },

  setUser: (state, user) => {
    state.user = user;
  },

  logoutUser: state => {
    state.user = {};
  },

  setErrors: (state, errors) => {
    state.errors = errors;
  },

  selectAddress: (state, address) => {
    const book = [...state.addressBook];
    if (address.name) {
      state.selectedAddress = book.find(
        i =>
          i.name === address.name &&
          i.address === address.address &&
          i.phoneNumber === address.phoneNumber
      );
    } else {
      state.selectedAddress = {};
    }
  }
};
