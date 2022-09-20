
const Http = new XMLHttpRequest();

const url = "https://api.weather.gov/points/30.2672,-97.7431"

Http.open("GET", url);
Http.send();


Http.onreadystatechange=(e)=>{

var pu =  Http.responseText;

var dingy = JSON.parse(pu);

console.log(dingy.properties);
}
