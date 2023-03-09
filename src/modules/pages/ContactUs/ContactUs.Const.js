import { Email, Message, Person, Phone } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { AppAssets } from "../../../utils/consts/app_assets";
import { AppRoutes } from "../../../utils/consts/routes";
import { getValidator } from "../../../utils/helper";



const ContactUsConst = {
    Banner:{    
        title:"We'd love to connect.",
        subtitle:"Let us know what you are looking for and we'll be happy to connect with you",
        image:AppAssets.ContactUsAssets.BANNER
    },
    ContactForm:{
        title:"Thank you for reaching out to us",
        subtitle:"If you are interested to,",
        actions:[
          {title:"explore a career opportunity with UDEN,",action:"Click here",link:AppRoutes.FIND_OPPORTUNITY},
          {title:"partner with UDEN,",action:"Click here",link:AppRoutes.BECOME_PARTNER},
          {title:"explore and hire Talent,",action:"Click here",link:AppRoutes.FIND_TALENT}
        ],
        form:{
          action:"Submit",
          fields:[
            {
              id:"name",
              label:"Full Name",
              value:"",
              error:false,
              color:'',
              helperText:'',
              size:'small',
              fullWidth:true,
              InputProps:{startAdornment:<InputAdornment position='start'><Person/></InputAdornment>},
              hint:"",
              validator:getValidator.withMinLength(3,"Name should contain atleast 3 characters")
            },
            {
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
            {
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
            {
              id:"message",
              label:"Your Message",
              value:"",
              error:false,
              color:'',
              helperText:'',
              size:'small',
              InputProps:undefined,
              hint:"Your Message",
              multiline:true,
              rows:4,
              validator:getValidator.withMinLength(20,"Message should contain at least 20 characters")
            }
              
            ]
        },
        errorMessage:"Please fill the required data",
        successMessage:"Your message was successfully sent, Thank you for contacting us.",
        loading:false
    },
    GlobalOffices:{
      title:"Global Offices",
      offices:[
        {
          country:"India",
          city:'Bengaluru',
          address:"170, Second floor, 9th main, 7th sector, HSR Layout, Bengaluru, Karnataka - 560102",
          contact:"+91 9663 085 504",
          image:AppAssets.ContactUsAssets.GLOBAL_OFFFICES.BANGALORE
        },
        {
          country:"America",
          city:'Orlando',
          address:"1317 Edgewater Drive 934 Orlando, FL 32804",
          contact:"+1(689) 205 8459",
          image:AppAssets.ContactUsAssets.GLOBAL_OFFFICES.AMERICA
        }
      ]
    }
}

export default ContactUsConst