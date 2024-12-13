import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


// Import Images
import lineCircleBlue from "../../images/shap/line-circle-blue.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";
import waveBlue from "../../images/shap/wave-blue.png";
import squareRotate from "../../images/shap/square-rotate.png";
import api from '../../constants/api';

const ServicesSection = () => {
	const [quizzIds, setQuizzIds] = useState([]);
	const [reports, setReports] = useState([]);
	const [companyName, setCompanyName] = useState('');
  
	const fetchPreviousAnswers = () => {
	  const user = JSON.parse(localStorage.getItem('user'));
	  
	  if (user && user.contact_id) {
		setCompanyName(user.company_name);
		api.post('/score/getScoreManageByCompanyId', { company_id: user.company_id })
		  .then((res) => {
			setQuizzIds(res.data.data);
		  })
		  .catch(() => { /* Handle error */ });
		  
		api.post('/score/getGapReportByCompanyId', { company_id: user.company_id })
		  .then((res) => {
			setReports(res.data.data);
		  })
		  .catch(() => { /* Handle error */ });
	  }
	};
  
	useEffect(() => {
	  fetchPreviousAnswers();
	}, []);
    return (
      <>
        <section className="section-area section-sp1 service-wraper">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5 mb-30">
              <div className="heading-bx">
                <h6 className="title-ext text-secondary">Our Services</h6>
                <h2 className="title">
                ISO Automation Tool Services 
                </h2>
                <p>
                Streamline your ISO compliance journey with our cutting-edge automation tool designed to simplify, automate, and optimize every step of the process. Our services ensure your organization achieves and maintains ISO certification with ease, efficiency, and confidence.
                </p>
              </div>
              <Link to="/ApplicationForm" className="btn btn-secondary btn-lg shadow">
             Need ISO:Apply Here
              </Link>
            </div>
            <div className="col-xl-8">
              <div className="row">
                {/* Card 1: Application Form */}
                <div className="col-lg-6 col-md-6 mb-4">
                  <div
                    className="feature-container feature-bx2 feature1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      textAlign: "center",
                      padding: "20px",
                      boxSizing: "border-box",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      background: "#fff",
                      width: "85%", // Adjust the width here
                      margin: "0 auto", // Center the box
                    }}
                  >
                      <h3 className="ttr-title">Why Choose Our ISO Automation Tool? </h3>
                      <ul>
                        <li>Efficiency: Save time and reduce manual efforts with automated processes.</li>
                        <li>Accuracy: Minimize errors with reliable, standardized workflows.</li>
                        <li>Scalability: Adaptable to meet the needs of businesses of any size or industry.</li>
                          <li>Compliance Confidence: Stay audit-ready and compliant year-round.</li></ul>
                      <Link to="/ApplicationForm" className="btn btn-primary light">
                        Need Iso - Apply Here
                      </Link>
                  </div>
                </div>

                {/* Card 2: ISO Checklists */}
                <div className="col-lg-6 col-md-6 mb-4">
                  <div
                    className="feature-container feature-bx2 feature2"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      textAlign: "center",
                      padding: "20px",
                      boxSizing: "border-box",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      background: "#fff",
                      width: "85%", // Adjust the width here
                      margin: "0 auto", // Center the box
                    }}
                  >
              
                      <h3 className="ttr-title">Benefits  of ISO Automation Tool</h3>
                      <ul>
                        <li>Automated Document Management.</li>
                        <li>Real-Time Audit Management.</li>
                        <li>Compliance Tracking and Monitoring.</li>
                        <li>Policy and Procedure.</li>
                        <li>Integration and Customization.</li>
                        <li>Reporting and Analytics.</li>
                        </ul>                  
                        <Link to="/ApplicationForm" className="btn btn-primary light">
                        Need Iso - Apply Here
                      </Link>
                  </div>
                </div>

             
              </div>
            </div>
          </div>
          <img className="pt-img1 animate-rotate" src={lineCircleBlue} alt="" />
          <img className="pt-img2 animate2" src={squareDotsOrange} alt="" />
          <img className="pt-img3 animate-wave" src={waveBlue} alt="" />
          <img className="pt-img4 animate1" src={squareRotate} alt="" />
        </section>
      </>
    );
  }


export default ServicesSection;
