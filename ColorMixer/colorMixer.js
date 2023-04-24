function mixColors(color1, color2) {
    switch (color1.toLowerCase()) {
      case "red":
        switch (color2.toLowerCase()) {
          case "blue":
            return "purple";
          case "yellow":
            return "orange";
          default:
            return "Invalid color combination";
        }
      case "blue":
        switch (color2.toLowerCase()) {
          case "red":
            return "purple";
          case "yellow":
            return "green";
          default:
            return "Invalid color combination";
        }
      case "yellow":
        switch (color2.toLowerCase()) {
          case "red":
            return "orange";
          case "blue":
            return "green";
          default:
            return "Invalid color combination";
        }
      default:
        return "Invalid color combination";
    }
  }
  
  console.log(mixColors("red", "blue"));
  console.log(mixColors("yellow", "blue"));
  console.log(mixColors("red", "yellow"));
  console.log(mixColors("green", "yellow"));
  