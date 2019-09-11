import React from 'react';
import './styles/SearchStyle.css'
import iconSearch from '../images/iconSearch.svg'
class Search extends React.Component{
    render(){
        return(
           <React.Fragment>
            <hr/>
            <div className='contComponentsSearch'>
               <h4 className='tittleFormSearch'>Búsqueda</h4>
               <form className="form-search content-search navbar-form" action="" method="post">
                    <div className="input-group">
                    <input id='gg' className="form-control form-text inputSearch" type="search" maxLength="100" placeholder=" Frases clave importantes para la búsqueda                                                                                                                                         &#9474;  &#xf274; Desde: dd/mm/yy - Hasta dd/mm//yy" />
                    <span className="input-group-btn">
                    <button type="submit" className="but-Search text-light"> <strong className='text-search'> BUSCAR  </strong> <span> <img src={iconSearch} width='15'/> </span></button>
                    </span>
                    </div>
                </form>
            </div>
            <div className='contComponentsSearchMovil'>
               <h4 className='tittleFormSearch'>Búsqueda</h4>
               <form className="form-search content-search navbar-form" action="" method="post">
                    <div className="input-group">
                    <input id='gg' className="form-control form-text inputSearch" type="search" maxLength="100" placeholder="Palabras Clave"/>
                    <span className="input-group-btn">
                    <button type="submit" className="but-Search text-light"> <strong className='text-search'> BUSCAR  </strong> <span> <img src={iconSearch} width='15'/> </span></button>
                    </span>
                    </div>
                </form>
            </div>

        
           </React.Fragment>
        );
    }
}
export default Search; 