import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/image.png"
// import testPic1 from "../../images/testimonials/pic1.jpg"
// import testPic2 from "../../images/testimonials/pic2.jpg"
// import testPic3 from "../../images/testimonials/pic3.jpg"
// import testPic4 from "../../images/testimonials/pic4.jpg"
// import testPic5 from "../../images/testimonials/pic5.jpg"
// import testPic6 from "../../images/testimonials/pic6.jpg"
import plusOrange from "../../images/shap/plus-orange.png"
import squareBlue from "../../images/shap/square-blue.png"
import circleDots from "../../images/shap/circle-dots.png"
import circleOrange2 from "../../images/shap/circle-orange-2.png"

class testimonialSection extends Component{
	
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
					
				
				<section className="section-area section-sp3 testimonial-wraper">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Testimonial</h6>
							<h2 className="title m-b0">See What Are The Clients <br/>Saying About us</h2>
						</div>
						<div className="row align-items-center">
							<div className="col-lg-6 text-center">
								<div className="thumb-wraper">
									<img className="bg-img" src={testShape} alt=""/>
									{/* <ul>
										<li data-member="1"><Link to="#"><img src={testPic1} alt=""/></Link></li>
										<li data-member="2"><Link to="#"><img src={testPic2} alt=""/></Link></li>
										<li data-member="3"><Link to="#"><img src={testPic3} alt=""/></Link></li>
										<li data-member="4"><Link to="#"><img src={testPic4} alt=""/></Link></li>
										<li data-member="5"><Link to="#"><img src={testPic5} alt=""/></Link></li>
										<li data-member="6"><Link to="#"><img src={testPic6} alt=""/></Link></li>
									</ul> */}
								</div>
							</div>
							<div className="col-lg-6">
								<Slider {...settings} className="testimonial-slide">
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Working with UTS was a game-changer for us. The ISO checklists and audit processes were seamless and incredibly thorough. Their team guided us at every step, ensuring compliance and improving our operational efficiency. Highly recommended</p>
											</div>
											<div className="client-info">
												<h5 className="name">John Deo</h5>
												<p>client</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>We struggled with meeting ISO requirements before, but UTS made it easy. Their detailed application process and precise audit reports helped us achieve ISO 9001 certification faster than expected. A truly professional service!</p>
											</div>
											<div className="client-info">
												<h5 className="name">John Deo</h5>
												<p>client</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>The checklist system provided by UTS is excellent. It simplified our compliance process and ensured we met all ISO standards with ease. The report was detailed and actionable, allowing us to address gaps effectively.</p>
											</div>
											<div className="client-info">
												<h5 className="name">John Deo</h5>
												<p>client</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>The team at UTS is incredibly knowledgeable about ISO standards. Their support in preparing for the audit was invaluable. Thanks to them, we now have ISO 45001 certification and a more sustainable operation.</p>
											</div>
											<div className="client-info">
												<h5 className="name">John Deo</h5>
												<p>client</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>From the initial application to the final audit report, UTS provided top-notch service. Their expertise in ISO compliance not only got us certified but also helped us improve our internal processes. Exceptional service</p>
											</div>
											<div className="client-info">
												<h5 className="name">John Deo</h5>
												<p>client</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
								</Slider>
							</div>	 
						</div>	 
					</div>
					<img className="pt-img1 animate1" src={plusOrange} alt=""/>
					<img className="pt-img2 animate2" src={squareBlue} alt=""/>
					<img className="pt-img3 animate3" src={circleDots} alt=""/>
					<img className="pt-img4 animate4" src={circleOrange2} alt=""/>
				</section>
				
			</>
		);
	}
}

export default testimonialSection;