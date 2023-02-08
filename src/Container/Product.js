import { FormControl } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import List from '../Component/List/List';
const data = [
    {
        id: 101,
        image: "assets/image/hot_shot_mist (1).jpg",
        name: "ot Shot Heat Protection Mist with Grapeseed Oil Provitamin B5 - 150 ml",
        desc: "Prevents Damage | Upto 230° Celsius Protection",
        price: 780
    },
    {
        id: 102,
        image: "assets/image/repair-remedy-leave-in-cream-for-damaged-hair-150g.jpg",
        name: "Hair Fall Control Shampoo & Conditioner Combo for Stronger Hair",
        desc: "Prevents Damage | Upto 230° Celsius Protection",
        price: 269
    },
    {
        id: 103,
        image: "assets/image/finish_spray.jpg",
        name: "Anti-Dandruff Combo For a Clear & Healthy Scalp (300 ml + 250 g)",
        desc: "Prevents Damage | Upto 230° Celsius Protection",
        price: 459
    }

]

function Product(props) {
    const [filterData, setFilterData] = useState();
      
    // const [sortData, setSortData] = useState();
    // const [sort, setSort] = useState();
    const handlefilter = (val) => {
        alert("")
        console.log("hello")
        if (val !== '') {
            let fData = data.filter((d) => (
                d.name.toLowerCase().includes(val.toLowerCase()) ||
                d.price.toString().includes(val) ||
                d.quantity.toString().includes(val)
            ))
            setFilterData(fData)

        } 
        else {
            setFilterData()
            // sorting(sort, 'yes');
        }
    }

    // const sorting = (val, empty = '') => {
    //     let FData = filterData && empty === '' ? filterData : data;
    //     setSort(val)
    //     console.log(val)
    //     if (val !== 0) {
    //         let sData = FData.sort((a, b) => {
    //             if (val === "hl") {
    //                 return b.price - a.price
    //             } else if (val === "lh") {
    //                 return a.price - b.price
    //             } else if (val === 'az') {
    //                 return a.name.localeCompare(b.name)
    //             } else if (val === "za") {
    //                 return b.name.localeCompare(a.name)
    //             } else if (val === "qh") {
    //                 return b.quantity - a.quantity
    //             } else if (val === "ql") {
    //                 return a.quantity - b.quantity
    //             } else if (val === 'eh') {
    //                 return a.expiry > b.expiry ? 1 : -1
    //             } else if (val === "el") {
    //                 return b.expiry > a.expiry ? 1 : -1
    //             }
    //         })
    //         console.log(sData)
    //         setSortData(sData)
    //     } else {

    //     }
    // }
    let finalData = filterData ? filterData : data; 
    console.log(finalData)
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
                            <div className="d-flex gap-5 " >
                                <FormControl fullWidth>
                                    {/* <InputLabel id="demo-simple-select-label">Sorting</InputLabel> */}
                                    {/* <select defaultValue={0} onChange={sorting}>
                                        <option value={1}>High to Low</option>
                                        <option value={0}>Low to High</option>
                                        <option value={2}>A to Z</option>
                                        <option value={3}>Z to A</option>
                                    </select> */}
                                </FormControl>

                                <input
                                    type={"text"}
                                    name="search"
                                    placeholder='Seach...'
                                    onChange={(e) => handlefilter(e.target.value)}
                                />

                            </div>
                                    <List listdata={data} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Product;