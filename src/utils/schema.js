import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  name: yup.string().required('name is required'),
  email: yup.string().email('Email is required').required('email is required'),
  phone_number: yup
    .string()
    .matches(/^\d{10,12}$/, 'Phone number is not valid'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export const emailSchema = yup.object().shape({
  email: yup.string().email('Email is required').required('email is required'),
})

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email is required').required('email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
})
