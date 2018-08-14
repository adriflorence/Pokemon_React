import React from 'react';
import PokemonSelector from '../components/PokemonSelector.js'

class PokemonContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      currentPokemon: null
    };
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount(){
    fetch('http://pokeapi.co/api/v2/')
    .then(response => response.json())
    .then(pokemons => this.setState({pokemons}));
  }

  handlePokemonSelected(index){
    const selectedPokemon = this.state.pokemons[index];
    this.setState({currentPokemon: selectedPokemon});
  }

  render(){
    return(
      <React.Fragment>
        <h1>Gotta Fetch 'Em All</h1>
        <PokemonSelector pokemons={this.state.pokemons} onPokemonSelected={this.handlePokemonSelected}/>
      </React.Fragment>
    )
  }
}

export default PokemonContainer;
