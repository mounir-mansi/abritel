const apiUrl = 'https://simplon-brief-htmlcssjs.vercel.app/'

async function fetchInspirations() {
    const response = await fetch(apiUrl + 'api/inspiration');
    const inspirations = await response.json();
    const first = document.querySelector('#proposed_location > div:first-child');
    const second = document.querySelector('#proposed_location > div:last-child');
  
    for (let i = 0; i < inspirations.length; i++) {
      const div = document.createElement('div');
      const img = document.createElement('img');
      img.src = apiUrl + inspirations[i].img;
      const span = document.createElement('span');
      span.textContent = inspirations[i].name;
      div.appendChild(img);
      div.appendChild(span);
      

      
      if (i < 5) {
        first.appendChild(div);
      } else {
        second.appendChild(div).setAttribute("id", "plus"+ i);
        
      }
    }
    
}
 
  window.addEventListener('load', async () => {
    fetchInspirations();
  })

  
    

  document.querySelector('.buttonmore').addEventListener('click', function () {
    document.querySelector('#plus5').style.display = 'flex';
    document.querySelector('#plus6').style.display = 'flex';
    document.querySelector('#plus7').style.display = 'flex';
    document.querySelector('#plus8').style.display = 'flex';
    document.querySelector('#plus9').style.display = 'flex';
    document.querySelector('#more').style.display = 'none';
    document.querySelector('#moins').style.display = 'flex';

  })

  document.querySelector('.buttonmoins').addEventListener('click', function () {
    document.querySelector('#plus5').style.display = 'none';
    document.querySelector('#plus6').style.display = 'none';
    document.querySelector('#plus7').style.display = 'none';
    document.querySelector('#plus8').style.display = 'none';
    document.querySelector('#plus9').style.display = 'none';
    document.querySelector('#more').style.display = 'flex';
    document.querySelector('#moins').style.display = 'none';
  })
