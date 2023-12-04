const form = document.querySelector('#new-pet-form');

//handle form func
const handleForm = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const { name, url, species, friendly } = Object.fromEntries(formData);

  form.reset();
};

form.addEventListener('submit', handleForm);
