import * as Yup from 'yup';

export const signUpSchema=Yup.object({
    name:Yup.string().required("full name is requered"),
})