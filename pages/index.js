import  ClaseComponent from '../componentes/ClaseComponent'

const matematicas = [{
    "id": 1,
    "first_name": "Abby",
    "last_name": "Dudmesh",
    "genero": "Male",
    "foto": "https://robohash.org/molestiaeetautem.bmp?size=50x50&set=set1"
  }, {
    "id": 2,
    "first_name": "Kalindi",
    "last_name": "Cossem",
    "genero": "Female",
    "foto": "https://robohash.org/quiaestnon.bmp?size=50x50&set=set1"
  }, {
    "id": 3,
    "first_name": "Wake",
    "last_name": "Lanfer",
    "genero": "Male",
    "foto": "https://robohash.org/seddelectusvoluptate.bmp?size=50x50&set=set1"
  }, {
    "id": 4,
    "first_name": "Fielding",
    "last_name": "Skryne",
    "genero": "Male",
    "foto": "https://robohash.org/optiodolorqui.bmp?size=50x50&set=set1"
  }, {
    "id": 5,
    "first_name": "Mariana",
    "last_name": "Sherrock",
    "genero": "Female",
    "foto": "https://robohash.org/autemsimiliqueculpa.png?size=50x50&set=set1"
  }, {
    "id": 6,
    "first_name": "Kelwin",
    "last_name": "Martinat",
    "genero": "Male",
    "foto": "https://robohash.org/quibusdamarchitectovoluptatem.png?size=50x50&set=set1"
  }, {
    "id": 7,
    "first_name": "Boris",
    "last_name": "MacHoste",
    "genero": "Male",
    "foto": "https://robohash.org/nesciuntsequimodi.bmp?size=50x50&set=set1"
  }, {
    "id": 8,
    "first_name": "Sibelle",
    "last_name": "Donat",
    "genero": "Female",
    "foto": "https://robohash.org/remaspernaturquibusdam.png?size=50x50&set=set1"
  }, {
    "id": 9,
    "first_name": "Leshia",
    "last_name": "Artrick",
    "genero": "Female",
    "foto": "https://robohash.org/autlaborumvoluptas.bmp?size=50x50&set=set1"
  }, {
    "id": 10,
    "first_name": "Patrice",
    "last_name": "Willcot",
    "genero": "Male",
    "foto": "https://robohash.org/temporelaboriosamvoluptas.png?size=50x50&set=set1"
  }]

const ciencias = [{
    "id": 1,
    "first_name": "Nolan",
    "last_name": "Meron",
    "genero": "Male",
    "foto": "https://robohash.org/nullaatexcepturi.bmp?size=50x50&set=set1"
  }, {
    "id": 2,
    "first_name": "Dannie",
    "last_name": "Koppen",
    "genero": "Female",
    "foto": "https://robohash.org/nambeataedolore.jpg?size=50x50&set=set1"
  }, {
    "id": 3,
    "first_name": "Bing",
    "last_name": "Mortimer",
    "genero": "Male",
    "foto": "https://robohash.org/quiaestassumenda.png?size=50x50&set=set1"
  }, {
    "id": 4,
    "first_name": "Melania",
    "last_name": "Garbett",
    "genero": "Female",
    "foto": "https://robohash.org/eaquiaconsequatur.jpg?size=50x50&set=set1"
  }, {
    "id": 5,
    "first_name": "Hakim",
    "last_name": "Byas",
    "genero": "Male",
    "foto": "https://robohash.org/veroabillum.png?size=50x50&set=set1"
  }, {
    "id": 6,
    "first_name": "Hillie",
    "last_name": "Friedman",
    "genero": "Male",
    "foto": "https://robohash.org/minusdoloremest.jpg?size=50x50&set=set1"
  }, {
    "id": 7,
    "first_name": "Woody",
    "last_name": "Powder",
    "genero": "Male",
    "foto": "https://robohash.org/repudiandaeminuspariatur.jpg?size=50x50&set=set1"
  }, {
    "id": 8,
    "first_name": "Boycie",
    "last_name": "Schwartz",
    "genero": "Male",
    "foto": "https://robohash.org/remomnisplaceat.bmp?size=50x50&set=set1"
  }, {
    "id": 9,
    "first_name": "Remington",
    "last_name": "Sieur",
    "genero": "Male",
    "foto": "https://robohash.org/beataererumipsum.png?size=50x50&set=set1"
  }, {
    "id": 10,
    "first_name": "Janine",
    "last_name": "Lefever",
    "genero": "Female",
    "foto": "https://robohash.org/autetdeleniti.jpg?size=50x50&set=set1"
  }]

export default ()=>(
    <div>
        <h1>Introducción a REACT !!!</h1>
        <p>Curso del Plan</p>
        <ClaseComponent nombre="Matemáticas" clase={matematicas}/>
        <ClaseComponent nombre="Ciencias" clase={ciencias}/>
    </div>
)


