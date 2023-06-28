/*CORRECTION 

const apiUrl = 'https://simplon-brief-htmlcssjs.vercel.app/'
const heroApi = apiUrl + 'api/hero';

async function fetchHero() {
    const response = await fetch(heroApi);
    console.log({ response });
    const data = await response.json();
    const h1 = document.querySelector('#hero h1');
    h1.textContent = data.h1;
    const img = document.querySelector('#hero img');
    img.src = apiUrl + data.img;
  }

 fin correction*/




async function getElement() {
    let url = 'http://localhost:1337/api/heroes?populate=*';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}




async function renderh1() {
    let title = await getElement();


    let html = '';
    
        let htmlSegment = `${title.data[0].attributes.title}`;
        html += htmlSegment;


    let container = document.querySelector('#destination_information_title');
    container.innerHTML = html;
}
renderh1();

async function renderimg() {
    let hero_img = await getElement();
    console.log(hero_img.data[0].attributes.main_picture.data[0].attributes.url);
    main_picture =hero_img.data[0].attributes.main_picture.data[0].attributes.url;
    let html = '';
    
        let htmlSegment = `<img src="${"http://localhost:1337"+main_picture}"/>`;
        html += htmlSegment;


    let container = document.querySelector('.image');
    container.innerHTML = html;
}
renderimg();


  