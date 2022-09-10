export default function Header(props){

    const { countCartItems } = props;

    return <div className="row center header_block">
    <div>
        <a href="/#"><h2>Sopping Cort</h2></a>
    </div>
    
    <div>
        <a href="/#">Cart
        {countCartItems ? (
            <button className="badge">{countCartItems}</button>
        ):(
            ''
        )}

        </a> {''}
        
        <a href="/">Sing In</a>
    </div>

    </div>;
}