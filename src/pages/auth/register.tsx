import { Field, Form, FormikProvider, useFormik } from 'formik'
import * as Yup from 'yup'
import { NextPage } from 'next'
import Link from 'next/link'

const Login: NextPage = () => {
  const { handleLogin } = (values) => {}

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    password_confirm: Yup.string()
      .equals([Yup.ref('password')], 'passwords must match')
      .required(),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
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
              <Link href="/auth/login">Have an account?</Link>
            </p>

            <FormikProvider value={formik}>
              <ul className="error-messages">
                {formik.touched.name && formik.errors.name && <li>{formik.errors.name}</li>}
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
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    value={formik.values.name}
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

export default Login
