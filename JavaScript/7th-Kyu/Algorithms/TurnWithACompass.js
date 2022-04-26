function direction(facing, turn) {
  // your code here
  switch (turn) {
    case 0:
      return "N";
      break;
    case 45:
      return "NE";
      break;
    case 90:
      return "E";
      break;
    case 135:
      return "SE";
      break;
    case 180:
      return "S";
      break;
    case 225:
      return "SW";
      break;
    case 270:
      return "W";
      break;
    case 315:
      return "NW";
      break;
  }

  switch (facing) {
    case "N":
      return 0;
      break;
    case "NE":
      return 45;
      break;
    case 90:
      return "E";
      break;
    case "SE":
      return 135;
      break;
    case "S":
      return 180;
      break;
    case "SW":
      return 225;
      break;
    case "W":
      return 270;
      break;
    case "NW":
      return 315;
      break;
  }
  if (turn >= 360) {
    turn = turn - 360;
  } else if (turn < 0) {
    turn = turn + 360;
  } else {
    turn;
  }

  //   console.log(facing);
  //    console.log(turn)
}

console.log(direction("SW"));
