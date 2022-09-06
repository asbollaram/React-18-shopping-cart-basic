import {useState} from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

function App(){
  const  {products} = data;

  // cart item add remove methed 
  // usestate hooks and variable create
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product) => {
    //
    const exist = cartItems.find((x) => x.id === product.id);

    if(exist){
      const newCartItems = cartItems.map((x) =>
      x.id === product.id ? {...exist, qty: exist.qty + 1} : x
      );
      setCartItems(newCartItems);
    } else{
      const newCartItems = [...cartItems, {...product, qty:1}];
      setCartItems(newCartItems);
    }  

  };
  //

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if(exist.qty===1){
      const newCartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItems);
    } else{
      const newCartItems = cartItems.map((x) => 
        x.id === product.id ? { ...exist, qty: exist.qty - 1} : x
      
      );
      setCartItems(newCartItems);
    }

  };

  return <div>
    <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main cartItems={cartItems} products={products} onAdd={onAdd} onRemove={onRemove}/>
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
      </div>
  </div>;
}

export default App;