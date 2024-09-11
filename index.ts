const API_URL = "https://pokeapi.co/api/v2/pokemon/pikachu";

type Pokemon = {
  id: number,
  base_experience: number,
  height: number,
  location_area_encounters: string,
  is_default: boolean,
};

fetch(API_URL)
.then(response => response.json())
  .then((data:Pokemon) => {
    console.log(`${data.id} ${data.base_experience} ${data.height} ${data.location_area_encounters} ${data.is_default}`);
  })