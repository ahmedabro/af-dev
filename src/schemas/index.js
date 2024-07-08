import * as yup from 'yup'

const nameRule = /^[a-zA-Z\s]+$/

export const basicSchema = yup.object().shape({
    name: yup.string().matches(nameRule, {message: "Name should only be a string!"}).required("This field is required!"),
    email: yup.string().email("Please enter a valid email!").required("This field is required!"),
    company: yup.string(),
    budget: yup.number().positive().integer("Budget should be a positive integer!"),
    message: yup.string().required("This field is required!"),
}) 
