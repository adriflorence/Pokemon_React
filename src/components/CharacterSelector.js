import React from 'react';

const CharacterSelector = (props) => {
  const options = props.characters.map((character, index) => {
    return <option value={index} key={index}>{character.name}</option>
  });

  function handleChange(event) {
    console.log(props);
    props.onCharacterSelected(event.target.value);
  }

  return(
    <select name="pokemon-selector" id="pokemon-selector" onChange={handleChange}>
      <option disabled selected> Select a character</option>
      {options}
    </select>
  )
}

export default CharacterSelector;
