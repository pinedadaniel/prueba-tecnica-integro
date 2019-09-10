import React from 'react';
import btnPower from '../images/btnPower.svg';
import "./styles/HomePagesStyle.css";
import iconMore from '../images/iconMore.png';
import SearchComponent from '../components/SearchComponent'

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="row">
                <h4 className='tittleSearch'>Búsqueda de artículos </h4> 
                <button className='butarticle text-center text-light'> 
                 Agregar artículos <img src={iconMore} width='20' alt="More"/> 
                </button>
                <button className='btnPower'>
                <img src={btnPower} width='25' alt="More"/> 
                </button>
            </div>
            <SearchComponent/>
           
            </React.Fragment>
        );
    }
}
export default Home;