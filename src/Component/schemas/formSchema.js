import * as Yup from "yup";

const formSchema =()=> Yup.object({
    userName:Yup.string().matches(/^[A-Za-z]+$/, "Please enter alphabets only").min(3).max(25).required("Please enter your name"),
    email:Yup.string().email('Please enter a valid enmail').required("Please enter your email"),
    contact:Yup.string().min(11).max(15).required("Please enter your contact number")
});

export default formSchema
