import React, { Component } from 'react';
import Display from './Display/display';
import Aux from '../../hoc/Auxiliary';
import classes from './Sorteio.module.css'

class Sorteio extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      amountChars: 30,
      participantes: [
        { nome: 'Wildiney Fernando Pimentel Di Masi', telefone: '11 0000 0000' },
        { nome: 'Nome Sobrenome de 02 mais eu', telefone: '11 1111 1111' },
        { nome: 'Nome Sobrenome de 03 mais eu', telefone: '11 2222 2222' },
        { nome: 'Nome Sobrenome de 04 mais eu', telefone: '11 3333 3333' },
        { nome: 'Nome Sobrenome de 05 mais eu', telefone: '11 4444 4444' },
        { nome: 'Nome Sobrenome de 06 mais eu', telefone: '11 5555 5555' },
        { nome: 'Nome Sobrenome de 07 mais eu', telefone: '11 6666 6666' }
      ],
      selectedPerson: { name: 'Boa sorte!', extraField: '00 0000 0000' },
      timeToSort: 5000,
      sorted: false
    };

  }
 

  sortear = () => {
    const participantes = this.state.participantes;
    const indice = Math.floor(Math.random() * participantes.length);
    const selName = participantes[indice].nome.substring(0, 29).toUpperCase();
    const eField = participantes[indice].telefone;
    this.setState({ selectedPerson: { name: selName, extraField: eField } });
  };

  sortNameHandler = () => {
    let int = setInterval(() => {
      document.getElementById("sorteio").classList.remove("blink");
      this.sortear();
    }, 100);

    setTimeout(() => {
      clearInterval(int);
      document.getElementById("sorteio").classList.add("blink")
      console.table({ "Name": this.state.selectedPerson.name, "Field": this.state.selectedPerson.extraField })

    }, 2000);
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
      <Aux>
        <div id="sorteio" className={[classes.wrapperItem, classes.sorteio].join(' ')}>
          {display}
        </div>
        <div className={[classes.wrapperItem, classes.btn_sorteio, classes.btn_sortear].join(' ')}>
          <button className={[classes.btn].join(' ')} onClick={this.sortNameHandler} >SORTEAR</button>
        </div>
      </Aux>
    );
  }

}

export default Sorteio;