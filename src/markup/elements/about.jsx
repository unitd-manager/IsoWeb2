import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import aboutThumb1 from '../../images/about/image.png';
import aboutThumb2 from '../../images/about/pic-2.jpg';
import aboutThumb3 from '../../images/about/pic-3.jpg';
import ptImg1 from '../../images/shap/wave-orange.png';
import ptImg2 from '../../images/shap/circle-small-blue.png';
import ptImg4 from '../../images/shap/square-dots-orange.png';
import ptImg5 from '../../images/shap/square-blue.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				<section className="section-sp1 about-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30">
								<div className="about-thumb-area">
								<img src={aboutThumb1} alt=""/>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx">
									<h6 className="title-ext text-secondary">About Us</h6>
									<h2 className="title">Bridging the Gap to Excellence</h2>
									<p>At UnitedTechnologies, we specialize in helping businesses navigate the complexities of ISO standards. Our expert team provides tailored gap analysis and compliance solutions to bridge the gap between your current practices and certification requirements. With a proven track record across industries, we empower organizations to achieve operational excellence and meet global standards with confidence.</p>
								</div>
								<div className="row">
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature1">
											
											<div className="icon-content">
												<h4 className="ttr-title">Expertise in ISO Standards</h4>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature2">
											
											<div className="icon-content">
												<h4 className="ttr-title">Client-Centric Approach</h4>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature3">
											
											<div className="icon-content">
												<h4 className="ttr-title">Proven Success</h4>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature4">
											
											<div className="icon-content">
												<h4 className="ttr-title">Comprehensive Services</h4>
											</div>
										</div>
									</div>
								</div>
								<Link to="/ApplicationForm" className="btn btn-primary shadow">Need ISO-Click Here</Link>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate-rotate" src={ptImg5} alt=""/>
					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
					<img className="pt-img5 animate2" src={ptImg5} alt=""/>
				</section>
				
			</>
		);
	}
}

export default aboutSection;