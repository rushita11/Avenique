import React from 'react';
import List from '../Component/List/List';
const data =[
    {
        id: 101,
        image: "assets/image/hot_shot_mist (1).jpg",
        name:"ot Shot Heat Protection Mist with Grapeseed Oil Provitamin B5 - 150 ml",
        desc: "Prevents Damage | Upto 230° Celsius Protection",
        price: 780
    },
    {
        id: 102,
        image: "assets/image/repair-remedy-leave-in-cream-for-damaged-hair-150g.jpg",
        name:"Hair Fall Control Shampoo & Conditioner Combo for Stronger Hair",
        desc: "Prevents Damage | Upto 230° Celsius Protection",
        price: 269
    },
    {
        id: 103,
        image: "assets/image/finish_spray.jpg",
        name:"Anti-Dandruff Combo For a Clear & Healthy Scalp (300 ml + 250 g)",
        desc: "Prevents Damage | Upto 230° Celsius Protection",
        price: 459
    }

]

function Product(props) {
    return (
        <>
            {/* header_video_section */}
            <div className="header_video_section">
                <div className="video_overlay" />
               
                <img src="assets/image/bBB30_NEW_AADesktop.jpg" alt="" class="w-100 header_background_image" ></img>
                <div className="container">
                    <div className="video_header_text">
                        <h1 className="heading_text">Velkommen til Avénique. Vi tager os af din skønhed!</h1>
                        <p className="main_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lectus
                            quis sem lacinia.</p>
                        <a href className="common_button">Kontakt os</a>
                    </div>
                </div>
                <div className="header_social_div">
                    <ul>
                        <li><a href><img src="assets/image/header_insta (3).png" alt /></a></li>
                        <li><a href><img src="assets/image/header_twitter.png" alt /></a></li>
                        <li><a href><img src="assets/image/header_facebook.png" alt /></a></li>
                    </ul>
                </div>
                <div className="scroll_icon_div">
                    <a href><img src="image/scroll_icon.png" alt /></a>
                </div>
            </div>
            {/* header_video_section */}


            <section className="product_list_section p-120">
                <div className="container-fluid">
                    <div className="container">
                        <div className="heading_text_cls text-center">
                            <p className="heading_text">Mød vores specialister</p>
                            <p className="main-paragraph">Vores ekspertise går ud over normen. Avénique specialisterne er et team
                                bestående af uddannede sygeplejersker, æstetikere og en radiograf, alle med professionelle
                                statslicenser og under skarpt opsyn og klinisk vejledning af Speciallæge Anker Lærkeborg. Sammen
                                har
                                vi skabt behandlinger og protokoller, der sætter baren højt for sikkerhed, effektivitet og
                                ekspertise inden for vores felt. Med flere års erfaring i dette fag, har vi i klinik Avénique
                                men avancerede teknologi, der kræves sikkert for at levere enestående kliniske
                                
                                til vores kundekreds.</p>
                        </div>
                        <div className="product_list_div pt-60">
                            {/* <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="product_list_inner_div">
                                        <div className="product_image_div">
                                            <img src="assets/image/hot_shot_mist (1).jpg" alt />
                                        </div>
                                        <div className="product_desc_div">
                                            <h3 className="product_title">Hot Shot Heat Protection Mist with Grapeseed Oil &amp;
                                                Provitamin B5 - 150 ml</h3>
                                            <p className="product_desc">
                                                Prevents Damage | Upto 230° Celsius Protection
                                            </p>
                                            <p className="product_price">780</p>
                                        </div>
                                        <div className="product_cart_button">
                                            <a href>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="product_list_inner_div">
                                        <div className="product_image_div">
                                            <img src="assets/image/repair-remedy-leave-in-cream-for-damaged-hair-150g.jpg" alt />
                                        </div>
                                        <div className="product_desc_div">
                                            <h3 className="product_title">Hair Fall Control Shampoo &amp; Conditioner Combo for Stronger Hair</h3>
                                            <p className="product_desc">
                                                Prevents Damage | Upto 230° Celsius Protection
                                            </p>
                                            <p className="product_price">269</p>
                                        </div>
                                        <div className="product_cart_button">
                                            <a href>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="product_list_inner_div">
                                        <div className="product_image_div">
                                            <img src="assets/image/hot_shot_hair_shine_spray_hold_spray_for_radiant_shine_firm_hold.jpg" alt />
                                        </div>
                                        <div className="product_desc_div">
                                            <h3 className="product_title">Anti-Dandruff Combo For a Clear &amp; Healthy Scalp (300 ml + 250 g)</h3>
                                            <p className="product_desc">
                                                Prevents Damage | Upto 230° Celsius Protection
                                            </p>
                                            <p className="product_price">459</p>
                                        </div>
                                        <div className="product_cart_button">
                                            <a href>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="product_list_inner_div">
                                        <div className="product_image_div">
                                            <img src="assets/image/finish_spray.jpg" alt />
                                        </div>
                                        <div className="product_desc_div">
                                            <h3 className="product_title">Anti-Dandruff Combo For a Clear &amp; Healthy Scalp (300 ml + 250 g)</h3>
                                            <p className="product_desc">
                                                Prevents Damage | Upto 230° Celsius Protection
                                            </p>
                                            <p className="product_price">499</p>
                                        </div>
                                        <div className="product_cart_button">
                                            <a href>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="product_list_inner_div">
                                        <div className="product_image_div">
                                            <img src="assets/image/hot_shot_mist (1).jpg" alt />
                                        </div>
                                        <div className="product_desc_div">
                                            <h3 className="product_title">Hair Fall Control Shampoo &amp; Conditioner Combo for Stronger Hair</h3>
                                            <p className="product_desc">
                                                Prevents Damage | Upto 230° Celsius Protection
                                            </p>
                                            <p className="product_price">1009</p>
                                        </div>
                                        <div className="product_cart_button">
                                            <a href>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="product_list_inner_div">
                                        <div className="product_image_div">
                                            <img src="assets/image/hot_shot_hair_shine_spray_hold_spray_for_radiant_shine_firm_hold.jpg" alt />
                                        </div>
                                        <div className="product_desc_div">
                                            <h3 className="product_title">HHello Intense Moisture Kit</h3>
                                            <p className="product_desc">
                                                Prevents Damage | Upto 230° Celsius Protection
                                            </p>
                                            <p className="product_price">999</p>
                                        </div>
                                        <div className="product_cart_button">
                                            <a href>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="product_list_inner_div">
                                        <div className="product_image_div">
                                            <img src="assets/image/1_1_20.jpg" alt />
                                        </div>
                                        <div className="product_desc_div">
                                            <h3 className="product_title">BBLUNT Pro 1800W Ionic Hair Dryer </h3>
                                            <p className="product_desc">
                                                Prevents Damage | Upto 230° Celsius Protection
                                            </p>
                                            <p className="product_price">499</p>
                                        </div>
                                        <div className="product_cart_button">
                                            <a href>Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <List listdata={data}/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Product;