
export const px2vw = (size = 16, width = window.innerWidth) => `${(size / width) * 100}vw`;

const getResponsiveFontSizes = (maxSize, variation) => {
    const breakpoints = [0, 600, 900, 1200, 1536];
    return breakpoints.reduce((acc, value) => ({
      ...acc,
      [`@media (min-width: ${value}px)`]: {
        fontSize: `${maxSize - ((maxSize - (maxSize * (100-variation) / 100)) * (1 - ((value - breakpoints[0]) / (breakpoints[breakpoints.length - 1] - breakpoints[0]))))}rem`,
      },
    }), { fontSize: `${maxSize}rem` });
  };
  
  export const  getTypography = () => {
    const typography = {
      h1: getResponsiveFontSizes(6, 30),
      h2: getResponsiveFontSizes(3.75, 30),
      h3: getResponsiveFontSizes(3, 30),
      h4: getResponsiveFontSizes(2.125, 30),
      h5: getResponsiveFontSizes(1.5, 30),
      h6: getResponsiveFontSizes(1.25, 30),
      subtitle1: getResponsiveFontSizes(1, 20),
      subtitle2: getResponsiveFontSizes(0.875, 20),
      body1: getResponsiveFontSizes(1, 20),
      body2: getResponsiveFontSizes(0.875, 20),
      button: getResponsiveFontSizes(0.875, 15),
      caption: getResponsiveFontSizes(0.75, 15),
      overline: getResponsiveFontSizes(0.75, 15),
    };
  
    return typography;
  }


  export const getValidator ={
    withMinLength:(length,message)=> { return {minLength:length,message:message??"Field is required"}; },
    withPattern:(pattern,message)=>{return {pattern:pattern,message:message??"Field is required"}
    }
  }

  export const ValidateField = (field) => {
    var isError = false;
      if(field.validator) {
        if(field?.validator?.pattern){
          if(!field?.validator?.pattern?.test(field?.value)){
            field.error = true;
            field.helperText = field?.validator?.message
            isError = true
          }else{
            field.error = false;
            field.helperText = ""
            field.color = 'success'
          };
        }  
        else{
          if(field.value.length > field.validator.minLength){
            field.error = false;
            field.helperText = ""
            field.color = 'success'
          }else{
            field.error = true;
            field.helperText = field?.validator?.message
            isError = true
          };
      }
    }
  return {field,isError};
  }

  export const ValidateFields = (fields) => {
    var isError = false;
    fields.forEach((field) => {
      const data = ValidateField(field)
      field = data.field
      if(data.isError) {
        isError = true
      }
  });
  return {fields,isError};
}
