// import Header from "./components/header/Header";

import CardItem from "./components/CardItem";
import NavBar from "./components/navBar/NavBar";
import CardList from "./components/CardList";




function App() {
  return (
    <div>
      {/*<Header/>*/}
 <NavBar/>
        <CardList/>
        <CardItem text='item 1'/>
        <CardItem text='item 2'/>
        <CardItem text='item 3'/>



    </div>
  );
}

export default App;
