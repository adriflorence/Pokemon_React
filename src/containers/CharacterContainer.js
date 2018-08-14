import React from 'react';
import CharacterSelector from '../components/CharacterSelector.js';
import Character from '../components/Character.js';

class CharacterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currentCharacter: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
  }

  componentDidMount(){
    // fetch('https://swapi.co/api/people')
    fetch('http://localhost:3001/')
    .then(response => response.json())
    .then(characters => this.setState({characters}));
  }

  handleCharacterSelected(index){
    const pokemonURL = this.state.characters[index].url;
    fetch(`http://localhost:3001/pokemon?url=${pokemonURL}`)
    .then(response => response.json())
    .then(character => this.setState({currentCharacter: character}));
  }

  render(){
    return(
      <React.Fragment>
        <section className="container">
          <section className="logo">
            <h1>Gotta Fetch 'Em All</h1>
          </section>
          <section className="pokemon-display">
              <CharacterSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected}/>
              {this.state.currentCharacter ? <Character data={this.state.currentCharacter}></Character> : undefined}
          </section>
        </section>
        <section id="footer">adri florence</section>
      </React.Fragment>
    )
  }
}

export default CharacterContainer;
