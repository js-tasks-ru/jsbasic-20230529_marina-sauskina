// function returns users names at the age given or younger and their balance
// @ users - object, age - number parameter of user
function showSalary(users, age) {
  return users.filter(user => user.age <= age).map(user => user.name + ', ' + user.balance).join('\n');
}
