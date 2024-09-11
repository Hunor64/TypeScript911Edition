const API_URL = "https://pokeapi.co/api/v2/pokemon/pikachu";

type Pokemon = {
  id: number;
  base_experience: number;
  height: number;
  location_area_encounters: string;
  is_default: boolean;
};
type Ability = {
  name: string;
  url: string;
};

type Abilities = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
};

fetch(API_URL)
  .then((response) => response.json())
  .then((data: Pokemon) => {
    console.log(
      `${data.id} ${data.base_experience} ${data.height} ${data.location_area_encounters} ${data.is_default}`
    );
  });
