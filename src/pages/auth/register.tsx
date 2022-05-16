import { Field, Form, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { NextPage } from 'next'
import { Link } from '../../components/_common/link/link'
import { api } from '../../utils/api'
import { conduitFormErrorsToString, log, getErrorMessage, handleError } from '../../utils/helpers'
import { ErrorResponse } from '../../utils/types'

type RegisterData = {
  username: string
  email: string
  password: string
  password_confirm: string
}

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required('Name is a required field'),
  email: Yup.string().email('Email must be a valid email').required('Email is a required field'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is a required field'),
  password_confirm: Yup.string()
    .equals([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is a required field'),
})

const Register: NextPage = () => {
  const handleRegister = async (values: RegisterData) => {
    const { username, email, password } = values

    try {
      const user = await api.post('/users', {
        user: { username, email, password },
      })

      log('user', user)
    } catch (error) {
      const message = conduitFormErrorsToString(error as ErrorResponse)

      // handleError(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      password_confirm: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      await RegisterSchema.validate(values)
      await handleRegister(values)
    },
  })

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link href="/auth/login">Have an account?</Link>
            </p>

            <FormikProvider value={formik}>
              <ul className="error-messages">
                {formik.touched.username && formik.errors.username && <li>{formik.errors.username}</li>}
                {formik.touched.email && formik.errors.email && <li>{formik.errors.email}</li>}
                {formik.touched.password && formik.errors.password && <li>{formik.errors.password}</li>}
                {formik.touched.password_confirm && formik.errors.password_confirm && (
                  <li>{formik.errors.password_confirm}</li>
                )}
              </ul>

              <Form noValidate onSubmit={formik.handleSubmit}>
                <fieldset className="form-group">
                  <Field
                    className="form-control form-control-lg"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Full name"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <Field
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <Field
                    className="form-control form-control-lg"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <Field
                    className="form-control form-control-lg"
                    id="password_confirm"
                    name="password_confirm"
                    type="password"
                    placeholder="Confirm Password"
                    value={formik.values.password_confirm}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </fieldset>

                <button type="submit" disabled={formik.isSubmitting} className="btn btn-lg btn-primary pull-xs-right">
                  Sign in
                </button>
              </Form>
            </FormikProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
