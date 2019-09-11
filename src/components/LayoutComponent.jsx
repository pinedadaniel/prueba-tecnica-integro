import React from 'react';
import SiderBar from './SideBarComponent';
import '../containers/styles/HomePagesStyle.css'
import btnPower from '../images/btnPower.svg';
const Layout = (props) =>{
    return(
        <React.Fragment>
       
           <SiderBar/>
           {props.children}
           <button className='btnPower'>
                <img src={btnPower} width='20' alt="More"/> 
                </button>
        </React.Fragment>
    )

}

export default Layout;