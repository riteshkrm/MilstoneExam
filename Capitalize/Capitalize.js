function capitalizeFirstLetter(name) {
    return name && name[0].match(/[a-z]/) ? name[0].toUpperCase() + name.slice(1) : name;
}


const name = prompt("Enter your name:");
const capitalizedName = capitalizeFirstLetter(name);
console.log(`Your name with first letter capitalized: ${capitalizedName}`);
