// Assynchronous Programming
// AJAX = Assynchronous JavaScript And XML
// get data without loading the page

document.getElementById('get-data').addEventListener('click', loadData);

function loadData() {
  // create XHR object (XML Http Request)
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.txt', true);

  // =======>>>>>>>> onload
  // HTTP statuses (Hypertext Transfer Protocol)
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerText = `${this.responseText}`;
      document.querySelector('#output').style.color = 'green';
    }
  };
  xhr.send();
  // console.log(xhr);

  // alternate way
  // ======>>>>>>> onreadystatechange (old technique)
  // readyState Values
  // 0: request not initialized
  // 1: sercer connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  /*
  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      // console.log(this.responseText);
      document.getElementById('output').innerText = `${this.responseText}`;
    }
  };
  xhr.send();
  console.log(xhr);
  */

  // ==========>>>>>>>>>> onprogress
  // (kono kichu loading howar somoy jeta dekhi)
  xhr.onprogress = function () {
    // console.log(this.readyState)
    document.querySelector('h2').style.color = 'red';
  };
  console.log(xhr);
}
