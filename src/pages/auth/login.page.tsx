import { Field, Form, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { NextPage } from 'next'
import { Link } from '../../components/_common/link/link'
import { api } from '../../utils/api'
import { log } from '../../utils/helpers'
import { conduitFormErrorsToString, handleError } from '../../utils/apiData'
import { ErrorResponse } from '../../utils/types'
import { useRouter } from 'next/router'

type LoginData = {
  email: string
  password: string
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email must be a valid email').required('Email is a required field'),
  password: Yup.string().required('Password is a required field'),
})

const LoginPage: NextPage = () => {
  const router = useRouter()

  const handleLogin = async (values: LoginData) => {
    const { email, password } = values

    try {
      const {
        data: { user },
      } = await api.post('/users/login', {
        user: { email, password },
      })

      if (user && user.token && user.email) {
        localStorage.setItem('@rw:user', JSON.stringify(user))
        router.push('/')
      }
    } catch (error) {
      const message = conduitFormErrorsToString(error as ErrorResponse)
      log('mesage', message)
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      await LoginSchema.validate(values)
      await handleLogin(values)
    },
  })

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link href="/auth/register">Need an account?</Link>
            </p>

            <FormikProvider value={formik}>
              <ul className="error-messages">
                {formik.touched.email && formik.errors.email && <li>{formik.errors.email}</li>}
                {formik.touched.password && formik.errors.password && <li>{formik.errors.password}</li>}
              </ul>

              <Form noValidate onSubmit={formik.handleSubmit}>
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

export default LoginPage
