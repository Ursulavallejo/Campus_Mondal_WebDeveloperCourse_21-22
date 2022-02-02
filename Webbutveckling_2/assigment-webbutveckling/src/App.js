import Header from "./components/header/Header";

import CardItem from "./components/card/CardItem";
import NavBar from "./components/navBar/NavBar";

import BasketItem from "./components/basket/BasketItem";
import Routing from "./routing/Routing";


function App() {
    return (
        <div className='pageLayout'>
            <Header />
                 <Routing>
                <NavBar/>
                 </Routing>

                {/*<BasketItem/>*/}
                {/*<CardItem text='item 1'/>*/}
                {/*<CardItem text='item 2'/>*/}
                {/*<CardItem text='item 3'/>*/}
        </div>
);
}

export default App;
