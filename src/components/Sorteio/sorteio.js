import React, { useState, useEffect } from 'react';
import Display from './Display/display';
import classes from './Sorteio.module.css';
import Participantes from '../../assets/participantes.json';

const Sorteio = (props) => {

  const [amountChars] = useState(20);
  const [participantes, setParticipantes] = useState([])
  const [selectedPerson, setSelectedPerson] = useState({ name: 'Boa  sorte', phone: '00 0000 0000', company: 'company' });
  const [displayName, setDisplayName] = useState(true);
  const [displayPhone, setDisplayPhone] = useState(false);
  const [displayCompany, setDisplayCompany] = useState(true)
  const [timeToSort] = useState(5000);
  // const [sorted] = useState(false);


  useEffect(() => {
    function setUpDisplayName() {
      const name = selectedPerson.name.padEnd(amountChars, ' ');
      const nameSplited = name.split('');
      return nameSplited.map((char, index) => {
        return <Display char={char} key={index} />;
      });
    }

    const setUpDisplayPhone = () => {
      const phone = selectedPerson.phone;
      const lastDigits = phone.slice(-4);
      const maskedPhone = "*****-" + lastDigits
      const phoneSplited = maskedPhone.split('');
      return phoneSplited.map((char, index) => {
        return <Display char={char} key={index} />;
      });
    }

    const setUpDisplayCompany = () => {
      const company = selectedPerson.company.padEnd(10, ' ');
      const companySplited = company.split('');
      return companySplited.map((char, index) => {
        return <Display char={char} key={index} />;
      });
    }

    setParticipantes(Participantes.participantes);
    setDisplayName(setUpDisplayName());
    setDisplayPhone(setUpDisplayPhone());
    setDisplayCompany(setUpDisplayCompany());
    // const url = 'https://cors-anywhere.herokuapp.com/http://wildiney.com/testes/participantes.json';
    // fetch(url)
    //   .then(result => result.json())
    //   .then(result => {
    //     this.setState({
    //       participantes: result.participantes
    //     });
    //     console.log("CDM", participantes);
    //     console.log("CDM", banner);
    //   })
  }, [amountChars, selectedPerson.company, selectedPerson.name, selectedPerson.phone]);



  const sortear = () => {
    if (participantes.length !== undefined) {
      const indice = Math.floor(Math.random() * participantes.length);
      const selName = participantes[indice].name.substring(0, 29).toUpperCase();
      const phone = participantes[indice].phone;
      const company = participantes[indice].company;
      setSelectedPerson({ name: selName, phone: phone, company: company });
    } else {
      alert("Não há participantes habilitados")
      return false;
    }
  };

  const sortNameHandler = () => {
    let int = setInterval(() => {
      document.getElementById('sorteio').classList.remove('blink');
      sortear();
    }, 100);

    setTimeout(() => {
      clearInterval(int);
      document.getElementById('sorteio').classList.add('blink');
      console.table({
        Name: selectedPerson.name,
        Field: selectedPerson.phone
      });
    }, timeToSort);
  };

  return (
    <>
      <div
        id="sorteio"
        className={[classes.wrapperItem, classes.sorteio].join(' ')}
      >
        {displayName ? displayName : null}
        <hr />
        {displayPhone ? displayPhone : null}
        {displayCompany ? displayCompany : null}
      </div>
      <div
        className={[
          classes.wrapperItem,
          classes.btn_sorteio,
          classes.btn_sortear
        ].join(' ')}
      >
        <button
          className={[classes.btn].join(' ')}
          onClick={sortNameHandler}
        >
          SORTEAR
        </button>
      </div>
    </>
  );
}

export default Sorteio;
