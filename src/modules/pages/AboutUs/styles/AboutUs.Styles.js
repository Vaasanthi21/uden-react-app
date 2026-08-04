import { css } from "@emotion/react";
import { AppColors } from "utils/consts/app_colors";

export const AboutUsStyles = {
    banner: css({
        ".main-grid":{
            justifyContent:'center',
            height: "1000px",
            "@media (min-width:600px)":{
                height: "900px",
            },
            "@media (min-width:700px)":{
                height: "850px",
            },
            "@media (min-width:900px)":{
                height: "700px",
            },
            "@media (min-width:1200px)":{
                height: "650px",
            },
        },
    }),
    leadershipTeam: css({
        ".leadership-team-title":{
            color:AppColors.PRIMARY_MAIN,
            fontWeight:'bolder',
            paddingLeft:"20%",
            paddingRight:"20%",
            "@media screen and (max-width:600px)":{
                paddingLeft:"10%",
                paddingRight:"10%",
            }
        },
        ".leadership-team-subtitle":{
            fontWeight:'bold',
        }
    }),
    advisoryBoard: css({
        ".advisory-board-title":{
            color:AppColors.PRIMARY_MAIN,
            fontWeight:'bolder',
            paddingLeft:"20%",
            paddingRight:"20%",
            "@media screen and (max-width:600px)":{
                paddingLeft:"10%",
                paddingRight:"10%",
            }
        },
        ".advisory-board-subtitle":{
            fontWeight:'bold',
        }
    }),
}