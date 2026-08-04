import { useSnackbar } from "notistack";
import { useState } from "react";
import { usePostContactRequestMutation } from "services/contactFormServices/contactFormServices";
import { ValidateField, ValidateFields } from "utils/helper";
import ContactUsConst from "../ContactUs.Const";



const useFormHooks = (props) =>{
    const data = props.data;
    const [fields, setValues] = useState(data.form.fields);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [contact,formResult] = usePostContactRequestMutation()

    const handleInputChange = (e) => {
      const { id, value } = e.target;
      fields.forEach((field) => {
          if(field.id === id) {
              field.value= value;
              field = ValidateField(field).field
          }
      });
      setValues([...fields]);
    };
    const validate = async(e) =>{
      e.preventDefault();
      const validatedData = ValidateFields(fields);
      if(validatedData.isError){
        setValues([...validatedData.fields]);
        enqueueSnackbar(data.errorMessage,{variant: 'error',onClose:closeSnackbar,preventDuplicate:'true'})
      }else{
        await contact(ContactUsConst.getJson(fields)).then((res)=>{
          if(!res.error){
            enqueueSnackbar(data.successMessage,{variant: 'success',onClose:closeSnackbar,preventDuplicate:'true'})
            handleClear();
          }else{
            if(formResult.isError){
              enqueueSnackbar(formResult?.error?.message??"Something went wrong please try again later",{variant: 'error',onClose:closeSnackbar,preventDuplicate:'true'})
            }
          }
        })
      }
    }
    const handleClear = () => {
      fields.forEach((field) => {
        field.value = "";
        field.error = false;
      });
      setValues([...fields]);
    }
    return {fields,formResult,handleInputChange,validate}
}

const useGlobalOfficesHooks = () => {
    const [value, setValue] = useState(1);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return {handleChange,value};
}
export const ContactUsHooks = {
    useFormHooks,
    useGlobalOfficesHooks

}