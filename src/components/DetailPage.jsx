const DetailPage = () => {
    return (
        <div className="area py-7 flex gap-10">
            <div className="galeri  h-[80vh] w-3/5">test</div>
            <div className="detail w-2/5">
                <div className="detail_model flex flex-col gap-5">
                    <div className="reviews">5.0 (89 reviews)</div>
                    <div className="judul text-4xl text-uyellow">Stylish Everyday Costume</div>
                    <div className="price text-2xl">$289.99</div>
                    <div className="note text-sm text-ulightgrey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum provident non ratione. 
                        Quod ut alias corrupti dolorem pariatur nesciunt consequatur inventore nostrum quas vel.
                    </div>
                    <div className="available underline font-bold text-xs">
                        CHECK IN-STORE AVAILABILITY
                    </div>
                    <hr />
                    <div className="choose grid grid-cols-4 grid-rows-2 gap-y-5 relative">
                        <span>Select Color</span>
                        <div className="color col-span-2 grid grid-cols-4">
                            <span className="h-7 w-7 rounded-full bg-amber-400"></span>
                            <span className="h-7 w-7 rounded-full bg-amber-400"></span>
                            <span className="h-7 w-7 rounded-full bg-amber-400"></span>
                            <span className="h-7 w-7 rounded-full bg-amber-400"></span>
                        </div>
                        
                        <span></span>
                        <span className="">size</span>
                        <div className="size col-span-2 grid grid-cols-4 text-xs">
                            <span className="h-7 w-7 rounded-full border flex items-center justify-center">XS</span>
                            <span className="h-7 w-7 rounded-full border flex items-center justify-center">S</span>
                            <span className="h-7 w-7 rounded-full border flex items-center justify-center">M</span>
                            <span className="h-7 w-7 rounded-full border flex items-center justify-center">L</span>
                        </div>
                        <span className="text-uyellow">See Measurment</span>
                    </div>
                    <hr />
                    <button className="uppercase flex items-center justify-center bg-blue-800 h-10 font-bold text-xs">
                        Add to Cart
                    </button>
                    <div className="more underline text-center">More payment options</div>
                    <div className="select flex flex-row h-28 items-center border border-solid rounded-xl p-7">
                        <div>Free Shipping</div>
                        <div>Free return within 5 days</div>
                        <div>Exchange your item</div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default DetailPage