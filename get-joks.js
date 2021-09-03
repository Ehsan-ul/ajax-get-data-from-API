// get jokes with api

document.getElementById('get-data').addEventListener('click', loadJoks);

function loadJoks() {
  let xhr = new XMLHttpRequest();
  // console.log(xhr)

  let jokesNumber = document.getElementById('jokeId').value;
  // console.log(jokesNumber);

  xhr.open('GET', `http://api.icndb.com/jokes/random/${jokesNumber}`, true);

  // loading starts
  xhr.onprogress = function () {
    document.getElementById('output').innerHTML = '<h2>Loading.....</h2>';
  };
  // loading ends

  // Get data from API >>>>>>>> starts
  xhr.onload = function () {
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      // console.log(data)
      let jokes = data.value;
      // console.log(jokes);

      let output = '<ol>';

      jokes.forEach((element) => {
        // console.log(element.joke);
        output += `<li>${element.joke}</li>`;
      });

      output += '</ol>';

      document.getElementById('output').innerHTML = `<p>${output}</p>`;
    }
  };
  xhr.send();
  // Get data from API >>>>>>>> ends
}
