import Header from "./components/header/Header";

import CardItem from "./components/card/CardItem";
import NavBar from "./components/navBar/NavBar";
import CardList from "./components/card/CardList";
import TextMain from "./components/TextMain";
import CardOnBuy from "./components/card/CardOnBuy";


function App() {
    return (
        <div className='pageLayout'>
            <Header/>
            <NavBar/>
            <TextMain/>
            <CardList/>
            {/*<CardOnBuy/>*/}
            {/*<CardItem text='item 1'/>*/}
            {/*<CardItem text='item 2'/>*/}
            {/*<CardItem text='item 3'/>*/}


        </div>
    );
}

export default App;
