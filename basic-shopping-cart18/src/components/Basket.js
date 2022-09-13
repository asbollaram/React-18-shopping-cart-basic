export default function Basket(props){
    const {cartItems,onAdd,onRemove} = props;
    const itemPrice = cartItems.reduce((a,c) => a + c.qty * c.price,0);
    const taxPrice = itemPrice * 0.4;
    const shoppingPrice = itemPrice > 2000 ? 0:20;
    const totalPrice = itemPrice + taxPrice +shoppingPrice;
    return (
    <aside className="bg-light rounded-3 ms-3" style={{width:'360px'}}>
        <h3 className="display-6 fw-lighter border-bottom">Cart Items</h3>
        
        <div className="p-2">
            {cartItems.length === 0 && <div>cart is emty</div>}
            {cartItems.map((item) => 
                <div key={item.id} className="row mt-2 border-bottom d-flex align-content-center">
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-6">{item.name}</div>
                            <div className="col-sm-4">
                                <button onClick={() => onRemove(item)} className="btn btn-danger btn-sm mx-1">-</button>
                                <button onClick={() => onAdd(item)} className="btn btn-info btn-sm">+</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-2 text-right">
                    {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            )}

            {/**items */}
            {cartItems.length !== 0 && (
<div className="row">
                <div className="border-top mt-2">
                
                    <div className="row">
                        <div className="col-sm-8">Items Price</div>
                        <div className="col text-end">${itemPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">Tax Price</div>
                        <div className="col text-end">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">Shopping Price</div>
                            <div className="col text-end">
                            ${shoppingPrice.toFixed(2)}
                            </div>
                    </div>
                    <div className="row border-top border-warning p-2 mt-2">
                        <div className="col-sm-8">
                            <b>Total Price</b>
                        </div>
                        <div className="col text-end">
                           <b>${totalPrice.toFixed(2)}</b> 
                        </div>
                    </div>
                <div className="row">
                    <button className="btn btn-primary" onClick={() => alert('implement check out')}>Check out</button>
                </div>
                </div>
                </div>
            )}
        </div>
    </aside>
    )
}