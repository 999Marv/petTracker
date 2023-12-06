const form = document.querySelector('#new-pet-form');
const petList = document.querySelector('#pet-list');

//options
const getOptsWithBody = (body, method = 'POST') => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

//fetching func
const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(response.statusText);
    if (response.status === 204) return [{}];
    return [await response.json()];
  } catch (error) {
    return [null, error];
  }
};

//Pet templates
const petTemplate = (id, name, url, species, friendly) => {
  const li = document.createElement('li');
  li.innerHTML = `
 <h3>${name}</h3>
  <img
    src="${url}"
    alt="${name}"/>
  <p>${friendly}</p>
  <p>Species: ${species}</p>
`;

  li.dataset.id = id;

  const button = document.createElement('button');
  button.textContent = 'remove';

  button.addEventListener('click', () => {
    fetchData(`/pets${id}`, { method: 'DELETE' });

    li.remove();
  });

  li.append(button);

  return li;
};

//handle form func
const handleForm = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const { name, url, species, friendly } = Object.fromEntries(formData);
  let isFriendly = '';
  let dataFriendly = true;

  if (friendly) {
    isFriendly = 'Friendly pet!';
  } else {
    isFriendly = 'Not so friendly';
    dataFriendly = false;
  }

  const postBody = getOptsWithBody({
    name,
    url,
    species,
    friendly: dataFriendly,
  });

  const [petArr] = await fetchData('/pets', postBody);

  petList.append(petTemplate(petArr.id, name, url, species, isFriendly));

  form.reset();
};

form.addEventListener('submit', handleForm);

//Load Initial Pets

const loadPets = async () => {
  const data = (await fetchData('/pets'))[0].rows;
  data.forEach((pet) => {
    let isFriendly = '';
    pet.is_friendly
      ? (isFriendly = 'Friendly pet!')
      : (isFriendly = 'Not so friendly');

    petList.append(
      petTemplate(
        pet.id,
        pet.pet_name,
        pet.picture_url,
        pet.species,
        isFriendly
      )
    );
  });
};

const main = () => {
  loadPets();
};

main();
