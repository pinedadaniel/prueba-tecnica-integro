import React from 'react';
import './styles/NoticeStyle.css'
import foto from '../images/foto.png';
import iconLike from '../images/like.svg'
import iconCardFlag from '../images/iconCardFlag.png'
import imgMedia from '../images/imgMedia.png'
import articleFull from '../images/ArticleFull.png'
import noticeImg from '../images/noticeImg.png'





class Notice extends React.Component{
    render(){
        return(
            <React.Fragment>
           <div className="row ">
          
               <div className="col-12 contTittleNotice">
               <h3 className='tittleNotice'> ¿El Vicentillo a prisión? Ayudó en Juicio de "El Chapo"
                 <img src={iconLike} width='18' className='iconLikek' alt="" /> <span className='numLike'>
                     143</span> </h3>
               </div>
           </div>
           <hr/>
           <div className="row ">
               <div className="col-9 contButBack ">
               <button href='www.google.com' className='butBack text-center text-light'> 
                Regresar al buscador >
                </button>
                    <div className="contImgArticle ">

                    <img src={articleFull}className='articleFull' alt=""/>
                    </div>
                    <div className="row">
                    <img src={foto}className='foto' alt=""/>
                </div>
                    <img src={noticeImg}className='fotoi' alt=""/>
                </div>
                
                  
                   
               <div className="col-3 pack ">
               <div className="card contCard ">
                            <div className="card-body">
                                <div className='row OneCont'>
                                    <ul className='ulItem'>
                                     
                                        <li>
                                            <a className='tittleCard'> Información adicional</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="card-body">
                                <a className='tittleCard'>Ubicación <img src={iconCardFlag} alt=""/> México</a>
                                
                            </div>
                            <hr />
                            <div className="card-body">
                            <a className='tittleCard'>Medio <img src={imgMedia} className='' alt=""/></a>
                            </div>
                            <hr />
                            <div className="card-body">
                            <a className='tittleCard'> Fecha del suceso - 21 / 03 / 1991</a>
                            </div>
                            <hr />
                            <div className="card-body">
                            <a className='tittleCard'> Fecha de publicación - 21 / 03 / 1991</a>
                            </div>
                            <hr />
                            <div className="card-body">
                               <ul>
                                        <li>
                                        
                                            <h4 className='tittleTiket'>Etiquetas</h4>
                                           
                                        </li>
                                        <li>
                                            <div className='contTagl'>
                                                <h4 className='tagl'> Narcotráfico </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='contTagl'>
                                                <h4 className='tagl'> Secuestro </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='contTagl'>
                                                <h4 className='tagl'> Violación </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='contTagl'>
                                                <h4 className='tagl'> Derechos Humanos </h4>
                                            </div>
                                        </li>
                                    </ul>
                              
                            </div>

                        </div>
               </div>
              
           </div>
           <div className="col-12 packing ">
         
           <img src={articleFull}className='articleFullt' alt=""/>
           </div>
          
           </React.Fragment>
        );
    }
}
export default Notice;