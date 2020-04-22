import addressBook from "../data/address-book";

let book = addressBook;
if (localStorage.addressBook) {
  book = JSON.parse(localStorage.getItem("addressBook"));
  console.log("complaining");
} else {
  localStorage.setItem("addressBook", JSON.stringify(book));
}

export default {
  addressBook: book
};
