
import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string()
          .min(8, 'Password must be at least 8 characters')
          .max(20, 'Password must not exceed 20 characters')
          .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm password is required'),
    fullname: yup
        .string()
        .required('Name is required')
        .matches(/^[A-Za-z][A-Za-z\s]*$/, 'Name can only contain letters and spaces, and the first character must be a letter')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot exceed 50 characters'),
    phone: yup.string()
        .matches(/^\d{10}$/, 'Phone must be exactly 10 digits long')
        .test('no-spaces', 'Phone must not contain spaces', (value: string | undefined) => {
        if (value) {
            return !/\s/.test(value);
        }
        return true;
        })
        .required('Phone is required'),
    address: yup.string().required('Address is required'), 

  })

