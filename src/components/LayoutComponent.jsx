import React from 'react';
import SiderBar from './SideBarComponent';


const Layout = (props) =>{
    return(
        <React.Fragment>
       
           <SiderBar/>
           {props.children}
 
        </React.Fragment>
    )

}

export default Layout;