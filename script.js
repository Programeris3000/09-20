let cities = [
  {
    name: 'Vilnius',
    population: 3554211,
    location:{
      continent: 'Europa',
      country: 'Lithuania',
    },
    touristAttractions: ['Gedimino bokštas', 'Laisvės parkas'],
    isCapital: true,
  },{
    name: 'Kylis',
    population: 4564564555,
    location:{
        continent: 'Europa',
        country: 'Vokietija',
      },
    touristAttractions: ['Triumfo bokštas'],
    isCapital: false,
  },{
    name: 'Kijevas',
    population: 300054457,
    location:{
      continent: 'Europa',
      country: 'Ukraina',
    },
    touristAttractions: ['Karo muziejus', 'Piterio aikštė', 'Garbės alėja'],
    isCapital: true,
  },{
    name: 'Briuselis',
    population: 66554224,
    location: ['Europa', 'Belgija'],
    touristAttractions: ['Parkinsono pakras', 'Kopustu parodos aikštė'],
    isCapital: true,
  },{
    name: 'Bomozova',
    population: 566666005,
    location:{
      continent: 'Europa',
      country: 'Slovakija',
    },
    touristAttractions: ['Raudonų gėlių laukymė'],
    isCapital: false,
  },{
    name: 'Ryga',
    population: 4445557555,
    location:{
      continent: 'Europa',
      country: 'Latvija',
    },
    touristAttractions: ['Rašido tvartas', 'Žirgo galva', 'Užupys', 'Televizijos bokštas'],
    isCapital: true,
  },{
    name: 'Talinas',
    population: 455557700,
    location:{
      continent: 'Europa',
      country: 'Estija',
    },
    touristAttractions: [],// neturi
    isCapital: true,
  },{
    name: 'Oslas',
    population: 20000445,
    location:{
      continent: 'Europa',
      country: 'Norvegija',
    },
    touristAttractions: ['Emigrantų šlovės takas'],
    isCapital: true,
  },{
    name: 'Okopokas',
    population: 645555554,
    location:{
      continent: 'Europa',
      country: 'Suomija',
    },
    touristAttractions: ['Baudžiauninkų duonos kelias', 'Vargų alėja'],
    isCapital: false,
  },{
    name: 'Zakopanė',
    population: 444555544,
    location:{
      continent: 'Europa',
      country: 'Lenkija',
    },
    touristAttractions: ['Pigusis betliejus', 'Kaminų valymo meka'],
    isCapital: false,
  },{
    name: 'Ukmergė',
    population: 444555544,
    location:{
      continent: 'Europa',
      country: 'Lietuva',
    },
    touristAttractions: [],
    isCapital: false,
  },
]
// cities.map(city => {
//   // console.log(city) // 1.6. Visus miestų masyvų narius išvesti į konsolę.
//   // console.log(city.name)// 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
//   // console.log(city.population)// 1.6.2. Visų miestų populiaciją išvesti į konsolę.
//   // console.log(city.location.continent)// 1.6.3. Visų miestų žemyną išvesti į konsolę.
//   // console.log(city.location.country)// 1.6.4. Visų miestų šalį išvesti į konsolę.
//   // console.log(city.isCapital)// 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.
//   console.log(city.touristAttractions)// 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.
// })


cities.map((city, index) =>{

  let allCities = document.querySelector (`.allcities`)
  allCities.style.display = 'flex'
  allCities.style.flexWrap = 'wrap'
  allCities.style.boxSizing = 'border-box'

  let cityDiv = document.createElement('div')
  cityDiv.style.setProperty('width', 'calc(50% - 80px)');
  cityDiv.style.padding = '20px'
  cityDiv.style.marginBottom = '40px'
  cityDiv.style.boxSizing = 'border-box'
  
  let cityName = document.createElement('h2')
  cityName.textContent = city.name
  if(index % 2 === 0){
    cityDiv.style.backgroundColor = 'lightgrey'
  }
  if (index === cities.length - 1 && cities.length % 2 !== 0){
    cityDiv.style.width = '100%'
  }
  
  
  let cityDescription = document.createElement('p')
  cityDescription.textContent = `${city.name} city is located in ${city.location.continent},${city.location.country} and has population of ${city.population} people.`
  
  let attractionsTitle = document.createElement('h3')
  attractionsTitle.textContent = `Main tourist attractions of ${city.name} are:`

  let listOfAttractions = document.createElement('ul')
  let attractions = city.touristAttractions

    attractions.map(attraction=>{
      let liElements = document.createElement('li')
      liElements.textContent = attraction
      listOfAttractions.append(liElements)
      if(attractions.length < 2){
        attractionsTitle.textContent = `Main tourist attractions of ${city.name} is:`
     }
  })
    let firstLiElements = document.querySelectorAll('li:first-child')
  firstLiElements.forEach(element => {
    element.style.color = 'green'
  })
    let lastLiElements = document.querySelectorAll('li:nth-child(1n+4)')
  lastLiElements.forEach(element => {
    element.style.color = 'red'
  })

   
  allCities.append(cityDiv)
  cityDiv.append(cityName, cityDescription, attractionsTitle, listOfAttractions)

  if(city.isCapital === true){
    cityName.textContent = (`${city.name} (capital)`)
    cityDescription.textContent = `${city.name} city is located in ${city.location.continent},${city.location.country} and has population of ${city.population} people. ${city.name} is the capital of ${city.name}`
    cityDiv.classList.add('cityKeeper')
    cityName.style.color = 'green'
  }
})
