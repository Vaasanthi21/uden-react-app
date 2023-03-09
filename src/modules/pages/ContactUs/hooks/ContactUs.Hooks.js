import { useSnackbar } from "notistack";
import { useState } from "react";
import { ValidateField, ValidateFields } from "../../../../utils/helper";



const useFormHooks = (props) =>{
    const data = props.data;
    const [fields, setValues] = useState(data.form.fields);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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
    const validate = (e) =>{
      e.preventDefault();
      const validatedData = ValidateFields(fields);
      if(validatedData.isError){
        setValues([...validatedData.fields]);
        enqueueSnackbar(data.errorMessage,{variant: 'error',onClose:closeSnackbar,preventDuplicate:'true'})
      }else{
        enqueueSnackbar(data.successMessage,{variant: 'success',onClose:closeSnackbar,preventDuplicate:'true'})
        handleClear();
      }
    }
    const handleClear = () => {
      fields.forEach((field) => {
        field.value = "";
        field.error = false;
      });
      setValues([...fields]);
    }
    return {fields,handleInputChange,validate}
}

export const ContactUsHooks = {
    useFormHooks

}