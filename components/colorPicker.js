import React from 'react';

import { CustomPicker } from 'react-color';
import { EditableInput, Saturation, Hue } from 'react-color/lib/components/common'
import ColorPointer from './colorPointer';

class ColorPicker extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      displayPanel: false,
    }

    this.handleSwatchClick = this.handleSwatchClick.bind(this);
  }

  handleSwatchClick() {
    console.log(this.state.displayPanel);
    this.setState({
      displayPanel: !this.state.displayPanel,
    })

  }

  render() {

    const colorStyle = {
      backgroundColor: this.props.hex,
    };

    const panelStyle = this.state.displayPanel ? {opacity: 1} : {opacity: 0};

    return (
      <div id='colorpicker'>

        <div id="inputgroup">
          <EditableInput
          label=""
          value={ this.props.hex.substring(1) }
          onChange={ this.props.onChange }
          />
          <button
            id="swatch"
            className="input-overlay"
            onClick={this.handleSwatchClick}
            >
            <div style={colorStyle}></div>
          </button>
          <i className="">#</i>
        </div>

        <div id='colorpicker-group' style={panelStyle}>
          <div id='saturation-picker'>
            <Saturation
              { ...this.props }
              pointer={ ColorPointer }
            />
          </div>
          <div id='hue-picker'>
            <Hue
              {...this.props}
              onChange={ this.props.onChange }
              direction={ 'horizontal' }
              pointer={ ColorPointer } />
          </div>
        </div>
      </div>
    )
  }
}

// data-tooltip={this.state.displayPanel ? undefined : "Pick color"}


export default CustomPicker(ColorPicker);
