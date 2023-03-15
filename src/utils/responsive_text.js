





export function resposiveFont(mul){
  return {
  fontSize:`${(mul??1)*1}vw`,


  "@media screen and (max-width:400px)":{
    fontSize: `${(mul??1)*10}px`,
  },

  "@media screen and (max-width:500px)":{
    fontSize: `${(mul??1)*1.3}vw`,
  },
  
  "@media screen and (min-width:600px)":{
    fontSize: `${(mul??1)*1.2}vw`,
  },

  "@media screen and (max-width:700px)":{
    fontSize: `${(mul??1)*1.1}vw`,
  },

  "@media screen and (min-width:800px)":{
    fontSize: `${(mul??1)*1}vw`,
  },

  "@media screen and (max-width:900px)":{
    fontSize: `${(mul??1)*1.1}vw`,
  },
  
  "@media screen and (min-width:1000px)":{
    fontSize: `${(mul??1)*1.2}vw`,
  },

  "@media screen and (max-width:1100px)":{
    fontSize: `${(mul??1)*1.3}vw`,
  },

  "@media screen and (min-width:1200px)":{
    fontSize: `${(mul??1)*1.35}vw`,
  },

  "@media screen and (max-width:1300px)":{
    fontSize: `${(mul??1)*1.4}vw`,
  },

  "@media screen and (min-width:1400px)":{
    fontSize: `${(mul??1)*20}px`,
  },
}
}
 

