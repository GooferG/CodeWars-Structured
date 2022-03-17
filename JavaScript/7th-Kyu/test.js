var members = [
  {
    firstName: "Howard",
    lastName: "Lee",
    membershipIsCurrent: true,
    MemberID: 235,
  },
  {
    firstName: "James",
    lastName: "Icharis",
    membershipIsCurrent: false,
    MemberID: 236,
  },
  {
    firstName: "Thomas",
    lastName: "Cronquist",
    membershipIsCurrent: true,
    MemberID: 237,
  },
  {
    firstName: "Philip",
    lastName: "Grover",
    membershipIsCurrent: false,
    MemberID: 238,
  },
  {
    firstName: "Eric",
    lastName: "Broadstone",
    membershipIsCurrent: true,
    MemberID: 239,
  },
  {
    firstName: "Hunter",
    lastName: "Gonzales",
    membershipIsCurrent: true,
    MemberID: 240,
  },
];
function lapsedIDs(array) {
  return array
    .filter(function (member) {
      return member.membershipIsCurrent === false;
    })
    .map(function (member) {
      return member.MemberID;
    });
}

console.log(lapsedIDs(members));
