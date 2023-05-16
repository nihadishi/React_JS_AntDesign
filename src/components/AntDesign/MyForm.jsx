
//using react-hook-form
// import { Button, Form, Input } from 'antd'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
const MyForm = () => {

  useEffect(() => {
    axios.get('https://northwind.vercel.app/api/customers')
    .then(res=>console.log(res.data))
    .catch(err=>console.log("ERROR MYFORM DATAS"))
    }, [])
  
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    axios.post('https://northwind.vercel.app/api/customers')
  }
  return (

    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Company Name: <input {...register("companyName"), { required: true }} /></div>
      <div>Contact Name: <input {...register("contactName", { required: true })} /></div>
      <div>Contact Title: <input {...register("contactTitle", { required: true })} /></div>
      <div>City: <input {...register("city", { required: true })} /></div>
      <div>Country: <input {...register("country", { required: true })} /></div>
      {errors.companyName && <span>This field is required</span>}
      
      <button type='sumbit'>ADD</button>
    </form>
    </>
    // <>
    // <Form>
    //     <Input></Input>
    //     <Input></Input>
    //     <Button>Submit</Button>
    // </Form>
    // </>
  )
}

export default MyForm