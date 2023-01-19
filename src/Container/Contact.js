import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Contact(props) {
  function Contact(props) {
    let schema = yup.object().shape({
        name: yup.string().required("Please enter the name"),
        email: yup.string().required().email(),
        subject: yup.string().required(),
        message: yup.string().required()
    });
    const formikObj = useFormik({
      initialValues: {
          name: '',
          email: '',
          subject: '',
          message: '',
      },
      validationSchema: schema,
      onSubmit: values => {
          console.log(values)
      },
  });
  const { handleChange, handleBlur, handleSubmit, setFieldTouched, errors, touched } = formikObj;

  console.log(errors);
  }
    return (
        <>
        <div>
  {/* header_video_section */}
  <div className="header_video_section header_image_section">
    <div className="video_overlay" />
    {/* <video class="w-100" id="background-video" autoplay="" loop="" muted="">
      <source src="/assets/image/demo.mp4" type="video/mp4" style="width: 100%;">
  </video> */}
    <img src="/assets/image/bliv (1).png" alt className="w-100 header_background_image" />
    <div className="container">
      <div className="video_header_text about_header_text">
        <h1 className="heading_text text-white">Kontakt os</h1>
        <p className="main_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lectus
          quis sem lacinia nonummy.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis lectus
          quis sem lacinia nonummy.</p>
        {/* <a href="" class="common_button">Kontakt os</a> */}
      </div>
    </div>
    <div className="scroll_icon_div">
      <a href><img src="/assets/image/scroll_icon.png" alt /></a>
    </div>
  </div>
  {/* header_video_section */}
  {/* contact_form_section */}
  <section className="contact_form_section">
    <div className="container">
      <div className="contact_form_cls">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact_form_image_cls">
              <img src="/assets/image/findus_section_image.png" alt className="w-100" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact_form_cls">
              <form action>
                <h1 className="heading_text">Kom i kontakt med os</h1>
                <p className="main_paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  quis lectus quis sem lacinia nonummy.</p>
                <div className="contact_form_div">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input 
                        className="form-control custome_form_input" 
                        placeholder="Indtast navn*" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input 
                        className="form-control custome_form_input" 
                        placeholder="Indtast telefon*" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input 
                        className="form-control custome_form_input" 
                        placeholder="Indtast e-mail*" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <select className="form-control custome_form_input form-select" id="exampleFormControlSelect1">
                          <option>Vælg tjeneste</option>
                          <option>Vælg tjeneste</option>
                          <option>Vælg tjeneste</option>
                          <option>Vælg tjeneste</option>
                          <option>Vælg tjeneste</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea 
                        className="form-control custome_form_input"  
                        rows={4} placeholder="Indtast besked" 
                       />
                      </div>
                    </div>
                  </div>
                  <div className="common_button_div">
                    <a href className="common_button call_button book_online_button">Indsend</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* contact_form_section */}
  {/* map_section */}
  {/* <section className="map_section">
    <div className="map_area">
      <iframe src="/assets/https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4550915.168851545!2d7.056052574836465!3d56.15491658636799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b27b6ee945ffb%3A0x528743d0c3e092cd!2sDenmark!5e0!3m2!1sen!2sin!4v1654442892815!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  </section> */}
  {/* map_section */}
  {/* avenique_image_section */}
  <section className="avenique_image_section">
    <div className="avenique_image_area">
      <ul>
        <li><img src="/assets/image/avenique_image_1.png" alt />
          <div className="avenique_hover_div">
            <p className="speclialist_name text-white">@Avenique</p>
            <span className="arrow_span"><a href><img src="/assets/image/arrrow.png" alt /></a> </span>
          </div>
        </li>
        <li><img src="/assets/image/avenique_image_2.png" alt />
          <div className="avenique_hover_div">
            <p className="speclialist_name text-white">@Avenique</p>
            <span className="arrow_span"><a href><img src="/assets/image/arrrow.png" alt /></a> </span>
          </div>
        </li>
        <li><img src="/assets/image/avenique_image3.png" alt />
          <div className="avenique_hover_div">
            <p className="speclialist_name text-white">@Avenique</p>
            <span className="arrow_span"><a href><img src="/assets/image/arrrow.png" alt /></a> </span>
          </div>
        </li>
        <li><img src="/assets/image/avenique_image4.png" alt />
          <div className="avenique_hover_div">
            <p className="speclialist_name text-white">@Avenique</p>
            <span className="arrow_span"><a href><img src="/assets/image/arrrow.png" alt /></a> </span>
          </div>
        </li>
        <li><img src="/assets/image/avenique_image5.png" alt />
          <div className="avenique_hover_div">
            <p className="speclialist_name text-white">@Avenique</p>
            <span className="arrow_span"><a href><img src="/assets/image/arrrow.png" alt /></a> </span>
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

export default Contact;