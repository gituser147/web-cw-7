// Database قاعدة البيانات
const chars = [
  { nums: "0123456789" },
  { capLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { smallLetters: "abcdefghijklmnopqrstuvwxyz" },
  { symbols: "+-*/!@#$%^&*()~|(){}[]<>;:'`.," },
];
// دالة generate
function generate() {
  let randompassword = "";
  let collection_one = chars[0]["nums"];
  let collection_two = chars[1]["capLetters"];
  let collection_three = chars[2]["smallLetters"];
  let collection_four = chars[3]["symbols"];
  randompassword =
    randompassword +
    collection_one.charAt(Math.floor(Math.random() * collection_one.length));
  randompassword =
    randompassword +
    collection_two.charAt(Math.floor(Math.random() * collection_two.length));
  randompassword =
    randompassword +
    collection_three.charAt(
      Math.floor(Math.random() * collection_three.length)
    );
  randompassword =
    randompassword +
    collection_four.charAt(Math.floor(Math.random() * collection_four.length));
  randompassword =
    randompassword +
    collection_one.charAt(Math.floor(Math.random() * collection_one.length));
  randompassword =
    randompassword +
    collection_two.charAt(Math.floor(Math.random() * collection_two.length));
  randompassword =
    randompassword +
    collection_three.charAt(
      Math.floor(Math.random() * collection_three.length)
    );
  randompassword =
    randompassword +
    collection_four.charAt(Math.floor(Math.random() * collection_four.length));
  randompassword =
    randompassword +
    collection_one.charAt(Math.floor(Math.random() * collection_one.length));
  randompassword =
    randompassword +
    collection_two.charAt(Math.floor(Math.random() * collection_two.length));
  randompassword =
    randompassword +
    collection_three.charAt(
      Math.floor(Math.random() * collection_three.length)
    );
  randompassword =
    randompassword +
    collection_four.charAt(Math.floor(Math.random() * collection_four.length));
  randompassword =
    randompassword +
    collection_one.charAt(Math.floor(Math.random() * collection_one.length));
  randompassword =
    randompassword +
    collection_two.charAt(Math.floor(Math.random() * collection_two.length));
  randompassword =
    randompassword +
    collection_three.charAt(
      Math.floor(Math.random() * collection_three.length)
    );
  randompassword =
    randompassword +
    collection_four.charAt(Math.floor(Math.random() * collection_four.length));
  display.value = randompassword;
}
