//import logo from './logo.svg';
import './App.css';
import doublePi, { pi, triplePi as triPi, addition } from './myMath';
import Card from './Card';
import List from './List';
import contacts from './data/contacts';

function createCard(contact) {
  return (
    <Card
      img={contact.img} 
      name={contact.name} 
      phone={contact.phone} 
      email={contact.email} 
    />
  )
}

function filterCards(contact){
  return contact.name.includes('B');
}


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
    const fName = "Renata";
    const lName = "Calderon";
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
    var subName = "B";
    var n1 = Math.floor(Math.random() * 10);
    var n2 = Math.floor(Math.random() * 10);
    // var cards = [];
    // contacts.forEach((contact) => {
    //   if(contact.name.includes('B')) {
    //     cards.push(
    //       <Card
    //         img={contact.img} 
    //         name={contact.name} 
    //         phone={contact.phone} 
    //         email={contact.email} 
    //       />
    //     );
    //   }
    // });
    contacts.reduce((contact, label = "Name") => {
      contact.name += label;
      return contact; 
    })
    return (
    <div>
      {contacts
        .filter((contact)=>{
          return  contact.name.includes(subName)&&contact.phone.includes("56");
        })
        .map(createCard)}
      {/* {cards} */}
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

export default App