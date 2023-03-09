import { Approval, Business, Email, Engineering, Groups, Person, Phone, Place, Public, Title, Work } from "@mui/icons-material";
import { InputAdornment, Link, Typography } from "@mui/material";
import { AppAssets } from "../../../utils/consts/app_assets";
import { AppRoutes } from "../../../utils/consts/routes";
import { getValidator } from "../../../utils/helper";


const fields = {
  name:{
    id:"name",
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
  job:{
    id:"job",
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
    id:"email",
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
  contact:{
    id:"contact",
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
  companyInstitute:{
    id:"company/institute",
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
    id:"country",
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
    id:"state",
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
    id:"city",
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
  zip:{
    id:"zip",
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
  skill:{
    id:"skill",
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
  experience:{
    id:"experience",
    label:"Total Experience in Year",
    value:"",
    error:false,
    color:'',
    helperText:'',
    size:'small',
    fullWidth:true,
    InputProps:{startAdornment:<InputAdornment position='start'><Work/></InputAdornment>},
    validator:getValidator.withMinLength(1,"Please enter your experience year")
  },
  aboutUden:{
    id:"about uden",
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
          student:"Find Opportunity"
        },
        subtitle:{
          company:"Get access to pre-assessed Talent",
          educator:"Help Talent meet their aspiration by upskilling and connecting them with global companies",
          student:"Get access to global companies for opportunities and get upskilled to stay relevant",
        },
        image:{
          company:AppAssets.KnowMoreFromAssets.FIND_TALENT,
          educator:AppAssets.KnowMoreFromAssets.BECOME_PARTNER,
          student:AppAssets.KnowMoreFromAssets.FIND_OPPORTUNITY,
        },
        form:{
          action:"Submit",
          company:[
            fields.name,
            fields.job,
            fields.email,
            fields.contact,
            fields.companyInstitute,
            fields.country,
            fields.state,
            fields.city,
            fields.zip
          ],
          educator:[
            fields.name,
            fields.job,
            fields.email,
            fields.contact,
            fields.companyInstitute,
            fields.country,
            fields.state,
            fields.city,
            fields.zip
          ],
          student:[
            fields.name,
            fields.email,
            fields.contact,
            fields.country,
            fields.state,
            fields.city,
            fields.zip,
            fields.skill,
            fields.experience,
            fields.aboutUden
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
}

export default KnowMoreFormConst