import * as Yup from "yup";

const RegisterSchema = Yup.object({
userName : Yup.string().min(3, "atleast name has 3 character").max(25, "maximun name has 25 character").required("Insert Your Name"),
email : Yup.string().email("Email is invalid").required("Insert Your Email"),
password : Yup.string().min(8, "password should be atleast 8 character").required("Insert Your Password"),
confPass : Yup.string().required("Insert Your Confirm Password").oneOf([Yup.ref("password"), null], "Password and Confirm Password not match") 
})

export default RegisterSchema