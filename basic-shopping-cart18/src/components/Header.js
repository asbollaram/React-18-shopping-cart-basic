export default function Header(props){

    const { countCartItems } = props;

    return (
        <div>        
        <header className="text-bg-dark">
           
            <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
                <div className="col-lg-auto me-lg-auto">   
                    <a className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" href="/#">
                        <h2>Sopping Cart</h2>
                    </a>
                </div> 
                <div className="text-end">
                    <a href="/#" className="text-white p-1">Cart
                        {countCartItems ? (
                            <button className="m-1 badge text-bg-warning border-0">{countCartItems}</button>
                        ):(
                            ''
                        )}</a> {''} 
                    <a href="/#" className="text-white">Sing In</a>
                </div>
            </div>
        </header>
        </div>
    )
}