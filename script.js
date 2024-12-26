// Smooth Scroll for Navigation Links

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Contact Form Validation
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formMessage = document.getElementById("form-message");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "All fields are required.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
   
    form.reset();
  }
});

const titles = ["Frontend Developer", "Web Developer", "UI/UX Designer"];
let index = 0;
let charIndex = 0;
let currentTitle = "";
let isDeleting = false;

const titleElement = document.querySelector("#dynamic-title");

function typeEffect() {
  currentTitle = titles[index];

  if (isDeleting) {
    titleElement.textContent = currentTitle.substring(0, charIndex--);
  } else {
    titleElement.textContent = currentTitle.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentTitle.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Longer wait before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % titles.length; // Move to the next title
  }

  setTimeout(typeEffect, isDeleting ? 200 : 300); // Slower typing and deleting speed
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

function addEducation() {
  const educationSection = document.getElementById("educationSection");

  // Create the education section content with a grid layout
  const educationContent = `
        <h2 class="education-title">Education</h2>
        <ul class="education-list">
            <li>
                <h3>Intermediate in Computer Science</h3>
                <p class="institution">BAMM PECHS College</p>
                <p class="time-period">2021 - 2023</p>
                <p class="description">C is a high-level, procedural programming language known for its efficiency and performance. It provides low-level access to memory and supports structured programming with a clear and concise syntax.</p>
            </li>
            <li>
             <h3>Bachelor of  Industrial And Manufacturing Engineering </h3>
                <p class="institution">NED University of Engineering And Technology</p>
                <p class="time-period">2023 - 2027</p>
                <p class="description">Industrial and manufacturing engineers optimize production processes and systems to improve efficiency, reduce costs, and ensure quality. They integrate engineering principles with business practices to enhance operations and productivity in various industries.</p>
                
            </li>
        </ul>
    `;

  // Insert the education content into the educationSection container
  educationSection.innerHTML = educationContent;

}

