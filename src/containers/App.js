import React, { Component } from 'react';
import Wrapper from '../components/Wrapper/wrapper';
import Display from '../components/Sorteio/Display/display';
import './App.css';

class App extends Component {
  state = {
    background: 'https://loremflickr.com/1920/1080/frame',
    banner: 'https://loremflickr.com/1920/150/abstract',
    amountChars: 30,
    participantes: [
      { nome: 'Nome 01', telefone: '11 0000 0000' },
      { nome: 'Nome 02', telefone: '11 1111 1111' },
      { nome: 'Nome 03', telefone: '11 2222 2222' },
      { nome: 'Nome 04', telefone: '11 3333 3333' },
      { nome: 'Nome 05', telefone: '11 4444 4444' },
      { nome: 'Nome 06', telefone: '11 5555 5555' },
      { nome: 'Nome 07', telefone: '11 6666 6666' }
    ],
    selectedPerson: { name: 'Boa sorte!', extraField: '00 0000 0000' },
    timeToSort: 5000,
    sorted: false
  };

  sortear = () => {
    const participantes = this.state.participantes;
    const indice = Math.floor(Math.random() * participantes.length);
    const selName = participantes[indice].nome;
    const eField = participantes[indice].telefone;

    this.setState({ selectedPerson: { name: selName, extraField: eField } });
  };

  /*blink = () => {
    let style = { visibility: "hidden" }
  }*/

  sortNameHandler = () => {
    let int = setInterval(() => {
      this.sortear();
    }, 10);
    
    setTimeout(() => {
      clearInterval(int);
    }, 3000);
  };

  render() {
    let display = null;

    let name = this.state.selectedPerson.name.padEnd(
      this.state.amountChars,
      ' '
    );
    let nameSplited = name.split('');
    display = nameSplited.map((char, index) => {
      return <Display char={char} key={index} />;
    });

    return (
      <div className="App">
        <Wrapper
          background={this.state.background}
          banner={this.state.banner}
          display={display}
          clicked={this.sortNameHandler}
        />
      </div>
    );
  }
}

export default App;
