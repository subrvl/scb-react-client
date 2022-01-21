import React, { useState } from "react";
import css from "./Otp.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default ({ setHeader }) => {
  const url = "http://localhost:8080/";
  const [otp, setOtp] = useState("");
  let navigate = useNavigate();
  let otpStatus = false;

  const generateOtp = async () => {
    try {
      const response = await axios.get(url + "otp/user1");
      const { otpSendStatus } = await response.data;
      otpStatus = otpSendStatus;
    } catch(error) {
      alert('Error Occured - ', error);
    }
  };

  const onSubmit = async () => {
    if (!otp || isNaN(otp)) {
      alert('OPT is invalid')
      return;
    }
   
    // const response = await axios.post(url + "validateOtp", {
    //   userId: "user1",
    //   oneTimeOtp: otp,
    // });
    // const { validationStatus } = await response.data;
    // if (!validationStatus) {
    //   alert('OPT is invalid');
    //   return;
    // }
    navigate("/home");
  };
  return (
    <div className={`${css.containerpart}`}>
      <div className={`${css.otpPart}`}>
        <div className={`${css.maincard}`}>
          <img className={`${css.img}`} src="/icons/scb-logo.png" />
          <h6 className={`${css.headline}`}>2FA Password</h6>
          <p className={`${css.para1}`}>
            2FA stands for Two Factor Authentication is a security system that
            requires two separate,distinct forms of identification in order to
            access something.
          </p>
          <a onClick={generateOtp} href="#" className={`${css.otplabel}`}>
            Click to generate OTP
          </a>
          <div className={`${css.para2}`}>
            This will be sent to the number associated with your account
          </div>
          <div className={`${css.otpTop}`}>
            <input
              value={otp}
              className={`${css.inputText}`}
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <span>
            00 : 00 to <a onClick={generateOtp} href="#">resend OTP</a>
          </span>
          <div className={`${css.ctrl}`}>
            <button className={`${css.cancel}`}>Cancel</button>
            <button onClick={onSubmit} className={`${css.submit}`}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
