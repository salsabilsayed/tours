import { useState } from 'react';
import Title from './components/Title';
import OtherTitle from './components/otherTitle';
import Card from './components/Card';
import Container from './components/Container';
import countries from './Countries';

import classes from './App.module.css';

function App() {
  const [countriesList, setCountriesList] = useState(countries);
  const [isToursPresent, setIsToursPresent] = useState(true);

  const onDeleteHandler= id => {
    const newCountriesList = countriesList.filter(item => item.id !== id);
    setCountriesList(newCountriesList);

    if(newCountriesList.length === 0){
      setIsToursPresent(false);
    }
  }


  const content = countriesList.map((country,index) => {
    return <Card 
    key={country.id}
    imageUrl={country.imageUrl}
    price={country.price}
    title={country.title}
    desc={country.description}
    onDeleteHandler={()=>onDeleteHandler(country.id)}
    />
  })

  const refreshHandler = () => {
    setIsToursPresent(true);
    setCountriesList(countries);
  }

  let mainPadding = isToursPresent ? {padding: "40px 0"} : {padding: "0"};
  

  return (
    <main className={classes.App} style={mainPadding}>
      {isToursPresent && <Title />}
      {!isToursPresent && <OtherTitle refreshHandler={refreshHandler}/>}
      <Container>
          {content}
      </Container>
    </main>
  );
}

export default App;
