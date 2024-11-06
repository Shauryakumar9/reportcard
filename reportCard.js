"use strict";
let Name;

window.onload = function () {
  openOverlay();
};

function submitForm(event) {
  event.preventDefault();
  closeOverlay();
}

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

const entries = {
  prachirai: {
    teacherName: "Prachi Rai",
    session: "2023-24",
    class: "9 B",
    subject: "Biology",
    grades: ["😁", "😁", "😁", "😁", "😁", "😁"],
    remark:
      "Prachi ma'am, our science teacher, goes beyond teaching science.She imparts wisdom that transforms learners into knowledgeable individuals. Her dedication fosters understanding and curiosity, making her an invaluable asset, shaping young minds for a future filled with knowledge and curiosity.",
  },
  anuragshrivastav: {
    teacherName: "Anurag Shrivastav",
    session: "2023-24",
    class: "12 A",
    subject: "Physics",
    grades: ["😁", "😁", "😁", "😁", "😁", "😁"],
    remark:
      "A teacher with profound wisdom, whose generosity in sharing knowledge is like a bountiful feast. Emphasizing understanding, he transcends into the realms of profound enlightenment. His greatness stems from celestial heights, as he imparts celestial knowledge.\n\
      This remarkable individual is no one but Anurag sir our esteemed Physics teacher, a master in the art of sharing profound knowledge. With intellectual prowess that elevates learning, he stands as a beacon of greatness in our academic journey, inspiring minds to reach new heights.",
  },
  ankushshrivastav: {
    teacherName: "Ankush Shrivastav",
    session: "2023-24",
    class: "No Class",
    subject: "Computer",
    grades: ["😁", "😁", "😁", "😁", "😁", "😁"],
    remark:
      "A teacher with a broad stature but an exceptionally sharp mind, he reads at a fast pace and imparts the truths of the world through mathematics. Yes, he is Mr. Ankush, and indeed, he also teaches computer science.",
  },
  sudhanshulegend: {
    teacherName: "Sudhanshu Legend",
    session: "2023-24",
    class: "No Class",
    subject: "Computer",
    grades: ["😁", "😁", "😁", "😁", "😁", "😁"],
    remark:
      "We have a teacher who is proficient in all computer languages – Mr. Sudhanshu.Furthermore, our advanced computer science teacher, a true wizard in the realm of technology, imparts knowledge beyond the basics. With expertise in advanced programming languages and technologies, he equips students with the skills necessary to navigate the intricate landscape of computer science. Undoubtedly, Mr. Sudhanshu is a beacon of knowledge and inspiration in our academic journey.",
  },
  sajlalegend: {
    teacherName: "Sajla Legend",
    session: "2023-24",
    class: "10 A",
    subject: "Hindi",
    grades: ["😁", "😁", "😁", "😁", "😁", "😁"],
    remark:
      "Our Hindi teacher not only teaches the language exceptionally well but also makes it a captivating experience. Her dedication to fostering a love for the beauty of Hindi language and literature is truly commendable. Ma'am Sajla is undoubtedly an asset to our academic community.",
  },
  seemilegend: {
    teacherName: "Seemi Legend",
    session: "2023-24",
    class: "10 B",
    subject: "English",
    grades: ["😁", "😁", "😁", "😁", "😁", "😁"],
    remark:
      "A wonderful teacher who appears exceptionally smart when wearing glasses, she is a reservoir of words herself. She possesses an extraordinary command over English, making her communication truly remarkable. Yes, she is Seemi Ma'am.",
  },
  anupamsingh: {
    teacherName: "Anupam Singh",
    session: "2023-24",
    class: "9 A",
    subject: "Social Studies",
    grades: ["😁", "😁", "😁", "😁", "😁", "😁"],
    remark:
      "A teacher who not only looks like a friend but also teaches beautifully, making understanding Social science an enriching experience. Students are captivated by her history lessons, and it's truly amazing how children become fascinated after learning from her. Ah, yes, she is the one people refer to as Anupam Ma'am.",
  },
  fun: function () {
    if (this[Name] === undefined) {
      openErrorOverlay();
      return;
    }
    const obj = entries[Name];
    document.querySelector(".name").textContent = obj.teacherName;
    document.querySelector(".session").textContent = obj.session;
    document.querySelector(".class").textContent = obj.class;
    document.querySelector(".subject").textContent = obj.subject;
    for (let i = 1; i !== 7; i++) {
      document.querySelector(`.grade${i}`).textContent = obj.grades[i];
    }
    document.querySelector(".remarkMain").textContent = obj.remark;
  },
};

document.querySelector("#form").addEventListener("submit", function (event) {
  event.preventDefault();
  let a = document.querySelector(`#firstName`).value.trim().toLowerCase();
  let b = document.querySelector(`#lastName`).value.trim().toLowerCase();
  Name = a + b;
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  entries.fun();
});

console.log(`library:Prachi Rai,
        Anupam Singh,
        Seemi Legend,
        Sajla Legend,
        Sudhanshu Legend,
        Ankush Shrivastav,
        Anurag Shrivastav. `);
