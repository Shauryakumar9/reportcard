// JavaScript functions to handle overlay opening, form submission, and closing
let firstName;
let lastName;
let cFirstName;
let cLastName;
let fullName;
window.onload = function () {
  openOverlay();
};

function submitForm(event) {
  // Prevent the form from submitting and the page from refreshing
  event.preventDefault();

  // You can add further validation or processing here

  // Close the overlay
  closeOverlay();
}
// function closeWindow(close) {
//   close.preventDefault();

//   closeErrorOverlay();
// }

function openOverlay() {
  document.getElementById("overlay").style.display = "flex";
}
function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}
function openErrorOverlay() {
  document.querySelector(".overlay2").style.display = "flex";
}

function closeErrorOverlay() {
  document.querySelector(".overlay2").style.display = "none";
}

// let firstNameValue;
// function captureValue() {
//   firstName = document.querySelector(`#firstName`).value;
//   lastName = document.querySelector(`#lastName`).value;
//   //   firstNameValue = firstNameElement.value;
//   //   return console.log(firstNameValue);
// }
// function capitilizeName() {
//   cFirstName = `${firstName[0].toUpperCase()}${firstName
//     .substring(1)
//     .toLowerCase()}`;
//   cLastName = `${lastName[0].toUpperCase()}${lastName
//     .substring(1)
//     .toLowerCase()}`;
//   return `${cFirstName} ${cLastName}`;
// }

// const fullName = capitilizeName();
// console.log(fullName);

document.querySelector("#form").addEventListener("submit", function (event) {
  event.preventDefault();
  firstName = document.querySelector(`#firstName`).value.trim();
  lastName = document.querySelector(`#lastName`).value.trim();
  cFirstName = `${firstName[0].toUpperCase()}${firstName
    .substring(1)
    .toLowerCase()}`;
  cLastName = `${lastName[0].toUpperCase()}${lastName
    .substring(1)
    .toLowerCase()}`;
  fullName = `${cFirstName} ${cLastName}`;
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  if (fullName === "Prachi Rai") {
    document.querySelector(".name").textContent = "Prachi Rai";
    document.querySelector(".session").textContent = "2023-24";
    document.querySelector(".class").textContent = "9 B";
    document.querySelector(".subject").textContent = "Biology";
    //next part
    document.querySelector(".grade1").textContent = "😁";
    document.querySelector(".grade2").textContent = "😁";
    document.querySelector(".grade3").textContent = "😁";
    document.querySelector(".grade4").textContent = "😁";
    document.querySelector(".grade5").textContent = "😁";
    document.querySelector(".grade6").textContent = "😁";
    //next part
    document.querySelector(".remarkMain").textContent =
      "Prachi ma'am, our science teacher, goes beyond teaching science.She imparts wisdom that transforms learners into knowledgeable individuals. Her dedication fosters understanding and curiosity, making her an invaluable asset, shaping young minds for a future filled with knowledge and curiosity.";
  } else if (fullName === "Anupam Singh") {
    document.querySelector(".name").textContent = "Anupam Singh";
    document.querySelector(".session").textContent = "2023-24";
    document.querySelector(".class").textContent = "9 A";
    document.querySelector(".subject").textContent = "Social Studies";
    //next part
    document.querySelector(".grade1").textContent = "😊";
    document.querySelector(".grade2").textContent = "😁";
    document.querySelector(".grade3").textContent = "😁";
    document.querySelector(".grade4").textContent = "😁";
    document.querySelector(".grade5").textContent = "😊";
    document.querySelector(".grade6").textContent = "😁";
    //next part
    document.querySelector(".remarkMain").textContent =
      "A teacher who not only looks like a friend but also teaches beautifully, making understanding Social science an enriching experience. Students are captivated by her history lessons, and it's truly amazing how children become fascinated after learning from her. Ah, yes, she is the one people refer to as Anupam Ma'am.";
  } else if (fullName === "Seemi Legend") {
    document.querySelector(".name").textContent = "Seemi Legend";
    document.querySelector(".session").textContent = "2023-24";
    document.querySelector(".class").textContent = "10 B";
    document.querySelector(".subject").textContent = "English";
    //next part
    document.querySelector(".grade1").textContent = "😊";
    document.querySelector(".grade2").textContent = "😁";
    document.querySelector(".grade3").textContent = "😁";
    document.querySelector(".grade4").textContent = "😁";
    document.querySelector(".grade5").textContent = "😁";
    document.querySelector(".grade6").textContent = "😁";
    //next part
    document.querySelector(".remarkMain").textContent =
      "A wonderful teacher who appears exceptionally smart when wearing glasses, she is a reservoir of words herself. She possesses an extraordinary command over English, making her communication truly remarkable. Yes, she is Seemi Ma'am.";
  } else if (fullName === "Sajla Legend") {
    document.querySelector(".name").textContent = "Sajla Legend";
    document.querySelector(".session").textContent = "2023-24";
    document.querySelector(".class").textContent = "10 A";
    document.querySelector(".subject").textContent = "Hindi";
    //next part
    document.querySelector(".grade1").textContent = "😁";
    document.querySelector(".grade2").textContent = "😁";
    document.querySelector(".grade3").textContent = "😁";
    document.querySelector(".grade4").textContent = "😁";
    document.querySelector(".grade5").textContent = "😁";
    document.querySelector(".grade6").textContent = "😁";
    //next part
    document.querySelector(".remarkMain").textContent =
      "Our Hindi teacher not only teaches the language exceptionally well but also makes it a captivating experience. Her dedication to fostering a love for the beauty of Hindi language and literature is truly commendable. Ma'am Sajla is undoubtedly an asset to our academic community.";
  } else if (fullName === "Sudhanshu Legend") {
    document.querySelector(".name").textContent = "Sudhanshu Legend";
    document.querySelector(".session").textContent = "2023-24";
    document.querySelector(".class").textContent = "No Class";
    document.querySelector(".subject").textContent = "Computer";
    //next part
    document.querySelector(".grade1").textContent = "😁";
    document.querySelector(".grade2").textContent = "😊";
    document.querySelector(".grade3").textContent = "😁";
    document.querySelector(".grade4").textContent = "😁";
    document.querySelector(".grade5").textContent = "😁";
    document.querySelector(".grade6").textContent = "😁";
    //next part
    document.querySelector(".remarkMain").textContent =
      "We have a teacher who is proficient in all computer languages – Mr. Sudhanshu.Furthermore, our advanced computer science teacher, a true wizard in the realm of technology, imparts knowledge beyond the basics. With expertise in advanced programming languages and technologies, he equips students with the skills necessary to navigate the intricate landscape of computer science. Undoubtedly, Mr. Sudhanshu is a beacon of knowledge and inspiration in our academic journey.";
  } else if (fullName === "Ankush Shrivastav") {
    document.querySelector(".name").textContent = "Ankush Sharma";
    document.querySelector(".session").textContent = "2023-24";
    document.querySelector(".class").textContent = "No Class";
    document.querySelector(".subject").textContent = "Mathematics";
    //next part
    document.querySelector(".grade1").textContent = "😊";
    document.querySelector(".grade2").textContent = "😁";
    document.querySelector(".grade3").textContent = "😁";
    document.querySelector(".grade4").textContent = "😁";
    document.querySelector(".grade5").textContent = "😁";
    document.querySelector(".grade6").textContent = "😊";
    //next part
    document.querySelector(".remarkMain").textContent =
      "A teacher with a broad stature but an exceptionally sharp mind, he reads at a fast pace and imparts the truths of the world through mathematics. Yes, he is Mr. Ankush, and indeed, he also teaches computer science.";
  } else if (fullName === "Neha Pandey") {
    document.querySelector(".name").textContent = "Neha Pandey";
    document.querySelector(".session").textContent = "2023-24";
    document.querySelector(".class").textContent = "No Class";
    document.querySelector(".subject").textContent = "Health Education";
    //next part
    document.querySelector(".grade1").textContent = "😁";
    document.querySelector(".grade2").textContent = "😁";
    document.querySelector(".grade3").textContent = "😁";
    document.querySelector(".grade4").textContent = "😁";
    document.querySelector(".grade5").textContent = "😁";
    document.querySelector(".grade6").textContent = "😁";
    //next part
    document.querySelector(".remarkMain").textContent =
      "An excellent teacher with outstanding skills of her subject and overall teaching. Focues on extra curicular activities and is reallly friendly and creative.";
  } else if (fullName === "Vikrant Muskan") {
    document.querySelector(".name").textContent = "Vikrant Muskan";
    document.querySelector(".session").textContent = "2023-24";
    document.querySelector(".class").textContent = "No Class";
    document.querySelector(".subject").textContent = "Physical Education";
    //next part
    document.querySelector(".grade1").textContent = "😁";
    document.querySelector(".grade2").textContent = "😁";
    document.querySelector(".grade3").textContent = "😁";
    document.querySelector(".grade4").textContent = "😊";
    document.querySelector(".grade5").textContent = "😊";
    document.querySelector(".grade6").textContent = "😁";
    //next part
    document.querySelector(".remarkMain").textContent =
      "Our PTI teacher, Mr. Vikrant, demonstrates a remarkable understanding of the sport's intricacies. His expertise extends beyond the game itself, incorporating valuable life lessons into his coaching. With a passion for basketball, Vikrant sir enriches the sporting experience for our students and plays a vital role in nurturing their athletic abilities.";
  } else if (fullName === "Anurag Shrivastav") {
    document.querySelector(".name").textContent = "Anurag Shrivastav";
    document.querySelector(".session").textContent = "2023-24";
    document.querySelector(".class").textContent = "12 A";
    document.querySelector(".subject").textContent = "Physics";
    //next part
    document.querySelector(".grade1").textContent = "😑";
    document.querySelector(".grade2").textContent = "😑";
    document.querySelector(".grade3").textContent = "😁";
    document.querySelector(".grade4").textContent = "😊";
    document.querySelector(".grade5").textContent = "😊";
    document.querySelector(".grade6").textContent = "😑";
    //next part
    document.querySelector(".remarkMain").textContent =
      "A teacher with profound wisdom, whose generosity in sharing knowledge is like a bountiful feast. Emphasizing understanding, he transcends into the realms of profound enlightenment. His greatness stems from celestial heights, as he imparts celestial knowledge.\n\
      This remarkable individual is no one but Anurag sir our esteemed Physics teacher, a master in the art of sharing profound knowledge. With intellectual prowess that elevates learning, he stands as a beacon of greatness in our academic journey, inspiring minds to reach new heights.";
  } else {
    openErrorOverlay();
  }
});
console.log(`library:Prachi Rai,
        Anupam Singh,
        Seemi Legend,
        Sajla Legend,
        Sudhanshu Legend,
        Ankush Sharma,
        Neha Pandey,
        Vikrant Muskan,
        Anurag Shrivastav. `);
// window.onload = function () {
//   openOverlay();
// };

// let firstName;
// let lastName;
// let cFirstName;
// let cLastName;
// let fullName;

// function submitForm(event) {
//   // Prevent the form from submitting and the page from refreshing
//   event.preventDefault();

//   // You can add further validation or processing here

//   // Close the overlay
//   closeOverlay();
// }

// function openOverlay() {
//   document.getElementById("overlay").style.display = "flex";
// }

// function closeOverlay() {
//   document.getElementById("overlay").style.display = "none";
// }

// function openErrorOverlay() {
//   document.getElementById("errorOverlay").style.display = "flex";
// }

// function closeErrorOverlay() {
//   document.getElementById("errorOverlay").style.display = "none";
// }

// document.querySelector("#form").addEventListener("submit", function (event) {
//   event.preventDefault();
//   firstName = document.querySelector(`#firstName`).value.trim();
//   lastName = document.querySelector(`#lastName`).value.trim();
//   cFirstName = `${firstName[0].toUpperCase()}${firstName
//     .substring(1)
//     .toLowerCase()}`;
//   cLastName = `${lastName[0].toUpperCase()}${lastName
//     .substring(1)
//     .toLowerCase()}`;
//   fullName = `${cFirstName} ${cLastName}`;

//   // Define expected values
//   const expectedNames = [
//     "Prachi Rai",
//     "Anupam Singh",
//     "Seemi Legend",
//     "Sajla Legend",
//     "Sudhanshu Legend",
//     "Ankush Shrivastav",
//     "Neha Pandey",
//     "Vikrant Muskan",
//     "Anurag Legend",
//   ];

//   if (expectedNames.includes(fullName)) {
//     // If the name matches, display the information
//     displayTeacherInfo(fullName);
//   } else {
//     // If the name does not match, open the error overlay
//     openErrorOverlay();
//   }
// });

// // Function to display teacher information when the name matches
// function displayTeacherInfo(name) {
//   const selectorPrefix = `.${name.split(" ").join("-").toLowerCase()}`;
//   document.querySelector(`${selectorPrefix}.name`).textContent = name;
//   document.querySelector(`${selectorPrefix}.session`).textContent = "2023-24";
//   document.querySelector(`${selectorPrefix}.class`).textContent = "No Class"; // Adjust as needed
//   document.querySelector(`${selectorPrefix}.subject`).textContent = "Subject"; // Adjust as needed
//   // ... (add other details)

//   closeOverlay();
// }

// // Button to close both overlays
// document
//   .querySelector("#closeOverlaysBtn")
//   .addEventListener("click", function () {
//     closeOverlay();
//     closeErrorOverlay();
//   });
