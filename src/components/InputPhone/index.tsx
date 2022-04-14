import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const PhoneInput = ({...props }) => {
  
  const [mask, setMask] = useState("(99) 99999-9999");
  

  return (
    
      <InputMask
        {...props}
        mask={mask}
        onBlur={e => {
          if (e.target.value.replace("_", "").length === 14) {
            setMask("(99) 9999-9999");
          }
        }}
        onFocus={e => {
          if (e.target.value.replace("_", "").length === 14) {
            setMask("(99) 99999-9999");
          }
        }}

        style={{
          background:'rgba(255, 255, 255, 0.15)',
          boxShadow: '0px 5px 10px 5px #e9e8ff',
          borderRadius: '10px',
          width:'40rem',
          height:'0 auto',
          padding:'1rem',
          margin:'1rem',
          border:'none',
          outline:'none',
          color:'#3c354e',
          fontSize:'1rem',
          fontWeight:'bold',
          maxWidth:'100%',
        }}
      >
        {(inputProps: JSX.IntrinsicAttributes & 
          React.ClassAttributes<HTMLInputElement> & 
          React.InputHTMLAttributes<HTMLInputElement>) => 
          <input {...inputProps} type="tel" />}
      </InputMask>
    
  );
};

export default PhoneInput;