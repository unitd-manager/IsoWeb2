import React, { Component } from 'react';

class appointmentForm extends Component{
	render(){
		return(
			<>
				
				<div className="appointment-form form-wraper">
					<h3 className="title">Book Appointment</h3>
					<form action="#">
					
						
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Your Name"/>
						</div>
						<div className="form-group">
							<input type="number" className="form-control" placeholder="Mobile"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Your Email"/>
						</div>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="ISO STANDRARD"/>
						</div>
						<button type="submit" className="btn btn-secondary btn-lg">Apply Now</button>
					</form>
				</div>
			
			</>
		);
	}
}

export default appointmentForm;