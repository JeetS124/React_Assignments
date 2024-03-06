import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required('*Please enter your name'),
    email: Yup.string().min(2).max(25).required('*Please enter your email'),
    password: Yup.string().min(2).max(25).required('*Please enter your password'),
    confirm_password: Yup.string().min(2).max(25).required('*Password must match').oneOf([Yup.ref('password'), null], 'Password must match'),
});