import Product from "./Product";

export default function Main(props){
    const {products, onAdd, onRemove} = props;
    return(
    <div className="header_block col-2">
        <h2>product</h2>
        <div className="row">
            {products.map((product) =>(
                <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove}> </Product>
            ))}
        </div>
    </div>
    );
}