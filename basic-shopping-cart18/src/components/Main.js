import Product from "./Product";

export default function Main(props){
    const { cartItems, products, onAdd, onRemove} = props;
    return(
    <div className="col-lg-8 col-md-8 col-sm-12">
       
        <div className="row border rounded-3 p-2">
            {products.map((product) =>(
                <Product key={product.id} 
                product={product} 
                item={cartItems.find((x) => x.id === product.id)}
                onAdd={onAdd} 
                onRemove={onRemove}> 
                </Product>
            ))}
        </div>
    </div>
    );
}