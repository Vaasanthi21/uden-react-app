import { Approval, Business, Email, Engineering, Groups, Person, Phone, Place, Public, Title, Work } from "@mui/icons-material";
import { InputAdornment, Link, Typography } from "@mui/material";
import { AppAssets } from "utils/consts/app_assets";
import { AppRoutes } from "utils/consts/routes";
import { getValidator } from "utils/helper";


const fields = {
  name:{
    id:"form-name",
    key:"name",
    label:"Full Name",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    fullWidth:true,
    InputProps:{startAdornment:<InputAdornment position='start'><Person/></InputAdornment>},
    validator:getValidator.withMinLength(2,"Name should contain atleast 3 characters")
  },
  title:{
    id:"form-job-title",
    key:"title",
    label:"Job Title",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    fullWidth:true,
    InputProps:{startAdornment:<InputAdornment position='start'><Title/></InputAdornment>},
    validator:getValidator.withMinLength(1,"Job Title is required")
  },
  email:{
    id:"form-email",
    key:"email",
    label:"Work Email",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    type:"email",
    InputProps:{startAdornment:<InputAdornment position='start'><Email/></InputAdornment>},
    hint:"Work Email",
    validator:getValidator.withPattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Please enter a valid email address")
  },
  phone:{
    id:"form-phone",
    key:"phone",
    label:"Contact Number",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    type:'tel',
    InputProps:{startAdornment:<InputAdornment position='start'><Phone/></InputAdornment>},
    hint:"Contact Number",
    validator:getValidator.withPattern(/^\d{10,15}$/i,"Please enter valid contact number")
  },
  company:{
    id:"form-company",
    key:"company",
    label:"Company/Institute",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    fullWidth:true,
    InputProps:{startAdornment:<InputAdornment position='start'><Business/></InputAdornment>},
    validator:getValidator.withMinLength(1,"Company/Institute field is required")
  },
  country:{
    id:"form-country",
    key:"country",
    label:"Country",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    fullWidth:true,
    InputProps:{startAdornment:<InputAdornment position='start'><Public/></InputAdornment>},
    validator:getValidator.withMinLength(1,"Please enter your country name")
  },
  state:{
    id:"formstate",
    key:"state",
    label:"State",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    fullWidth:true,
    InputProps:{startAdornment:<InputAdornment position='start'><Place/></InputAdornment>},
    validator:getValidator.withMinLength(1,"Please enter your state name")
  },
  city:{
    id:"form-city",
    key:"city",
    label:"City",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    fullWidth:true,
    InputProps:{startAdornment:<InputAdornment position='start'><Place/></InputAdornment>},
    validator:getValidator.withMinLength(1,"Please enter your city name")
  },
  zipcode:{
    id:"form-zipcode",
    key:"zipcode",
    label:"Zip Code",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    fullWidth:true,
    InputProps:{startAdornment:<InputAdornment position='start'><Approval/></InputAdornment>},
    validator:getValidator.withMinLength(1,"Please enter zip code")
  },
  primary_skill:{
    id:"form-primary_skill",
    key:"primary_skill",
    label:"Primary Skill",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    fullWidth:true,
    InputProps:{startAdornment:<InputAdornment position='start'><Engineering/></InputAdornment>},
    validator:getValidator.withMinLength(1,"Please enter your skills")
  },
  total_exp:{
    id:"form-total_exp",
    key:"total_exp",
    label:"Total Experience in Year",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    fullWidth:true,
    InputProps:{startAdornment:<InputAdornment position='start'><Work/></InputAdornment>},
    validator:getValidator.withMinLength(0,"Please enter your experience year")
  },
  source_of_info:{
    id:"form-source_of_info",
    key:"source_of_info",
    label:"How did you learn about UDEN",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    InputProps:{startAdornment:<InputAdornment position='start'><Groups/></InputAdornment>},
    validator:getValidator.withMinLength(20,"should contain at least 20 characters")
  }
}
const KnowMoreFormConst = {
    KnowMoreForm:{
        title:{
          company:"Find Talent",
          educator:"Become a Partner",
          student:"Find Opportunity",
          hr:"Transform Your HR Strategy with UDEN's Expertise"
        },
        subtitle:{
          company:"Get access to pre-assessed Talent",
          educator:"Help Talent meet their aspiration by upskilling and connecting them with global companies",
          student:"Get access to global companies for opportunities and get upskilled to stay relevant",
          hr:"Partner with us to unlock the full potential of your people and drive your business to greater success",
        },
        image:{
          company:AppAssets.KnowMoreFromAssets.FIND_TALENT,
          educator:AppAssets.KnowMoreFromAssets.BECOME_PARTNER,
          student:AppAssets.KnowMoreFromAssets.FIND_OPPORTUNITY,
          hr:AppAssets.KnowMoreFromAssets.TRANSFORM_YOUR_HR,
        },
        form:{
          action:"Submit",
          company:[
            fields.name,
            fields.title,
            fields.email,
            fields.phone,
            fields.company,
            fields.country,
            fields.state,
            fields.city,
            fields.zipcode
          ],
          educator:[
            fields.name,
            fields.title,
            fields.email,
            fields.phone,
            fields.company,
            fields.country,
            fields.state,
            fields.city,
            fields.zipcode
          ],
          student:[
            fields.name,
            fields.email,
            fields.phone,
            fields.country,
            fields.state,
            fields.city,
            fields.zipcode,
            fields.primary_skill,
            fields.total_exp,
            fields.source_of_info
          ],
          hr:[
            fields.name,
            fields.title,
            fields.email,
            fields.phone,
            fields.company,
            fields.country,
            fields.state,
            fields.city,
            fields.zipcode
          ],
        },
        checkBoxFields:[
          {
            id:"terms and conditions",
            label:<Typography variant='caption' >I agree to UDEN's  <Link underline="none" href={AppRoutes.TERMS}>Terms & Conditions</Link></Typography>,
            checked:false
          },
          {
            id:"privacy policy",
            label:<Typography variant='caption'>I understand UDEN will process my information as per the <Link underline="none" href={AppRoutes.PRIVACY}>Privacy Policy</Link></Typography>,
            checked:false
          }

        ],
        errorMessage:"Please fill the required data",
        errorMessageTC:"Please accept the terms and conditions and our privacy policy",
        successMessage:"Successfully submitted your information, we'll get back to you",
        loading:false
    },
    FormTypes:{
      company:Symbol("company"),
      educator:Symbol("educator"),
      student:Symbol("student"),
      hr:Symbol("hr"),
    },
    getJson:(data,type)=>{
      var temp = {}
      switch(type){
        case "educator":temp['request_type'] = 'become-partner'
        break;
        case "student":temp['request_type'] = 'find-opportunity'
        break;
        case "company":temp['request_type'] = 'find-talent-form'
        break;
        case "hr":temp['request_type'] = 'hr-services'
        break;
        default:temp['request_type'] = ''
        break;
      }
      data.forEach((field)=>temp[field.key] = field.value)
    return temp;
    }
}

export default KnowMoreFormConst