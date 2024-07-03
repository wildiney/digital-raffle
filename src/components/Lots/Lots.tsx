/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Display from './Display/Display';
import classes from './Lots.module.css';
import Atendees from '../../assets/atendees.json';

type TAtendees = {
  name: string,
  phone: string,
  company: string
}

const Lots = () => {

  const amountChars = 24;
  const timeToSort = 5000;
  const [atendees, setAtendees] = useState<TAtendees[]>([])
  const [selectedPerson, setSelectedPerson] = useState({ name: ' Boa  sorte  ', phone: '00 0000 0000', company: 'company' });
  const [displayName, setDisplayName] = useState<JSX.Element[] | null>(null);
  const [displayPhone, setDisplayPhone] = useState<JSX.Element[] | null>(null);
  const [displayCompany, setDisplayCompany] = useState<JSX.Element[] | null>(null)
  const [blink, setBlink] = useState('')

  const setUpDisplayName = () => {
    const name = selectedPerson.name.toUpperCase().substring(0, amountChars).padEnd(amountChars, ' ');
    const nameSplited = name.split('');
    return nameSplited.map((char, index) => {
      return <Display char={char} key={index} size="regular" />;
    });
  }
  const setUpDisplayPhone = () => {
    const phone = selectedPerson.phone;
    const lastDigits = phone.slice(-4).padEnd((amountChars / 2) - 8, " ");
    const maskedPhone = phone.substring(1, 3) + "*****-" + lastDigits
    const phoneSplited = maskedPhone.split('');
    return phoneSplited.map((char, index) => {
      return <Display char={char} key={index} size="regular" />;
    });
  }
  const setUpDisplayCompany = () => {
    const company = selectedPerson.company.toUpperCase().substring(0, amountChars).padEnd(amountChars, ' ');
    const companySplited = company.split('');
    return companySplited.map((char, index) => {
      return <Display char={char} key={index} size="regular" />;
    });
  }
  useEffect(() => {
    setAtendees(Atendees.atendees);
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
  }, [selectedPerson.company, selectedPerson.name, selectedPerson.phone]);



  const sortear = () => {
    if (atendees.length !== undefined) {
      const indice = Math.floor(Math.random() * atendees.length);
      const selName = atendees[indice].name.substring(0, 29).toUpperCase();
      const phone = atendees[indice].phone;
      const company = atendees[indice].company;
      setSelectedPerson({ name: selName, phone: phone, company: company });
    } else {
      alert("No atendees available")
      return false;
    }
  };

  const sortNameHandler = () => {
    const int = setInterval(() => {
      setBlink('');
      sortear();
    }, 100);

    setTimeout(() => {
      clearInterval(int);
      setBlink(classes['blink']);
      console.table({
        Name: selectedPerson.name,
        Field: selectedPerson.phone
      });
    }, timeToSort);
  };

  return (
    <>
      <div className={["justify-center align-middle flex flex-wrap", blink].join(' ')}>
        <div className='flex flex-wrap justify-between w-full mb-4'>{displayName ? displayName : null}</div>
        <div className='flex flex-wrap justify-center w-full mb-4'>{displayPhone ? displayPhone : null}</div>
        <div className='relative flex flex-wrap justify-between w-full'>{displayCompany ? displayCompany : null}</div>
      </div>
      <div className={["justify-center align-middle flex flex-wrap"].join(' ')}>
        <button className="px-6 py-3 font-bold text-white border rounded-lg border-slate-400 bg-slate-600" onClick={sortNameHandler}>
          SORTEAR
        </button>
      </div>
    </>
  );
}

export default Lots;
