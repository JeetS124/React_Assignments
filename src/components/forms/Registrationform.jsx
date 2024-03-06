import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../../schemas';

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
};


const Registrationform = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log('~ Registration.jsx ~ line-8 ~ Registration ~ values', values);
            action.resetForm();
        },
    });
    console.log('~ Registration.jsx ~ line-21 ~ Registration ~ error', errors);
    // console.log(errors.name);
    return (
        <div>
            <form onSubmit={handleSubmit} className=' needs-validation' noValidate>
                <div className="container d-flex justify-content-center align-item-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="border rounded-5 border-light my-5 p-5 shadow">
                            <h1 className='fs-3 text-center mt-3 mb-5'>Welcome to Formik Tutorial</h1>
                            <div className="col-sm my-3">
                                <div className="form-group row">
                                    <label htmlFor="name">Name
                                        <input
                                            className='form-control my-2'
                                            name='name'
                                            id='name'
                                            type="text"
                                            autoComplete='off'
                                            placeholder='Enter your name'
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </label>
                                    {errors.name && touched.name ? (
                                        <div style={{ color: 'red', fontSize: '12px' }}>
                                            {errors.name}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-sm my-3">
                                <div className="form-group row">
                                    <label htmlFor="name">Email
                                        <input
                                            className='form-control my-2'
                                            name='email'
                                            id='email'
                                            type="email"
                                            autoComplete='off'
                                            placeholder='Enter your email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </label>
                                    {errors.email && touched.email ? (
                                        <div style={{ color: 'red', fontSize: '12px' }}>
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-sm my-3">
                                <div className="form-group row">
                                    <label htmlFor="name">Password
                                        <input
                                            className='form-control my-2'
                                            name='password'
                                            id='password'
                                            type="password"
                                            autoComplete='off'
                                            placeholder='Password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </label>
                                    {errors.password && touched.password ? (
                                        <div style={{ color: 'red', fontSize: '12px' }}>
                                            {errors.password}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-sm my-3">
                                <div className="form-group row">
                                    <label htmlFor="name">Confirm Password
                                        <input
                                            className='form-control my-2'
                                            name='confirm_password'
                                            id='confirm_password'
                                            type="password"
                                            autoComplete='off'
                                            placeholder='Confirm Password'
                                            value={values.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </label>
                                    {errors.confirm_password && touched.confirm_password ? (
                                        <div style={{ color: 'red', fontSize: '12px' }}>
                                            {errors.confirm_password}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <a href='#' className='py-2 cursor-pointer' >Already have an account?</a>
                                <button className='btn btn-outline-primary mx-3'>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default Registrationform
