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
    selectedPerson: { name: 'Boa sorte!', telefone: '00 0000 0000' },
    sorteado: false
  };

  sortear = () => {
    const participantes = this.state.participantes;
    const indice = Math.floor(Math.random() * participantes.length);
    const nome = participantes[indice].nome;
    const telefone = participantes[indice].telefone;

    return { nome, telefone };
  };

  showDisplay = () => {
    const amountChars = this.state.amountChars;
    const sorteado = this.sortear();
    const nome = sorteado.nome.padEnd(amountChars, ' ');
    const name = nome.split('');
    const telefone = sorteado.telefone;

    return { name, telefone };
  };


  convertToSquares = (text) => {
    let textSplit = text.split('')
    textSplit.map((char, index) => {
      return <Display char={char} key={index} />;
    })
  }

  displaySorteio = () => {
    return this.convertToSquares(this.state.selectedPerson.name);
  };

  displayBoaSorte = () => {
    return this.convertToSquares('Boa Sorte!')
  }

  displayRendered = () => {
    if (this.state.sorteado === true) {
      this.displaySorteio()
    } else {
      this.displayBoaSorte();
    }
  };

  result = this.displayRendered();

  render() {
    return (
      <div className="App">
        <Wrapper
          background={this.state.background}
          banner={this.state.banner}
          display={() => this.displayRendered }
        />
      </div>
    );
  }
}

export default App;
