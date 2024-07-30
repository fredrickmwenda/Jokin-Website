import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import CursorElements from '../Components/CursorElements';
import MobileMenu from '../Components/MobileMenu';
import Sidemenu from '../Components/Sidemenu';
import PopupSearchBox from '../Components/PopupSearchBox';

const documents = [
    {
      title: 'Certificate of Incorporation',
      icon: 'fal fa-file-pdf',
      link: '/path/to/brochures.pdf',
    },
    {
      title: 'CR12 Certificate',
      icon: 'fal fa-file-lines',
      link: '/path/to/document.docx',
    },
    {
      title: 'Compliance Report 2023',
      icon: 'fal fa-file-pdf',
      link: '/path/to/compliance-report-2023.pdf',
    },
    {
      title: 'KRA PIN',
      icon: 'fal fa-file-pdf',
      link: '/path/to/safety-guidelines.pdf',
    },
    {
      title: 'Tax Compliance Certificate',
      icon: 'fal fa-file-pdf',
      link: '/path/to/annual-report-2022.pdf',
    },

  ];
  

const Compliances = ({services}) => {
  return (
    <div>
    <CursorElements/>
    <Sidemenu />
    <PopupSearchBox />
    <MobileMenu />
    <Header services={services}/>
    <section className="compliance-area space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Our Compliance Documents</span>
          <h2 className="sec-title">Download Important Compliance Documents</h2>
        </div>
        <div className="row">
          {documents.map((doc, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="widget widget_download">
                {/* <h4 className="widget_title">Download</h4> */}
                <div className="donwload-media-wrap">
                  <div className="download-media">
                    <div className="download-media_icon">
                      <i className={doc.icon}></i>
                    </div>
                    <div className="download-media_info">
                      <h5 className="download-media_title">{doc.title}</h5>
                    </div>
                    <a href={doc.link} className="download-media_btn" download>
                      <i className="far fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Compliances;
