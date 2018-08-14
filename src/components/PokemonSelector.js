import React from 'react';

const PokemonSelector = (props) => {
  const options = props.pokemons.map((pokemon, index) => {
    return <option value={index} key={index}>{pokemon.name}</option>
  });

  function handleChange(event) {
    props.onPokemonSelected(event.target.value);
  }

  return(
    <select name="pokemon-selector" id="pokemon-selector" onChange={handleChange}>
      <option disabled selected> Select a pokemon</option>
      {options}
    </select>
  )
}

export default PokemonSelector;
