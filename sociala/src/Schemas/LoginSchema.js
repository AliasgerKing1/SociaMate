import * as Yup from "yup";

const LoginSchema = Yup.object({
email : Yup.string().email("Email is invalid").required("Insert Your Email"),
password : Yup.string().required("Insert Your Password"),
})

export default LoginSchema