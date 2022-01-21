import React, { useEffect, useState } from "react";
import css from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";

export default ({title, info, details, textBg, textColor, backgroundColor, icon, completion, updatedBy, url}) => {
  const navigate = useNavigate();
  return ( 
    <>
          <div className="col-md-3 my-2 mb-3">
     <div className={`${css.container}`} style={{backgroundColor: backgroundColor}}>
        
          <div className={`${css.main}`}  onClick={() => {
                    navigate(`${url}`)
                  }} >
          
          <div>
            <div className="info-block" style={{padding: title !== 'Onboarding Process' ? '22px 11px': 0}}>
              <img style={{margin: '0 0 20px',width: title !== 'Onboarding Process' ? 'auto': '298px', height: title === 'Onboarding Process' && '255px'}} src={icon}  />
              <img src={completion} style={{position: 'absolute', right: '12px', top: '22px'}}/>
              <span className="block-title" style={{color: '#242524', fontSize: '20px', fontFamily: 'Helvetica', display: 'block', fontWeight: 'bold'}}>{title}</span>
              <p style={{margin: '5px 0 10px', color: '#666666', fontFamily: 'Helvetica'}}>{info}</p>
              <span className="update" style={{fontFamily: 'Helvetica',fontSize: '12px',color: '#8C8C8C'}}>{updatedBy}</span>
            </div>
            <span className="tag-details" style={{display: 'block', position: 'absolute', bottom: '0', width: '100%', padding: '20px', textAlign: 'center' , backgroundColor: textBg , color: textColor, fontSize: '16px', fontWeight: 'bold', fontFamily: 'Helvetica'}}>{details}</span>
          </div>
        </div>
          </div>
        </div>
    </>
  );
};
