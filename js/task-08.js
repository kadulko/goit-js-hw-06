const loginForm = document.querySelector(".login-form");

const getFormData = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (!email.value || !password.value) {
    alert("Wpisz poprawne dane do wszystkich pól!");
  } else {
    const formData = { email: email.value, password: password.value };
    console.log(formData);
    event.currentTarget.reset();
  }
};

loginForm.addEventListener("submit", getFormData);
