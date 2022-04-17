import React, { useState } from 'react';
import { InputMaskCustom } from './styles';

const PhoneInput = ({...props }) => {
  
  const [mask, setMask] = useState("(99) 99999-9999");
  

  return (
    
      <InputMaskCustom placeholder='Your Phone*'
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
      >
        {(inputProps: JSX.IntrinsicAttributes & 
          React.ClassAttributes<HTMLInputElement> & 
          React.InputHTMLAttributes<HTMLInputElement>) => 
          <input {...inputProps} type="tel" />}
      </InputMaskCustom>
    
  );
};

export default PhoneInput;