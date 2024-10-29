import logo from './logo.svg';
import './App.css';
import { useState, useEffect, createContext } from 'react';
import StarRating from './starRating/starRating';

const NameContext = createContext('');
function Greeting() {
  return (
    <NameContext.Consumer>
      {name => <h1>Welcome, {name}</h1>}
    </NameContext.Consumer>
  );
}
function Body() {
  return <Greeting />;
} 
function App() {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const [loading, setLoading] = useState(false);
  window.addEventListener("scroll", (e) => {onScroll(e)});
  document.getElementById("root").addEventListener("click", (e) => {console.log(e)});

  const onScroll = (event, o) => {
    console.log(event.currentTarget)
    /* if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isLoading)
    { */
    if(!isLoading){
      setIsLoading(true)

      //console.log(data.length)
      setData([...data, 'new data ' + data.length]);
      setTimeout( () => setIsLoading(false), 10 * 1000)

    }
      
    //}
  };
  useEffect(()=> {
    console.log(data);
  }, [data]);

  const delay = (seconds) => 
    new Promise((resolves) => 
      setTimeout( () => resolves(`${seconds} seconds`), seconds * 1000)
    
  );

  const getSpacePeople = () => 
    fetch("http://api.open-notify.org/astros.json").then((result) => result.json() ) ;

  
  const countToFive = async () => {
    console.log("zero");
    await delay(5);
    console.log("five second");
  }

  useEffect(()=> {
    let o =  { name: 'freddo', lastName: 'medina' }
    console.log({...o, lastName: 'colli'});

    delay(7).then((data) => console.log(data));

    getSpacePeople().then( (data) => console.log(data.people));

    countToFive();
    
  }, []);

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn freddo
        </a>
      </header>
      <NameContext.Provider value='Alfredo'>
        <Body />
      </NameContext.Provider>
      <StarRating totalStars = {10} />    
      {data.map((e) => (
        <p>{e}</p>
      ))}
      <p>
        { isLoading ? 'Loading new data': '' }
      </p>
    </div>
  );
}

export default App;
