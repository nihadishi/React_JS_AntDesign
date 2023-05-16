
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Navigate } from 'react-router-dom';
const LoginAnt = ({children,user,pswd}) => {
    
   if(user && pswd){
     return children
  }
  return <Navigate to="/login"/>

}
export default LoginAnt