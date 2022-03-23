// project أنشئ كائن
const project = {
  type: "medical",
  users: 10,
  biography() {
    return "it's a cbc (complete blood count)";
  },
};
// randomProperty أنشئ دالة
function randomProperty(obj) {
  const keys = Object.keys(obj);
  const random = Math.floor(Math.random() * keys.length);
  console.log(keys[random]);
  console.log(obj[`${keys[random]}`]);
}
randomProperty(project);
