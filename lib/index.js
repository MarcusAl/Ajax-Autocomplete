// TODO: Autocomplete the input with AJAX calls.
const query = document.getElementById('search');
const results = document.getElementById('results');

const displayWords = (arr) => {
  arr.forEach((element) => {
    // console.log(`<li>${element}</li>`);
    results.insertAdjacentHTML('afterbegin', `<li>${element}</li>`);
  });
};

const querySearchCall = (string) => {
  results.innerHTML = '';
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${string}`)
    .then(response => response.json())
    .then((data) => {
      const topFiveWords = (data.words).slice(0, 1);
      displayWords(topFiveWords);
    });
};

query.addEventListener('keyup', (event) => {
  const queryString = event.currentTarget.value;
  querySearchCall(queryString);
});