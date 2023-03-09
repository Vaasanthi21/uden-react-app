import { useSnackbar } from "notistack";
import { useState } from "react";
import { ValidateField, ValidateFields } from "../../../../utils/helper";



const useFormHooks = (props) =>{
    const data = props.data;
    const type = props.type;
    const form = type==="company"?data.form.company:type==="educator"?data.form.educator:data.form.student
    const [fields, setValues] = useState(form);
    const [checkbox, setChecked] = useState(data.checkBoxFields);
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
        if(validateCheckBox()){
          enqueueSnackbar(data.errorMessageTC,{variant: 'error',onClose:closeSnackbar,preventDuplicate:'true'})
          return
        }
        enqueueSnackbar(data.successMessage,{variant: 'success',onClose:closeSnackbar,preventDuplicate:'true'})
        handleClear();
      }
    }

    const handleClear = () => {
      fields.forEach((field) => {
        field.value = "";
        field.error = false;
      });
      checkbox.forEach((box) => {
          box.checked=false;
    });
      setValues([...fields]);
      setChecked(...[checkbox]);
    }

    
 
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    checkbox.forEach((box) => {
          if(box.id === id) {
            box.checked=checked;
          }
      });
    setChecked(...[checkbox]);
  };

  const validateCheckBox = () => {
    var error = false;
    checkbox.forEach((box) => {
      if(box.checked === false){
        error = true;
      }
    });
    return error;
  }

    return {fields,checkbox,handleInputChange,handleCheckboxChange,validate}
}

const useGlobalOfficesHooks = () => {
    const [value, setValue] = useState(1);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return {handleChange,value};
}
export const KnowMoreFormHooks = {
    useFormHooks,
    useGlobalOfficesHooks

}