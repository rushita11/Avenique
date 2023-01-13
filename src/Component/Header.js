import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <header className>
                <div className="container-fluid top_bar_container">
                    <div className="container">
                        <div className="top_header">
                            <div className="top_header_area">
                                <div className="register_text_cls">
                                    <img src="assets/image/register_image.png" alt />
                                    <p>Registered with the Danish Agency for Patient Safety</p>
                                </div>
                                <div className="top_callto_action_cls">
                                    <div className="call_div">
                                        <img src="assets/image/register_image.png" alt />
                                        <a href>+45 31 55 50 65</a>
                                    </div>
                                    <div className="call_div">
                                        <img src="assets/image/register_image.png" alt />
                                        <a href>+45 31 55 50 65</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid navigation_fixed_container">
                    <div className="container navigation_container">
                        <nav className="navbar navbar-expand-lg navbar-light custome_navbar ">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" exct to={"/"}><img src="assets/image/footer_logo.png" alt /></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="menu_close_button d-flex d-lg-none ">X</div>
                                    <ul className="navbar-nav ms-auto mb-2 custome_navbar_ul">
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">Om os</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" aria-current="page" href="#"> Kontakt os</a>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to={"/product"}> Product</NavLink>
                                        </li>
                                    </ul>
                                    <div className="d-lg-flex d-block">
                                        <a href className="common_button booking_button">Online booking</a>
                                        <a href className="common_button call_button book_online_button">Bliv ringet op</a>
                                    </div>
                                </div>
                            </div></nav>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;