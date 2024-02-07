const Header = () => {

    return(
        <>
            <div className="area grid grid-cols-3 py-7">
                <div className="flex justify-start gap-5">
                    <div className="button">Home</div>
                    <div className="button">Shop</div>
                    <div className="button">About</div>
                    <div className="button">Contact</div>
                </div>
                <div className="flex justify-center">FRISK<span>O</span></div>
                <div className="flex justify-end gap-5">
                    <div className="icon">Search</div>
                    <div className="icon">Checkout</div>
                </div>
            </div>
        
        
        </>
    )
}

export default Header