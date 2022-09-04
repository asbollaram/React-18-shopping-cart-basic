export default function Main(props){
    const {products} = props;
    return(
    <div className="header_block col-2">
        <h2>product</h2>
        <div className="row">
            {products.map((product) =>(
                <div key={product.id}>{product.name} </div>
            ))}
        </div>
    </div>
    );
}