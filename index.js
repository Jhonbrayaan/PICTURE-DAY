let infos = {}

async function search(){
  let dataValue = document.getElementById('dataSearch').value
  let apiKey = 'nY1bghcPVAn7bzt9MWCk0xximP0s1ygkHQeRoBq5'
  let request = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dataValue}`
  
  fetch(request)
  .then(data => data.json())
  .then(res => {
    infos = res
    let img = document.getElementById('SpacePic')
    img.src = res.url 
  })  
}

function showDescription(){
    let p = document.getElementById('descricao')
    console.log(p)
    p.innerHTML = infos.explanation
}

