import * as Yup from "yup";

let FolderSchema = Yup.object({
    folder_name : Yup.string().required("Please enter a folder name.")
})

export default FolderSchema