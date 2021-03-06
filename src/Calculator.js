import React, { Component } from 'react';


class Calculator extends Component {
  constructor(props){
    super(props);

    this.state = {
        // active : "Merah",
        name: 'Calculator',
        color: 'Orange',
        angka1: 0,
        angka2: 0,
        operation: 'plus'
       };
  }
 
  render() {
    return (
        <div>
        <span className={"selected "+this.state.color}>{this.state.name}  </span><br/><br/>
        <input type="number" name="angka1" placeholder="angka 1"  value={this.state.angka1} onChange={this.changeHandler.bind(this)}/>
        <select name="operation" onChange={this.changeHandler.bind(this)}>
          <option value="plus">+</option>
          <option value="minus">-</option>
          <option value="pow">x</option>
          <option value="div">:</option>
        </select>
        <input type="number" name="angka2" placeholder="angka 2"  value={this.state.angka2} onChange={this.changeHandler.bind(this)}/>=
        <span> {this.hitung()}</span>
      </div>
      
    );
  }
  changeHandler(event) {
    
    // this.setState({
    //   angka1: event.target.value
    // });
    this.setState({
      [event.target.name]: event.target.value 
    });
  }

  hitung(){
    switch(this.state.operation){
      case 'plus': return parseInt(this.state.angka1) + parseInt(this.state.angka2);
      case 'minus': return parseInt(this.state.angka1) - parseInt(this.state.angka2)
      case 'pow': return parseInt(this.state.angka1) * parseInt(this.state.angka2)
      case 'div': return parseInt(this.state.angka1) / parseInt(this.state.angka2)
    }
  }
}

export default Calculator;
