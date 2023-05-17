
import { Button, Form, Input } from 'antd'
import { Field, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
const MyForm = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(50, 'Maksimum 50 simvol olmalidir!')
      .required('Bos olmaz'),
    lastName: Yup.string()
      .max(50, 'Maksimum 50 simvol olmalidir!')
      .required('Bos olmaz'),
    email: Yup.string()
      .email('Yalnis email')
      .required('Bos olmaz')
      .matches(/@code.edu.az/, '@code.edu.az ile biten mail olmalidir!'),

    gender: Yup.string(),

    password: Yup.string()
      .min(8, 'minimum 8 simvol olmalidir'),
    confirmpassword: Yup.string()
      .min(8, 'minimum 8 simvol olmalidir')
      .oneOf([Yup.ref('password')], 'Parolunuzu dogru testiqleyin!'),

  });
  return (<>
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmpassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => { console.log(values) }}
      >
        {({ errors, touched }) => (
          <Form>

            <div> Name:<Field name="firstName" />
              {errors.firstName && touched.firstName ? (
                <div style={{ color: 'red' }}>{errors.firstName}</div>
              ) : <div>_</div>}
            </div>

            <div>Surname:<Field name="lastName" />
              {errors.lastName && touched.lastName ? (
                <div style={{ color: 'red' }}>{errors.lastName}</div>
              ) : <div>_</div>}
            </div>

            <div> Email:<Field name="email" type="email" />
              {errors.email && touched.email ? <div style={{ color: 'red' }}>{errors.email}</div> : <div>_</div>}
            </div>

            <div>
            
            Kishi<Field name="gender" type="radio" />
            Qadin<Field name="gender" type="radio" />
            </div>
     

            <div>Password:<Field name="password" type="password" />
              {errors.password && touched.password ? <div style={{ color: 'red' }}>{errors.password}</div> : <div>_</div>}
            </div>

            <div>Confirm password:<Field name="confirmpassword" type="password" />
              {errors.confirmpassword && touched.confirmpassword ? <div style={{ color: 'red' }}>{errors.confirmpassword}</div> : <div>_</div>}
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </>)
}

export default MyForm