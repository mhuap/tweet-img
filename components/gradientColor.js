import React, { useState } from 'react';

const GRADIENTS = {
  'g1': ['#00FF8F', '#60EFFF'],
  'g2': ['#0061ff', '#60EFFF'],
  'g3': ['#00ddff', '#e81cff'],
  'g4': ['#ff930f', '#fff95b'],
  'g5': ['#ff0f7b', '#f89b29'],
  'g6': ['#BD19ED', '#ff0f7b'],
  'g7': ['#fed1c7', '#fe8dc6'],
  'g8': ['#7f00ff', '#E75BFF']
}

function GradientColor(props) {

  return (<div className='gradient-tab'>
      {Object.keys(GRADIENTS).map(g => {
        return <GradientSwatch id={g} key={g}
                changed={props.handleGradientChange}
                isSelected={props.gradient === g}
                onClickGradient={props.onClickGradient}/>
      })}
    </div>
  )
}

function GradientSwatch({id, onClickGradient, isSelected, changed}) {
  const colorA = GRADIENTS[id][0];
  const colorB = GRADIENTS[id][1];

  return (
    <div>
      <input id={id} type='radio' value={id} checked={isSelected} onChange={changed}/>
      <label tabIndex='0'
        style={{background: `linear-gradient(to right, ${colorA}, ${colorB})`}}
        className='gradient-swatch'
        htmlFor={id}
      />
    </div>
  )
}

export default GradientColor;
export { GRADIENTS };
