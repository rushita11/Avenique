import React from 'react';

function Home(props) {
    return (
        <>
            <div>
                {/* header_video_section */}
                <div className="header_video_section">
                    <div className="video_overlay" />
                    <video className="w-100" id="background-video" autoPlay loop muted>
                        <source src="assets/image/Ai Beauty Clinic & PicoSure.mp4" type="video/mp4" style={{ width: '100%' }} />
                    </video>
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
                        <a href><img src="assets/image/scroll_icon.png" alt /></a>
                    </div>
                </div>
                {/* header_video_section */}
                {/* treatment_section */}
                <section className="treatment_section">
                    <div className="container">
                        <div className="heading_text_cls text-center">
                            <p className="heading_text">Prøv vores behandlinger</p>
                            <p className="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lectus
                                quis sem lacinia nonummy.</p>
                        </div>
                    </div>
                    <div className="avenique_image_area">
                        <ul>
                            <li>
                                <div className="overlay" />
                                <img src="assets/image/treatment_image_1.png" alt />
                                <div className="avenique_text_cls">
                                    <p className="speclialist_name text-white">Laserbehandling</p>
                                </div>
                                <div className="avenique_hover_div">
                                    <span className="arrow_span"><a href><img src="assets/image/arrrow.png" alt /></a> </span>
                                </div>
                            </li>
                            <li>
                                <div className="overlay" />
                                <img src="assets/image/treatment_image_2.png" alt />
                                <div className="avenique_text_cls">
                                    <p className="speclialist_name text-white">Botox og Fillers</p>
                                </div>
                                <div className="avenique_hover_div">
                                    <span className="arrow_span"><a href><img src="assets/image/arrrow.png" alt /></a> </span>
                                </div>
                            </li>
                            <li>
                                <div className="overlay" />
                                <img src="assets/image/treatment_image_3.png" alt />
                                <div className="avenique_text_cls">
                                    <p className="speclialist_name text-white">Tattoo Removal</p>
                                </div>
                                <div className="avenique_hover_div">
                                    <span className="arrow_span"><a href><img src="assets/image/arrrow.png" alt /></a> </span>
                                </div>
                            </li>
                            <li>
                                <div className="overlay" />
                                <img src="assets/image/treatment_image_4.png" alt />
                                <div className="avenique_text_cls">
                                    <p className="speclialist_name text-white">Fedtfrysning</p>
                                </div>
                                <div className="avenique_hover_div">
                                    <span className="arrow_span"><a href><img src="assets/image/arrrow.png" alt /></a> </span>
                                </div>
                            </li>
                        </ul>
                        <div className="common_button_div">
                            <a href className="common_button book_online_button">Kontakt os</a>
                        </div>
                    </div>
                </section>
                {/* treatment_section */}
                {/* before-after_image section */}
                {/* before-after_image section */}
                <section className="before_after_section position-relative pt-120">
                    <div className="container">
                        <div className="heading_text_cls text-center">
                            <p className="heading_text">Se vores tidligere behandlinger</p>
                            <p className="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lectus
                                quis sem lacinia nonummy.</p>
                        </div>
                        <div className="container before_after_container">
                            <div className="before-after-slider-item">
                                <div id="slider" className="beer-slider" data-start={75}>
                                    <div className="ctnr ctnr-winter">
                                        <img className="winter" src="assets/image/before.png" />
                                        <section className="b b2">
                                            <div className="before_text before_after_text">
                                                <p>Før</p>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="beer-reveal">
                                        <div className="ctnr ctnr-summer">
                                            <img className="summer" src="assets/image/after.png" />
                                            <section className="b b1">
                                                <div className="after_text before_after_text">
                                                    <p>efter</p>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    <span className="scroll" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* specialist_section */}
                <section className="specialist_section">
                    <div className="container">
                        <div className="heading_text_cls text-center">
                            <p className="heading_text">Mød vores specialister</p>
                            <p className="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lectus
                                quis sem lacinia nonummy.</p>
                        </div>
                        <div className="specialist_image_area">
                            <ul>
                                <li>
                                    <div className="specialist_image_cls">
                                        <div className="overlay" />
                                        <img src="assets/image/specialist_1.png" alt className="video_back_image" />
                                        <div className="specialist_text_cls text-white">
                                            <p className="speclialist_name">Dilan El-Rekabi</p>
                                            <p className="specialist_post">Laser Dermatologist In Charge</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="specialist_image_cls">
                                        <div className="overlay" />
                                        <img src="assets/image/specialist_2.png" alt className="video_back_image" />
                                        <div className="specialist_text_cls text-white">
                                            <p className="speclialist_name">Amani El Jaouni</p>
                                            <p className="specialist_post">Kosmetolog &amp; Specialiseret</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="specialist_image_cls">
                                        <div className="overlay" />
                                        <img src="assets/image/specialist_3.png" alt className="video_back_image" />
                                        <div className="specialist_text_cls text-white">
                                            <p className="speclialist_name">Sarah Isabelle Vigan Pauly</p>
                                            <p className="specialist_post">Sygeplejerske &amp; Specialiseret</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="specialist_image_cls">
                                        <div className="overlay" />
                                        <img src="assets/image/specialist_4.png" alt className="video_back_image" />
                                        <div className="specialist_text_cls text-white">
                                            <p className="speclialist_name">Helene Mertz</p>
                                            <p className="specialist_post">Makeup &amp; Hair Artist</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="specialist_image_cls">
                                        <div className="overlay" />
                                        <img src="assets/image/specialist_5.png" alt className="video_back_image" />
                                        <div className="specialist_text_cls text-white">
                                            <p className="speclialist_name">Anker Lærkeborg</p>
                                            <p className="specialist_post">Laser Dermatologist In Charge</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* specialist_section */}
                {/* skin_specialist_section */}
                <section className="skin_specialist_section">
                    <div className="container">
                        <div className="specialist_main_cls">
                            <div className="row align-items-center">
                                <div className="col-md-8 order-2 order-md-1 ">
                                    <div className="skin_specialist_text_area pe-lg-5 pe-md-2 pe-0">
                                        <p className="heading_text text-white">
                                            Mød vores hudspecialist
                                        </p>
                                        <p className="main_paragraph text-white">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Fusce quis lectus quis sem lacinia nonummy.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Fusce quis lectus quis sem lacinia nonummy.Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Fusce quis lectus quis sem lacinia nonummy. Fusce quis
                                            lectus quis sem lacinia nonummy.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Fusce quis lectus quis sem lacinia nonummy.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit.</p>
                                        <div className="common_button_div">
                                            <a href className="common_button">Kontakt os</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 order-1 order-md-2">
                                    <div className="skin_specialist_image_cls">
                                        <img src="assets/image/skin_specialist_1.png" alt />
                                        <div className="skin_specialist_name_area">
                                            <p className="speclialist_name">Dilan El-Rekabi</p>
                                            <p className="specialist_post">Laser Dermatologist In Charge</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="specialist_main_cls  pt-lg-5">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <div className="skin_specialist_image_cls">
                                        <img src="assets/image/skin_specialist_2.png" alt />
                                        <div className="skin_specialist_name_area">
                                            <p className="speclialist_name">Fornavn Efternavn</p>
                                            <p className="specialist_post">Hudlæge</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="skin_specialist_text_area ps-lg-5 ps-md-2 ps-0">
                                        <p className="heading_text text-white">
                                            Mød vores hudspecialist
                                        </p>
                                        <p className="main_paragraph text-white">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Fusce quis lectus quis sem lacinia nonummy.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Fusce quis lectus quis sem lacinia nonummy.Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Fusce quis lectus quis sem lacinia nonummy. Fusce quis
                                            lectus quis sem lacinia nonummy.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Fusce quis lectus quis sem lacinia nonummy.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit.</p>
                                        <div className="common_button_div">
                                            <a href className="common_button">Kontakt os</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* skin_specialist_section */}
                {/* bootstrap modal */}

                {/* <div className="modal fade" id="videomodal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <video className="pop__up_video" autoPlay width="100%" controls>
                                    <source src="assets/image/Ai Beauty Clinic & PicoSure.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                {/* review_section */}
                <section className="review_section">
                    <div className="container">
                        <div className="heading_text_cls">
                            <p className="heading_text">Hvad vores kunder siger om os</p>
                            <p className="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lectus
                                quis sem lacinia nonummy.</p>
                        </div>
                        <div className="slider_main_div">
                            <div className="owl-carousel owl-theme review_slider">
                                <div className="slider-item">
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="review_video_area">
                                                <div className="review_image">
                                                    <img src="assets/image/reviewer_image.png" alt />
                                                </div>
                                                <div className="video_play_div">
                                                    <a href className="pop__up_video_button" data-bs-toggle="modal" data-bs-target="#videomodal"><img src="assets/image/video_play_icon.png" alt /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="review_text_area">
                                                <p className="heading_text review_heading">Behandler super professionelt og grundigt</p>
                                                <p className="main_paragraph">Anbefaler laser hos Avénique, så allerede resultater fra
                                                    første behandling. Har haft Amani som behandler super professionel og grundig.
                                                    Følte
                                                    mig virkelig tryg og tilpas i hendes hænder. Tak ❤️
                                                </p>
                                                <img src="assets/image/review_star.png" alt className="review_star_img" />
                                                <p className="speclialist_name">- Sarah Omar</p>
                                                <p className="specialist_post">Tilfreds kunde</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slider-item">
                                    <div className="row">
                                        <div className="col-lg-6 p-0">
                                            <div className="review_video_area">
                                                <div className="review_image">
                                                    <img src="assets/image/reviewer_image.png" alt />
                                                </div>
                                                <div className="video_play_div">
                                                    <a href className="pop__up_video_button" data-bs-toggle="modal" data-bs-target="#videomodal"><img src="assets/image/video_play_icon.png" alt /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 p-0">
                                            <div className="review_text_area">
                                                <p className="heading_text review_heading">Behandler super professionelt og grundigt</p>
                                                <p className="main_paragraph">Anbefaler laser hos Avénique, så allerede resultater fra
                                                    første behandling. Har haft Amani som behandler super professionel og grundig.
                                                    Følte
                                                    mig virkelig tryg og tilpas i hendes hænder. Tak ❤️
                                                </p>
                                                <img src="assets/image/review_star.png" alt className="review_star_img" />
                                                <p className="speclialist_name">- Sarah Omar</p>
                                                <p className="specialist_post">Tilfreds kunde</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* review_section */}
                {/* free_assesment_section */}
                <section className="free_assesment_section">
                    <div className="container">
                        <div className="specialist_main_cls">
                            <div className="row align-items-center">
                                <div className="col-md-7 order-2 order-md-1">
                                    <div className="skin_specialist_text_area">
                                        <p className="heading_text text-white">
                                            Få gratis vurdering
                                        </p>
                                        <p className="main_paragraph text-white">Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Fusce quis lectus quis sem lacinia nonummy.</p>
                                        <div className="common_button_div">
                                            <a href className="common_button">Få gratis vurdering</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 order-1 order-md-1">
                                    <div className="skin_specialist_image_cls">
                                        <img src="assets/image/free_assesment.png" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></section>
                {/* free_assesment_section */}
                {/* findus_section */}
                <section className="findus_section">
                    <div className="container">
                        <div className="slider-item">
                            <div className="row">
                                <div className="col-lg-6 p-0">
                                    <div className="review_video_area">
                                        <div className="review_image">
                                            <img src="assets/image/findus_section_image.png" alt className="w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 p-0 ">
                                    <div className="review_text_area">
                                        <p className="heading_text review_heading">du kan finde os her</p>
                                        <p className="main_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                                            quis lectus quis sem lacinia nonummy.Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Fusce quis lectus quis sem lacinia nonummy.Lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit. Fusce quis lectus.
                                        </p>
                                        <div className="common_button_div">
                                            <a href className="common_button">+45 31 55 50 65</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* findus_section */}
                {/* avenique_image_section */}
                <section className="avenique_image_section">
                    <div className="avenique_image_area">
                        <ul>
                            <li><img src="assets/image/avenique_image_1.png" alt />
                                <div className="avenique_hover_div">
                                    <p className="speclialist_name text-white">@Avenique</p>
                                    <span className="arrow_span"><a href><img src="assets/image/arrrow.png" alt /></a> </span>
                                </div>
                            </li>
                            <li><img src="assets/image/avenique_image_2.png" alt />
                                <div className="avenique_hover_div">
                                    <p className="speclialist_name text-white">@Avenique</p>
                                    <span className="arrow_span"><a href><img src="assets/image/arrrow.png" alt /></a> </span>
                                </div>
                            </li>
                            <li><img src="assets/image/avenique_image3.png" alt />
                                <div className="avenique_hover_div">
                                    <p className="speclialist_name text-white">@Avenique</p>
                                    <span className="arrow_span"><a href><img src="assets/image/arrrow.png" alt /></a> </span>
                                </div>
                            </li>
                            <li><img src="assets/image/avenique_image4.png" alt />
                                <div className="avenique_hover_div">
                                    <p className="speclialist_name text-white">@Avenique</p>
                                    <span className="arrow_span"><a href><img src="assets/image/arrrow.png" alt /></a> </span>
                                </div>
                            </li>
                            <li><img src="assets/image/avenique_image5.png" alt />
                                <div className="avenique_hover_div">
                                    <p className="speclialist_name text-white">@Avenique</p>
                                    <span className="arrow_span"><a href><img src="assets/image/arrrow.png" alt /></a> </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* avenique_image_section */}
            </div>

        </>
    );
}

export default Home;