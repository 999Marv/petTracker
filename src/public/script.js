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
const petTemplate = (name, url, species, friendly) => {
  const li = document.createElement('li');
  li.innerHTML = `
 <h3>${name}</h3>
  <img
    src="${url}"
    alt="Pet picture"/>
  <p>${friendly}</p>
  <p>Species: ${species}</p>
`;

  const button = document.createElement('button');
  button.textContent = 'remove';

  button.addEventListener('click', () => console.log('hi'));

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

  friendly ? (isFriendly = 'Friendly pet!') : (isFriendly = 'Not so friendly');
  if (friendly) {
    isFriendly = 'Friendly pet!';
  } else {
    isFriendly = 'Not so friendly';
    dataFriendly = false;
  }

  petList.append(petTemplate(name, url, species, isFriendly));

  //post request
  const postBody = getOptsWithBody({
    name,
    url,
    species,
    friendly: dataFriendly,
  });

  fetchData('/pets', postBody);

  form.reset();
};

form.addEventListener('submit', handleForm);
