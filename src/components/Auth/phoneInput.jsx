import React from 'react';
import './Style/phoneInput.css'
import axios from 'axios';
function PhoneInput(props) {
	const { value, handleChange, hashHandleChange } = props;

	const Continue = (e) => {
		axios
			.post('http://localhost:8080/api/sendOTP', {
				phone: `${value.phone}`
			})
			.then(function(res) {
				console.log(res.data.otp);
				const hash = res.data.hash;
				hashHandleChange(hash);
			});

		e.preventDefault();
		props.nextStep();
	};
	return (
		<div className='reset-container'>
			<div className=''>
				<div className=''>
					
					<div className=''>Phone number:</div>
					<div className=''>
						<input
							type="tel"
							value={value.phone}
							onChange={handleChange('phone')}
							placeholder="Enter the Phone No."
						   required
						/>
					</div>
					<button onClick={Continue}>
						Send OTP
					</button>
				</div>
			</div>
		</div>
	);
}

export default PhoneInput;
