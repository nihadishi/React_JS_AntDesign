import { Button, Checkbox, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({setUser,setPswd}) {
    const navigate = useNavigate()
  const [Username, setusername] = useState('')
  const [Password, setpassword] = useState('')
    const Autho =(Username,Password)=>{
      if(Username=='nihad' && Password=='123123'){
        setUser(true)
        setPswd(true)
        navigate('/tables')
      }
      else{
        alert("Wrong Username/Password")
        
      }
    }
  return (
    <>
      <Form>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input onChange={(e)=>{setusername(e.target.value)}}/>
        </Form.Item>

        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password onChange={(e)=>{setpassword(e.target.value)}}/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={()=>{Autho(Username, Password)}}>
                Submit
            </Button>
        </Form.Item>
    </Form >
    </>
  )
}

export default Login