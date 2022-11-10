const PaymentPartners = () => {


    return (
        <div>
            <div style={{ width: "90%", margin: "auto" }}>
                <h1 style={{ textAlign: "left" }}>Payment Partners Offers</h1>
                <div style={{ padding: "12px 16px" }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "#0b1219 0px 6px 12px -4px", color: "#151b39", lineHeight: "19.5px", margin: "0px 24px 0px 0px", padding: "12px 16px", textAlign: "left", width: "488px", height: "62px" }} >
                            <img style={{ width: "56px", height: "62px" }} src="https://www.netmeds.com/images/cms/offers/1657030565_Simpl_Icon.png" alt="1657030565_Simpl_Icon" />
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <p style={{ fontSize: "12px" }}>Get up uo Rs. 1000 Simpl cashback (5%)!..</p>
                                <p style={{ fontSize: "11px" }}>Get up to Rs. 1000 Simpl Cashback (5%) on your FIRST-EVER payment via Simpl for ANY purchases of AN..</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "#0b1219 0px 6px 12px -4px", color: "#151b39", lineHeight: "19.5px", margin: "0px 24px 0px 0px", padding: "12px 16px", textAlign: "left", width: "488px", height: "62px" }} >
                            <img style={{ width: "56px", height: "62px" }} src="https://www.netmeds.com/images/cms/offers/1654235738_Icon_256x256.png" alt="offers" />
                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <p style={{ fontSize: "12px" }}>Use Pay with Rewards, Get max. Rs 1000 Cashback!..</p>
                                <p style={{ fontSize: "11px" }}>Get Assured cashback of max Rs. 1000, when you pay using the "Pay with Rewards" payment option..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "90%", margin: "auto",display:"flex" }}>   
                    <div style={{display:"flex",width:"50%",justifyContent:"space-between",borderRight:"1px solid",padding:"10px 10px 10px 0px"}}>
                        <div style={{ textAlign: "left" }}>
                            <h1 >Previous Orders</h1>
                            <p>Your previously ordered products</p>
                            <button style={{backgroundColor:"transparent",color:"#24aeb1",border:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>View orders <img src="https://www.netmeds.com/assets/version1667495847/gloryweb/images/icons/new-icons/arrow_mark.svg" alt=""/></button>
                        </div>
                        <div>
                            <img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg" alt="previous_orders" />
                        </div>

                    </div>
                    <div style={{display:"flex",width:"50%",justifyContent:"space-between",padding:"10px"}}>
                        <div style={{ textAlign: "left" }}>
                            <h1>Beauty Products</h1>
                            <p>Save Upto 40% off</p>
                            <button style={{backgroundColor:"#24aeb1",color:"white",margin:"32px 0px 0px",fontSize:"14px", textAlign:"center", borderRadius:"4px", boxShadow:"#24aeb1 0px 6px 12px 0px",padding:"5px", border:"none"}}>Explore Beauty</button>
                        </div>
                        <div>
                            <img src="https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg" alt="beauty_products" />
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default PaymentPartners