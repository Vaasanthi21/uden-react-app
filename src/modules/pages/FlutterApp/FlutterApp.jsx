import React from 'react'

const FlutterApp = () => {
    var redirect = window.location.href.split(window.location.host)[1];
    var storage =  JSON.parse(window.localStorage.getItem('GetStorage'));
    if(!storage)window.localStorage.setItem('GetStorage',JSON.stringify({})); 
    if(redirect!=='/app/' || redirect!=='/app'){
      storage['webRedirect'] = redirect;
    }
    window.localStorage.setItem('GetStorage', JSON.stringify(storage));
    return (
      <>
      {window.location.replace("/app/")}
      </>
      
    )
}

export default FlutterApp