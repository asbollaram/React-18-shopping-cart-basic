export default function Basket(props){
    const {cartItems,onAdd,onRemove} = props;
    const itemPrice = cartItems.reduce((a,c) => a + c.qty * c.price,0);
    const taxPrice = itemPrice * 0.4;
    const shoppingPrice = itemPrice > 2000 ? 0:20;
    const totalPrice = itemPrice + taxPrice +shoppingPrice;
    return (
    <aside className="col-1 header_block">
    <h3>Cart Items</h3>
    
        <div>
            {cartItems.length === 0 && <div>cart is emty</div>}
            {cartItems.map((item) => 
                <div key={item.id} className="row">
                    <div className="col-1">{item.name}</div>
                    <div className="col-1">
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                        <button onClick={() => onAdd(item)} className="add">+</button>
                    </div>
                    <div className="col-1 text-right">
                    {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            )}

            {/**items */}
            {cartItems.length !== 0 && (
                <div>
                    <hr />
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Tax Price</div>
                        <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shopping Price</div>
                            <div className="col-1 text-right">
                            ${shoppingPrice.toFixed(2)}
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <b>Total Price</b>
                        </div>
                        <div className="col-1 text-right">
                            ${totalPrice.toFixed(2)}
                        </div>
                    </div>
                <hr/>
                <div className="row">
                    <button onClick={() => alert('implement check out')}>Check out</button>
                </div>
                </div>
            )}
        </div>
    </aside>
    )
}