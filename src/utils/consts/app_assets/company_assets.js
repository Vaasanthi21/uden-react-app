import Banner from 'assets/images/company-banner.png'
import TRUSTED_BRAND from  'assets/images/trust-banner.png'
import TRUSTED_BRAND_MOBILE from  'assets/images/trust-banner-mobile.png'
import WORKFLOW_MOBILE from 'assets/images/company-work-flow-mobile.png'
import WORKFLOW_TABLET from 'assets/images/company-work-flow-tablet.png'
import WORKFLOW_DESKTOP from 'assets/images/company-work-flow.png'
import GLOBAL_POOL from 'assets/images/company-bottom.png'
import PRE_ASSESSED_TALENT from 'assets/images/company-icon-1.png'
import GLOBAL_TALENT_POOL from 'assets/images/company-icon2.png'
import CURATED_PROGRAM from 'assets/images/company-icon3.png'
import INDEMAND_SKILL from 'assets/images/company-icon4.png'
import TESTIMONIAL_TINA_SINGH from 'assets/testimonial/tina_singh.png'
import TESTIMONIAL_POONAM_DEVI from 'assets/testimonial/poonam_devi.png'




const CompanyAssets = {
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
        GlobalPool:GLOBAL_POOL,
        PreAssessedTalent:PRE_ASSESSED_TALENT,
        GlobalTalentPool:GLOBAL_TALENT_POOL,
        CuratedProgram:CURATED_PROGRAM,
        IndemandSkill:INDEMAND_SKILL,

    },
    Testimonial:{
        TinaSingh:TESTIMONIAL_TINA_SINGH,
        PoonamDevi:TESTIMONIAL_POONAM_DEVI,
    }

}


export default CompanyAssets;