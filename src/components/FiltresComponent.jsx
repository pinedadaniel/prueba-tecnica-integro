import React from 'react';
import './styles/FiltresStyle.css';
class Filtres extends React.Component{
    render(){
        return(
            <React.Fragment> 
                   <div className='col-3 contMainList'>
             <div className='ContMain'>
             <div className='ContFiltres'>
             <h4 className='tittleFiltre'>Filtros</h4>
             <div className='contInput'>
             <form>
  <div className="form-group">
    <label htmlFor="exampleInputfiltre" className='tittleFiltreItem'>Ubicación</label>
    <input type="email" className="form-control" id="exampleInputfiltre" aria-describedby="location" placeholder="Todas las ubicaciones"/>
    
    <label htmlFor="exampleInputfiltre" className='tittleFiltreItem'>Medio</label>
    <input type="email" className="form-control" id="exampleInputfiltre" aria-describedby="media" placeholder="Todos los medios"/>
    
    <label htmlFor="exampleInputfiltre" className='tittleFiltreItem'>Tipo</label>
    <input type="email" className="form-control" id="exampleInputfiltre" aria-describedby="type" placeholder="Todos los tipos"/>
   
    <label htmlFor="exampleInputfiltre" className='tittleFiltreItem'>Idioma</label>
    <input type="email" className="form-control" id="exampleInputfiltre" aria-describedby="language" placeholder="Todos los idiomas"/>
   
    <label htmlFor="exampleInputfiltre" className='tittleFiltreItem'>Rango de Fechas</label>
    <input type="email" className="form-control" id="exampleInputfiltre" aria-describedby="fech" placeholder="Desde: dd / mm / yyyy"/>
    <input type="email" className="form-control" id="exampleInputfiltre" aria-describedby="fech" placeholder="Hasta: dd / mm / yyyy"/>
  </div>
</form>
</div>
</div>
            </div>
             </div>
            </React.Fragment> 
        );
    }
}
export default Filtres;