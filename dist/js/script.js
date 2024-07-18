const educationsSpan = document.getElementById("educations");
const skillsSpan = document.getElementById("skills");

educationsSpan.addEventListener("click", function () {
  updateListEducations();
  educationsSpan.classList.add("border-b");
  educationsSpan.classList.add("border-black");
  skillsSpan.classList.remove("border-b");
});

updateListSkills();

skillsSpan.addEventListener("click", function () {
  updateListSkills();
  skillsSpan.classList.add("border-b");
  educationsSpan.classList.remove("border-b");
});

function updateListEducations() {
  const listElement = document.getElementById("listEducations");
  listElement.innerHTML = "";
  const educationsList = [
    "SMAN 1 Juwana (2019 - 2021)",
    "Universitas Dian Nuswantoro (2021 - Present)",
  ];
  educationsList.forEach(function (item) {
    const newItem = document.createElement("li");
    newItem.textContent = item;
    listElement.appendChild(newItem);

    newItem.classList.add("about-fade-in");
  });

  document.getElementById("skillsContainer").classList.add("hidden");
  listElement.classList.remove("hidden");
}

function updateListSkills() {
  const listElement1 = document.getElementById("listSkills1");
  const listElement2 = document.getElementById("listSkills2");
  listElement1.innerHTML = "";
  listElement2.innerHTML = "";
  const skillsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Java",
    "CodeIgniter",
    "Laravel",
    "TailwindCSS",
    "Bootstrap",
    "React JS",
    "Next JS",
    "MySQL",
    "Firebase",
    "Git",
  ];

  const halfLength = Math.ceil(skillsList.length / 2);
  const skillsList1 = skillsList.slice(0, halfLength);
  const skillsList2 = skillsList.slice(halfLength);

  skillsList1.forEach(function (item) {
    const newItem = document.createElement("li");
    newItem.textContent = item;
    listElement1.appendChild(newItem);

    newItem.classList.add("about-fade-in");
  });

  skillsList2.forEach(function (item) {
    const newItem = document.createElement("li");
    newItem.textContent = item;
    listElement2.appendChild(newItem);

    newItem.classList.add("about-fade-in");
  });

  document.getElementById("listEducations").classList.add("hidden");
  document.getElementById("skillsContainer").classList.remove("hidden");
}

// hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  if (navMenu.classList.contains("hidden")) {
    // Menampilkan navMenu dengan animasi fade-in
    navMenu.classList.remove("hidden");
    navMenu.classList.add("nav-fade-in");
  } else {
    // Menyembunyikan navMenu dengan animasi fade-out
    navMenu.classList.remove("nav-fade-in");
    navMenu.classList.add("nav-fade-out");

    // Mendengarkan peristiwa animasi selesai
    navMenu.addEventListener("animationend", function () {
      // Menambahkan class 'hidden' setelah animasi fade-out selesai
      navMenu.classList.add("hidden");
      navMenu.classList.remove("nav-fade-out");

      // Menghapus event listener setelah digunakan
      navMenu.removeEventListener("animationend", arguments.callee);
    });
  }
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Get all elements with class "modalTrigger"
var imgs = document.querySelectorAll(".modalTrigger");

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Loop through each image and attach a click event
imgs.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
