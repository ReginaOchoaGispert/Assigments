//import logo from './logo.svg';
import './App.css';
import doublePi, { pi, triplePi as triPi, addition } from './myMath';
import Card from './Card';
import List from './List';

function App() {
  /**<div className="App">
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
          Learn React
        </a>
      </header>
    </div> */
    const num = 7;
    const fName = "Regina";
    const lName = "Ochoa";
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const customStyle = {
      color: "red",
      fontSize: "20px",
      border: "1px solid black",
    };
    if(year > 2020) {
      customStyle.color = "green";
    }
    const image = "https://picsum.photos/200";
    var n1 = Math.floor(Math.random() * 10);
    var n2 = Math.floor(Math.random() * 10);
    return (
    <div>
      <Card 
        img={ image } 
        name="Jack Black" 
        phone="+123456654321" 
        email="myemail@mail.com"
      />
      <Card 
        img={ image } 
        name="Beyonce" 
        phone="+95476823" 
        email="beyonce@superstar.com"
      />
      <Card 
        img={ image } 
        name="Elton John" 
        phone="+365892" 
        email="elton@john.com"
      />
      <h1 style = { customStyle }> Hello World { fName + " " + lName } </h1>
      <p> Lorem ipsum { year } </p> { " " } <img src = { image + "?grayscale" } alt = "random pic" / > { " " }
       { " " }
      <List />
      <p>The addition of { n1 } + { n2 } is { addition(n1,n2) } { " " }</p>
      <h3> My lucky number is { num } </h3>
      <h4> The value of pi is { pi } </h4>
      <h4> The double of pi is { doublePi() } </h4>
      <h4> The triple of pi is { triPi() } </h4>
      <h3> A random number is { Math.floor(Math.random()*10) } </h3>
    </div>
  );
}

export default App;
