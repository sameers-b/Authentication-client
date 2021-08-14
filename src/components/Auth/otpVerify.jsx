import React, { useState } from 'react';
import './Style/phoneInput.css'
import axios from 'axios';

const OtpVerify = (props) => {
	axios.defaults.withCredentials = true;

	const [ error, setError ] = useState({
		error: '',
		success: ''
	});
	const { value, handleChange } = props;
	const back = (e) => {
		e.preventDefault();
		props.prevStep();
	};

	const confirmOtp = () => {
		 axios
		 .post('http://localhost:8080/api/verifyOTP', {
				phone: `${value.phone}`,
				hash: `${value.hash}`,
				otp: `${value.otp}`,
				withCredentials: true
			})
			.then((res)=> {
				console.log(res.data);
				window.location.reload();
			})
			.catch((error)=> {
				console.log('error.response.data');
				setError({ ...error, error: 'error.response.data.msg' });
			});
	};
	return (
		<div className='otp-container'>
			<div className=''>
				<div className=''>
					<div className=''>{error.error}</div>
					<div className=''>{error.success}</div>
					<div className=''>Enter One Time Password:</div>
					<div className=''>
						<input
							type="tel"
							value={value.otp}
							onChange={handleChange('otp')}
							placeholder="Enter the 6 digits OTP"
							// className={styles.input}
						/>
					</div>
					<button onClick={back} className=''>
						Back
					</button>
					<button onClick={confirmOtp} className=''>
						Confirm OTP
					</button>
				</div>
			</div>
		</div>
	);
}

export default OtpVerify;
