import React from 'react';

const Character = (props) => {
    return(
      <React.Fragment>
        <section className="pokemon">
            <h1>{props.data.name}</h1>
            <p>weight: {props.data.weight} g</p>
            <p>types:
            {props.data.types.map(type => {
              return ' ' + type.type.name
            })}
            </p>
            <p> <img src={props.data.images.front_default} className="pokemon-image" /></p>
        </section>
      </React.Fragment>
    )
}

export default Character;
