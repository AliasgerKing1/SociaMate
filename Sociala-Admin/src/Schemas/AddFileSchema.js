import * as Yup from "yup";

let FileSchema = Yup.object({
    file_name : Yup.string().required("Please enter a file name.")
})

export default FileSchema