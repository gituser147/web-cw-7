// Database قاعدة البيانات
const chars = [
  { 1: "0123456789" },
  { 2: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  { 3: "abcdefghijklmnopqrstuvwxyz" },
  { 4: "+-*/!@#$%^&*()~|(){}[]<>;:'`.," },
];
// دالة generate
function generate() {
  let randompassword = "";
  let collection_one = chars[0]["1"];
  let collection_two = chars[1]["2"];
  let collection_three = chars[2]["3"];
  let collection_four = chars[3]["4"];
  randompassword = randompassword = collection_one.charAt(
    Math.floor(Math.random * collection_one.charAt.length)
  );
  randompassword = randompassword = collection_two.charAt(
    Math.floor(Math.random * collection_two.charAt.length)
  );
  randompassword = randompassword = collection_three.charAt(
    Math.floor(Math.random * collection_three.charAt.length)
  );
  randompassword = randompassword = collection_four.charAt(
    Math.floor(Math.random * collection_four.charAt.length)
  );
  display.value = randompassword;
}
