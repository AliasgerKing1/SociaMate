import * as Yup from "yup";

const AccountInfoSchema = Yup.object({
name : Yup.string().min(3, "atleast name has 3 character").max(25, "maximun name has 25 character").required("Insert Your Name"),
intrest : Yup.string().required("Select Your Intrest"),
phone : Yup.string().min(3, "atleast name has 3 character").max(25, "maximun name has 25 character").required("Insert Your phone Number"),
address : Yup.string().min(3, "atleast name has 10 character").max(50, "maximun name has 50 character").required("Insert Your Address"),
city : Yup.string().required("Select Your City"),
country : Yup.string().required("Select Your Country"),
})

export default AccountInfoSchema