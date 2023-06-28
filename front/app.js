async function getUsers() {
    let url = 'http://localhost:1337/api/destinations';
    try {
        let res = await fetch(url);

        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderUsers() {
    let users = await getUsers();
    console.log(users.data[0].attributes.city)
    let html = '';
    users.data.forEach(user => {
        let htmlSegment = `<option value=${user.attributes.city}>`;

        html += htmlSegment;
    });

    let container = document.querySelector('#selectOne');
    container.innerHTML = html;
}

renderUsers();
