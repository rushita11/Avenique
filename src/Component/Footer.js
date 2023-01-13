import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer>
                <div className="footer_area">
                    <div className="container">
                        <div className="footer_logo text-center">
                            <a href><img src="assets/image/footer_logo.png" alt /></a>
                        </div>
                        <div className="footer_menu">
                            <ul className="text-center">
                                <li><a href>Om os</a></li>
                                <li><a href>Tjenester</a></li>
                                <li><a href> Kontakt os</a></li>
                                <li><a href>Vilkår og betingelser</a></li>
                                <li><a href>Privatlivspolitik</a></li>
                                {/* <li><a href="">Om os</a></li> */}
                            </ul>
                        </div>
                        <div className="contact_info_cls">
                            <ul>
                                <li>
                                    <div className="contact_image">
                                        <img src="assets/image/phone.png" alt />
                                    </div>
                                    <div className="contact_info_div">
                                        <p className="speclialist_name text-white   ">Opkald</p>
                                        <p className="specialist_post"><a href>+45 31 55 50 65</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact_image">
                                        <img src="assets/image/mail.png" alt />
                                    </div>
                                    <div className="contact_info_div">
                                        <p className="speclialist_name text-white">E-mail</p>
                                        <p className="specialist_post"><a href>Info@avenique.dk</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact_image">
                                        <img src="assets/image/location.png" alt />
                                    </div>
                                    <div className="contact_info_div">
                                        <p className="speclialist_name text-white">Adresse</p>
                                        <p className="specialist_post text-white">Henningsens Allé 8, 2900 Hellerup</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright_area">
                    <div className="container">
                        <div className="copyright_text_area">
                            <div className="copyright_cls">
                                <p className="specialist_post text-white">Avenique © 2022 All rights Reserved</p>
                            </div>
                            <div className="social_media_div">
                                <ul>
                                    <li><a href><img src="assets/image/insta.png" alt /></a></li>
                                    <li><a href><img src="assets/image/facebook.png" alt /></a></li>
                                    <li><a href><img src="assets/image/twitter.png" alt /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;