import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      message: props.initialMessage,
      color: '#3168FF',
      background: '#e6ffee',
      fontSize: 20,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'Helvetica, Arial, sans-serif'
    }
  }

  handleChange({ name, value }) {
    this.setState({
      [name]: value
    });
  }

  render() {

    const fonts = {
      sansSerif: 'Helvetica, Arial, sans-serif',
      serif: 'Georgia, Times, serif',
      monospace: 'Courier, monospace'
    };
    
    return (
      <div id="wrap">
        <div id="inputs">
          <h1>Anwar's WYSIWYG Editor</h1>
          <label>
            Message: <input id="inputMsg" name="message" value={this.state.message} onChange={({ target}) => this.handleChange(target)} />
          </label>
          <label>
            Color: <input name="color" value={this.state.color} type="color" onChange={({target}) => this.handleChange(target)} />
          </label>
          <label>
            Background: <input name="background" value={this.state.background} type="color" onChange={({target}) => this.handleChange(target)} />
          </label>
          <label>
            Font Size: <input name="fontSize" value={this.state.fontSize} type="range" min="8" max="64" step="4" onChange={({ target }) => this.handleChange(target)}/>
          </label>
          <label>
          <input type="checkbox"
            name="fontWeight"
            value={this.state.fontWeight === "bold" ? "normal" : "bold"}
            onChange={({target}) => this.handleChange(target)}/>
            &nbsp;Bold
          </label>
          <label>
          <input type="checkbox"
            name="fontStyle"
            value={this.state.fontStyle === "italic" ? "normal" : "italic"}
            onChange={({target}) => this.handleChange(target)}/>
            &nbsp;Italic
          </label>
          <label>Typeface:&nbsp;
            <select name="fontFamily" value={this.state.fontFamily} onChange={({ target }) => this.handleChange(target)}>
              <option value={fonts.sansSerif}>{fonts.sansSerif}</option>
              <option value={fonts.serif}>{fonts.serif}</option>
              <option value={fonts.monospace}>{fonts.monospace}</option>
            </select>
          </label>
        </div>
        <div className="display" style={{
          color: this.state.color,
          background: this.state.background,
          fontSize: this.state.fontSize,
          fontWeight: this.state.fontWeight,
          fontStyle: this.state.fontStyle,
          fontFamily: this.state.fontFamily
        }}>
          {this.state.message}
        </div>
      </div>
    );
  }
  
}

export default App;
