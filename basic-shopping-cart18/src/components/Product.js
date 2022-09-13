import React from "react";
export default function Product(props) {
    const {item, product, onAdd, onRemove} = props;
    return(
        <div className="card p-2 m-2 h-100 " style={{width:'14rem'}}>
            <div className="car-body ">
                <img className="card-img" src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="fw-bold pt-1" >$ {product.price}</div>
            </div>
        <div >
        
        {item ? (<div>
        <button onClick={() => onRemove(item)} className="btn btn-danger">
        -
        </button>

        <span className="p-1" >{item.qty}</span>

        <button  onClick={() => onAdd(item)} className="btn btn-info">
        +
        </button>

        </div>):(

        <button className="btn btn-warning btn-sm" onClick={() => onAdd(product)}>Add to Cart</button>
    )
}
        </div>

            <div>
               
            
            </div>

        </div>
    );
}