import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './ContactForm.scss' // Import CSS file for styling

const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    favorite: false,
  }

  const validationSchema = Yup.object({
    first_name: Yup.string().required('Firstname is required').min(4, 'Firstname must be at least 6 characters').max(20, 'Fistname must be at most 18 characters'),
    last_name: Yup.string().required('Lastname is required').min(4, 'Firstname must be at least 6 characters').max(20, 'Fistname must be at most 18 characters'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  })

  return (
    <div className='contact-form-container'>
      <h1 style={{ textAlign: 'center', fontSize: '1.5rem' }}>Create Contact</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div className='form-group'>
              <label htmlFor='first_name'>Firstname</label>
              <Field type='text' id='fist_name' name='first_name' className='form-control' />
              <ErrorMessage name='first_name' component='div' className='error-message' />
            </div>
            <div className='form-group'>
              <label htmlFor='lastname'>Lastname</label>
              <Field type='text' id='last_name' name='last_name' className='form-control' />
              <ErrorMessage name='last_name' component='div' className='error-message' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>email</label>
              <Field type='email' id='email' name='email' className='form-control' />
              <ErrorMessage name='email' component='div' className='error-message' />
            </div>
            <div className='form-group'>
              <label>
                <Field type='checkbox' name='favorite' /> Favorite
              </label>
            </div>
            <button type='submit' disabled={isSubmitting} className='btn btn-primary'>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
