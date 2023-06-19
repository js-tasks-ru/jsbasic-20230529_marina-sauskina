function makeFriendsList(friends) {
  const UL = document.createElement('ul');
  let li = '';

  for (let friend of friends) {
    li += `<li> ${friend.firstName} ${friend.lastName} </li>`;

    // const LI = document.createElement('li');
    // LI.textContent = friend.firstName + " " + friend.lastName;
    // UL.appendChild(LI);
  }
  UL.innerHTML = li;

  return UL;
}
