const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modalContent");
const projects = document.getElementsByClassName("project-item");
let currentSlide = 0; // current slide
let totalSlide = 6; // total slides
let dataset = [];

const next = () => {
  currentSlide = (totalSlide + currentSlide + 1) % totalSlide;
  modalContent.innerHTML = updateModal(dataset[currentSlide]);
};
const prev = () => {
  currentSlide = (totalSlide + currentSlide - 1) % totalSlide;
  modalContent.innerHTML = updateModal(dataset[currentSlide]);
};

for (let i = 0; i < projects.length; i++) {
  dataset[i] = {
    title: projects[i].children[1].textContent,
    image: projects[i].children[0].getAttribute("src"),
  };
  projects[i].addEventListener("click", () => {
    currentSlide = i;
    modal.style.display = "block";
    modalContent.innerHTML = updateModal(dataset[i]);
  });
}

const updateModal = (param) => {
  return `<span id="close">&times;</span>
    <h3>${param.title}</h3>
    <img src="${param.image}" alt="" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
      eaque praesentium commodi accusantium facilis quaerat eius
      consequuntur, eveniet, esse quis sapiente! Maiores impedit nisi,
      inventore quia rem eaque dolorum ipsum.
    </p>`;
};

document.body.addEventListener("click", (e) => {
  if (e.target.id === "close") {
    modal.style.display = "none";
  }
});

document.contact.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput(
    document.contact.emailInput,
    document.getElementById("messageInput")
  );
});

function validateInput(emailInput, messageInput) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailInput.value.match(mailformat) || !emailInput.value) {
    document.getElementById("info-email").style.display = "flex";
    document.contact.emailInput.focus();
  } else {
    document.getElementById("info-email").style.display = "none";
  }
  if (!messageInput.value) {
    document.getElementById("info-message").style.display = "flex";
    document.contact.messageInput.focus();
  } else {
    document.getElementById("info-message").style.display = "none";
  }
}
