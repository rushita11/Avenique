import React from 'react';

function List({listdata}) {
    return (
     
        
            <div className="row">
            {listdata.map((p, i) => {
                       console.log(listdata);
                    return (
                        
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="product_list_inner_div">
                                    <div className="product_image_div">
                                        <img src={p.image} alt />
                                    </div>
                                    <div className="product_desc_div">
                                        <h3 className="product_title">{p.name}</h3>
                                        <p className="product_desc">
                                            {p.desc}
                                        </p>
                                        <p className="product_price">{p.price}</p>
                                    </div>
                                    <div className="product_cart_button">
                                        <a href>Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                       

                    )
                })}

            </div>
        
    );
}

export default List;