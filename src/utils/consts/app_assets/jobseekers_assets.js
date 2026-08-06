import Banner from 'assets/images/job-seeker-banner.png'
import TRUSTED_BRAND from  'assets/images/trust-banner.png'
import TRUSTED_BRAND_MOBILE from  'assets/images/trust-banner-mobile.png'
import WORKFLOW_MOBILE from 'assets/images/partner-work-mobile.png'
import WORKFLOW_TABLET from 'assets/images/partner-work-tablet.png'
import WORKFLOW_DESKTOP from 'assets/images/partner-work.png'
import GLOBAL_COMPANIES from 'assets/images/seeker-1.png'
import UPSKILL from 'assets/images/seeker-2.png'
import SUPPORT from 'assets/images/seeker-3.png'
import TESTIMONIAL_PANKAJ_SHARMA from 'assets/testimonial/pankaj_sharma.png'
import TESTIMONIAL_PALAK_JAIN from 'assets/testimonial/palak_jain.png'


const JobSeekersAssets = {
    Banner,
    TrustedBrand:{
        Mobile:TRUSTED_BRAND_MOBILE,
        Desktop:TRUSTED_BRAND
    },
    WorkFlow:{
        Mobile:WORKFLOW_MOBILE,
        Tablet:WORKFLOW_TABLET,
        Desktop:WORKFLOW_DESKTOP,
    },
    Features:{
        GlobalCompanies:GLOBAL_COMPANIES,
        Upskill:UPSKILL,
        Support:SUPPORT,

    },
    Testimonial:{
        PankajSharma:TESTIMONIAL_PANKAJ_SHARMA,
        PalakJain:TESTIMONIAL_PALAK_JAIN,
    }

}


export default JobSeekersAssets;