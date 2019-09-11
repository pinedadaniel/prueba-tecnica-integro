import React from 'react';
import imgLine from '../images/imgLine.png';
import "./styles/HomePagesStyle.css";
import iconMore from '../images/iconMore.png';
import SearchComponent from '../components/SearchComponent'
import FiltresComponent from '../components/FiltresComponent'
import ArticleComponent from '../components/ArticleComponent'
import ArticleComponent1 from '../components/Article1Component'
import ArticleComponent2 from '../components/Article2Component'

import lineBot from '../images/lineBot.png'

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="row Main">
                <h4 className='tittleSearch'>Búsqueda de artículos </h4> 
                <button className='butarticle text-center text-light'> 
                 Agregar artículo <img src={iconMore} alt="More"/> 
                </button>
              
            </div>
            <SearchComponent/>
            <div className='row'>
             
            <FiltresComponent/>  
                
                <div className='col-9 contMainFiltres'>
                    <div className='row'>
                
                        <img src={imgLine} className='imgLine' alt="imgLine"/>
                        <ul className='ulList'>
                            <li  className="listResult">
                            <h4 className='result'>10 de 32875 resultados de búsqueda</h4>
                            </li>
                        </ul>
                        <ul className='ml-auto'>
                            <li  className="listResult">
                            <button className='butOrder'> 
                            Ordenar por <img src={lineBot}/>
                            </button>
                            </li>
                        </ul>
                
                        <img src={imgLine} className='imgLine2' alt="imgLine"/>
                     
                    </div>
                    <div className='row '>
                        <ArticleComponent/>
                     </div>
                     <div className='row '>
                        <ArticleComponent1/>
                     </div>
                     <div className='row '>
                        <ArticleComponent2/>
                     </div>
                        
                  
                
                </div>

                
            </div>
           
            <div className='col-12 contEnd'>
                    <div className='row contBet'>
                
                        <img src={imgLine} className='imgLine' alt="imgLine"/>
                        <ul className='ulList'>
                            <li  className="listResult">
                            <h4 className='result'>10 de 32875 resultados de búsqueda</h4>
                            </li>
                        </ul>
                        <ul className='ml-4'>
                            <li  className="listResult">
                            <button className='butOrder'> 
                            Ordenar por <img src={lineBot}/>
                            </button>
                            </li>
                        </ul>
                
                        <img src={imgLine} className='imgLine2' alt="imgLine"/>
                     
                    </div>
                    <div className='row '>
                        <ArticleComponent/>
                     </div>
                     <div className='row '>
                        <ArticleComponent1/>
                     </div>
                     <div className='row '>
                        <ArticleComponent2/>
                     </div>
                        
                  
                
                </div>

            </React.Fragment>
        );
    }
}
export default Home;