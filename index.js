"use strict";
const API_URL = "https://pokeapi.co/api/v2/pokemon/pikachu";
fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
    console.log(`${data.id} ${data.base_experience} ${data.height} ${data.location_area_encounters} ${data.is_default}`);
});
