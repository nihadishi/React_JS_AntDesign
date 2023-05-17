import { Button, Form, Input } from 'antd'
import { Field, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const MyForm = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(50, 'Max 50 character must be!')
      .required('Bos olmaz'),
    lastName: Yup.string()
    .max(50, 'Max 50 character must be!')
    .required('Bos olmaz'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return(<>
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {console.log(values)}}
      >
        {({ errors, touched }) => (
          <Form>
            
            Name:<Field name="firstName" />
            {errors.firstName && touched.firstName ? (          
              <div>{errors.firstName}</div>
            ) : null}

            Surname:<Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}

            Email:<Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
    </>)
}

export default MyForm