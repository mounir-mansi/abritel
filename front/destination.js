/* Corecction
const apiUrl = 'https://simplon-brief-htmlcssjs.vercel.app/'

async function fetchDesinations() {
  const response = await fetch(apiUrl + 'api/destination');
  const cities = await response.json();
  const list = document.querySelector('#destination-list');
  // for (let i = 0; i < cities.length; i++) {
  //   const option = document.createElement('option');
  //   option.value = cities[i];
  //   list.appendChild(option);
  // }
  for (const city of cities) {
    const option = document.createElement('option');
    option.value = city;
    list.appendChild(option);
  }
}

*/

async function getUsers() {
    let url = 'https://simplon-brief-htmlcssjs.vercel.app/api/destination';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderUsers() {
    let users = await getUsers();
    console.log(users)
    console.log(users[1]);
    let html = '';
    
    users.forEach(user => {
        let htmlSegment = `<option VALUE="${user}"></option>`;
        html += htmlSegment;
    });

    let container = document.querySelector('#selectOne');
    container.innerHTML = html;
}
renderUsers();

