import * as Yup from "yup";

// export const formSchema=Yup.object({
//     name: Yup.string().min(2).max(25).required("Please enter your name"),
//     email:Yup.string().email.required("Please enter your email"),
//     contact:Yup.string().min(11).max(15).required("Please enter your contact number")
// });


// import React from 'react'

const formSchema =()=> Yup.object({
    userName:Yup.string().min(3).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    contact:Yup.string().min(11).max(15).required("Please enter your contact number")
});

export default formSchema
