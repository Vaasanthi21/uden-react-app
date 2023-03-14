import { MoreHoriz } from "@mui/icons-material";
import { AppAssets } from "../../../utils/consts/app_assets";
import { AppRoutes } from "../../../utils/consts/routes";



const HRServicesConst = {
    Banner:{
        title:"HR Solutions that Drive Your Business Forward",
        subtitle:"Partner with UDEN to Unleash the Full Potential of Your People and Drive Your Business to Greater Heights",
        image:AppAssets.HRServicesAssets.Banner,
        action:{
            name:"Get Started Now",
            href:AppRoutes.HR_SERVICE_JOIN
        },
    },
    TrustedBrand:{
        desktop:AppAssets.HRServicesAssets.TrustedBrand.Desktop,
        mobile:AppAssets.HRServicesAssets.TrustedBrand.Mobile,
    },
    WorkFlow:{
        title:"HR Services Offerings of UDEN",
        images:AppAssets.HRServicesAssets.WorkFlow
    },
    Features:{
        title:"UDEN's Total HR Solutions for Your Organization",
        subtitle:"Unlock the Full Potential of Your Organization with UDEN's Comprehensive HR Solutions",
        image:AppAssets.HRServicesAssets.Features.HRServices,
        features:[
            {
                title:"Vision, Mission and Values Statement",
                // description:"UDEN has expertise in developing the vision, mission and values statement for the organizations. This statement helps build employer brand, defines the purpose of the organization, and helps build employee loyalty. It helps employee understand the organizations path to success. We do this exercise with intense discussions with the leadership team/CEOs and other relevant stakeholders.",
                description:"A strong vision, mission, and values statement is the foundation of any successful organization. UDEN can work with you to develop a clear and compelling statement that aligns with your company's goals and values. This statement will guide your strategic direction, provide clarity to your employees, and create a strong brand identity. Our process involves intensive discussions with the leadership team and other relevant stakeholders to ensure that the statement reflects the aspirations and values of the organization.",
                image:AppAssets.HRServicesAssets.Features.Vision
            },
            {
                title:"Performance Management",
                // description:"UDEN helps organization to define and design its performance philosophy and process. In the highly volatile talent market, having right performance management process, metrics and philosophy helps organization to retain, develop top talent. It also helps those employees who are finding it difficult to contribute to the organization. We can define the goals, targets, scorecard for leadership by translating the organization’s strategy to the performance philosophy and metrics.",
                description:" A well-designed performance management process can help your organization retain top talent, develop employees, and drive business success. UDEN can work with you to define your performance philosophy and metrics, design a performance management process, and align employee goals with organizational objectives. Our process involves defining the goals, targets, and scorecards for leadership by translating the organization's strategy to the performance philosophy and metrics.",
                image:AppAssets.HRServicesAssets.Features.PerformanceManagement
            },
            {
                title:"HR Operations",
                // description:"UDEN will develop complete onboarding process that will emphasize on organizations values, eliminate the unproductive transactions, and optimize the process. Having strong onboarding process will help create loyalty and develop employer brand.",
                description:"HR operations are critical to the success of any organization, but they can be time-consuming and resource-intensive. UDEN can help optimize your HR operations by streamlining processes, eliminating unproductive transactions, and enhancing the employee experience. Our process involves developing a complete onboarding process that emphasizes your organization's values and optimizes the process. A strong onboarding process will help create loyalty and develop your employer brand",
                image:AppAssets.HRServicesAssets.Features.HROperations
            },
            {
                title:"Policy and Compliances",
                description:" Developing and implementing comprehensive employee policies can be complex, time-consuming, and legally challenging. UDEN can work with you to create and roll out world-class employee policies that cover workplace issues, employee benefits, ESG, and CSR. Our expertise, along with input from relevant stakeholders, will ensure that the policies are compliant with local laws and regulations",
                image:AppAssets.HRServicesAssets.Features.Policy
            },
            {
                title:"Career Pathing",
                // description:"One of the key attribute that the global talent is looking for his/her career path and growth in the organization. UDEN with its methodology, will help create the career paths that promote meritocracy and focuses on identifying the talent early and help grow faster in the organization.",
                description:"Employees are looking for opportunities for career growth and development. UDEN can help you create career paths that promote meritocracy, identify top talent early on, and help employees grow faster in the organization. Our methodology involves identifying critical roles and competencies, creating a competency framework, and designing career paths that align with your organization's goals and values.",
                image:AppAssets.HRServicesAssets.Features.CareerPathing
            },
            {
                title:"Employee Engagement",
                // description:"UDEN can design and run various employee engagement events that would help build team bonding, destress employees and make a fun work environment",
                description:"Engaged employees are more productive, motivated, and loyal to their organization. UDEN can help you design and run engaging events that foster team bonding and create a positive work culture. Our process involves identifying the needs and preferences of your employees, creating a fun work environment, and organizing team-building activities",
                image:AppAssets.HRServicesAssets.Features.EmployeeEngagement
            },
            {
                title:"Campus to Corporate Program",
                // description:"With its expertise and industry experience, UDEN can help in conceptualising, designing, and executing a complete Campus to Corporate program. This certainly helps the growing organization develop best in class work culture, develop internal talent, manage labour cost effectively and significantly.",
                description:"Recruiting and retaining top talent can be a challenge for growing organizations. UDEN can help you conceptualize, design, and execute a comprehensive Campus to Corporate program. Our expertise and industry experience can help you develop a best-in-class work culture, develop internal talent, and effectively manage labor costs.",
                image:AppAssets.HRServicesAssets.Features.CampusToCorporate
            }
        ]
    },
    Testimonials:{
        title: "Testimonials",
        testimonials:[
            {
                id: 1,
                image: AppAssets.CompanyAssets.Testimonial.TinaSingh,
                message: 'We have been working closely with the team at UDEN for many years now. From the scoping of our requirements to the completion of hiring, the team has consistently provided prompt and quality services. UDEN takes care of the small, but important details including candidate vetting, interview documents and then the offer itself. I look forward to work with their team immensely for many years to follow.',
                name: 'Tina Singh',
                designation:'Admin Manager',
                company: 'Bravvura Digital Pvt. Ltd.'
            },
            {
                id: 2,
                image: AppAssets.CompanyAssets.Testimonial.PoonamDevi,
                message: 'Working with UDEN and the entire team has been a journey which is smooth and professional. They have always helped us find right resources for our team in all right manner. Thank you team for all the support always.',
                name: 'Poonam Devi',
                designation:'Senior HR Recruiter',
                company: 'bluCognition Pvt Ltd'
            }
        ]   
    },
    KnowMore:{
        title: "Join the HR Revolution with UDEN - Elevate Your People , Elevate Your Business",
        buttonText: "Get Started Now",
        href: AppRoutes.HR_SERVICE_JOIN,
        icon: <MoreHoriz/>
    }
}

export default HRServicesConst