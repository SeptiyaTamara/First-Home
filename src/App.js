import React, { Component } from 'react';
import logo from './logo.svg';
import Profile from './Profile.js';
import Calculator from './Calculator';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
     // active : "Merah",
     name: 'Summer',
     color: 'Merah',
     img: 'Panas.jpg',
    //  angka1: 0,
    //  angka2: 0,
    //  operation: 'plus'
    };
  }
  clicked(menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      name: menu.name,
      color: menu.color,
      img: menu.img,
      

      //active: menu,
    });
  }
  info(name){
    //console.log(name);
    if (name == 'Calculator'){
      //displaY CALC
     // return(
      //   <div>
      //   <span className={"selected "+this.state.color}>{this.state.name}  </span><br/><br/>
      //   <input type="number" name="angka1" placeholder="angka 1"  value={this.state.angka1} onChange={this.changeHandler.bind(this)}/>
      //   <select name="operation" onChange={this.changeHandler.bind(this)}>
      //     <option value="plus">+</option>
      //     <option value="minus">-</option>
      //     <option value="pow">x</option>
      //     <option value="div">:</option>
      //   </select>
      //   <input type="number" name="angka2" placeholder="angka 2"  value={this.state.angka2} onChange={this.changeHandler.bind(this)}/>=
      //   <span> {this.hitung()}</span>
      // </div>
     //);
     return <Calculator></Calculator>;
    }else if(name == 'Profile'){
      //display profile
     return <Profile> </Profile>;
    }else{
      //display default
      return(
      <div>
      Ini adalah <span className = {"selected "+this.state.color}>
      {this.state.name}</span> <br></br>
      <br></br>
    <img src={this.state.img} width="200"></img>
    {/*{this.menusaya()}*/}
    </div>
      );
    }
  
  }
  // changeHandler(event) {
    
  //   // this.setState({
  //   //   angka1: event.target.value
  //   // });
  //   this.setState({
  //     [event.target.name]: event.target.value 
  //   });
  // }

  // hitung(){
  //   switch(this.state.operation){
  //     case 'plus': return parseInt(this.state.angka1) + parseInt(this.state.angka2);
  //     case 'minus': return parseInt(this.state.angka1) - parseInt(this.state.angka2)
  //     case 'pow': return parseInt(this.state.angka1) * parseInt(this.state.angka2)
  //     case 'div': return parseInt(this.state.angka1) / parseInt(this.state.angka2)
  //   }
  // }
 /* menusaya(){
    return <img src={this.state.active+".jpg"} width="200"></img>
  }*/
 /* menusaya(){
    var gambar;
    if (this.state.active.toLocaleLowerCase() === 'merah'){
      gambar = "apel";
    }else if(this.state.active.toLocaleLowerCase() === 'kuning'){
      gambar = "nanas";
    }else if(this.state.active.toLocaleLowerCase() === 'hijau'){
      gambar = "alpukat";
    }else if(this.state.active.toLocaleLowerCase() === 'biru'){
      gambar = "anggur";
    }
    return <img src={gambar+".jpg"} width="200"></img>
  }*/
  render() {
    return (
      <div id="app">
        { /* map akan loop sebanyak menu yang didefinisikan*/ }
        {/* kemudian mengembalikan elemen <a/> */}
        <nav className="nav">{this.props.items.map((menu,index) => {
            var style = 'menu';

            if(this.state.color === menu.color){ // if(this.state.active === menu){
                style = `${style} is-active`;
            }

            return <a
              className = {style+" "+menu.color}
              //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked'
              onClick = {this.clicked.bind(this,menu)}
              key = {index}
            >
              {/*{menu.color}*/}
              {menu.name}
            </a>;
          }
        )}
        </nav>

        <div className="info">
        {this.info(this.state.name)}
        </div>
      
      </div>
    );
  }
}

export default App;
