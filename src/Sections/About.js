import React from 'react'
import '../scss/About.scss'
import { Container, Col, Row, Image } from 'react-bootstrap'

const About = () => {
	return(
	// <div className="mt-md-5 mb-md-5">
		
		<Container>
			<Row>
				<Col xs={4}>
					<img src={require("../components/images/ElectronicAaron.jpg")} alt="Profile Avatar" className='responsive'  />
				</Col>
				<Col>
					<p>
						My name is Aaron Shepherd and I'm her for your technical needs.
						I am an Alumni of Oklahoma State with a Bachelors of Science in
						Electrical Engineering Technology. In the course of my university
						career I learned a couple of prominent programming languages such as 
						Java and C. Since graduating I have expanded on that knowledge by
						adding Web development languages such as CSS and React. I am also an
						App developer specializing in React Native to build apps
						for both Android and iOS at a quicker pace. Inquire below to schedule
						a consultation and see what I can do for you.
					</p>
				</Col>
			</Row>
		</Container>

	)
}

export default About