import { useSnackbar } from "notistack";
import { useState } from "react";
import { useSelector } from "react-redux";
import { usePostAssociationRequestMutation } from "../../../../services/contactFormServices/contactFormServices";
import { AppRoutes } from "../../../../utils/consts/routes";
import { ValidateField, ValidateFields } from "../../../../utils/helper";
import KnowMoreFormConst from "../KnowMoreForm.Const";



const useFormHooks = (props) =>{
  const data = props.data;
  const currentRoute = window.location.href.split(window.location.host)[1].split("/")[1];
  const csrfToken = useSelector(state => state?.csrf?.value['csrfToken'])
  console.log(csrfToken)
  const type = currentRoute.includes(AppRoutes.FIND_TALENT.split('/')[1])
    ?KnowMoreFormConst.FormTypes.company
    :currentRoute.includes(AppRoutes.BECOME_PARTNER.split('/')[1])
    ?KnowMoreFormConst.FormTypes.educator
    :currentRoute.includes(AppRoutes.HR_SERVICE_JOIN.split('/')[1])
    ?KnowMoreFormConst.FormTypes.hr
    :KnowMoreFormConst.FormTypes.student
    
    const form = type===KnowMoreFormConst.FormTypes.company?data.form.company
      :type===KnowMoreFormConst.FormTypes.educator?data.form.educator
      :type===KnowMoreFormConst.FormTypes.hr?data.form.hr:data.form.student

    const [fields, setValues] = useState(form);
    const [checkbox, setChecked] = useState(data.checkBoxFields);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [association,formResult] = usePostAssociationRequestMutation()

    

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
    const validate =async (e) =>{
      e.preventDefault();
      console.log(fields)
      const validatedData = ValidateFields(fields);
      if(validatedData.isError){
        setValues([...validatedData.fields]);
        enqueueSnackbar(data.errorMessage,{variant: 'error',onClose:closeSnackbar,preventDuplicate:'true'})
      }else{
        if(validateCheckBox()){
          enqueueSnackbar(data.errorMessageTC,{variant: 'error',onClose:closeSnackbar,preventDuplicate:'true'})
          return
        }
        await association(KnowMoreFormConst.getJson(fields,type.description)).then((res)=>{
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

    return {fields,type,formResult,checkbox,handleInputChange,handleCheckboxChange,validate}
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