import Product from "./Product";

export default function Main(props){
    const {products} = props;
    return(
    <div className="header_block col-2">
        <h2>product</h2>
        <div className="row">
            {products.map((product) =>(
                <Product key={product.id} product={product}>{product.name} </Product>
            ))}
        </div>
    </div>
    );
}