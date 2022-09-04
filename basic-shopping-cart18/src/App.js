import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

function app(){
  const  {products} = data;
  return <div>
    <Header />
      <div className="row">
        <Main products={products} />
        <Basket />
      </div>
  </div>;
}

export default app;