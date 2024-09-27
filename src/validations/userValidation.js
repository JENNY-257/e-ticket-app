import * as Yup from 'yup';

// Define the tionSchemavalidation schema
 export const signupValidationSchema = Yup.object().shape({
  name: Yup.string().required(' Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

