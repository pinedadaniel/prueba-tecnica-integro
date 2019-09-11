import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ArticleStyle.css'
import iconCard1 from '../images/iconCard1.png'
import iconCardFlag from '../images/iconCardFlag.png'
import iconLike from '../images/like.svg'
import stars from '../images/stars.png'
import date from '../images/imgDate.png'
import date1 from '../images/imgDate1.png'
import imgParagraph from '../images/paragraph.png'




export default class Article extends React.Component {
    render() {
        return (
            <React.Fragment>
          
                <Link to='/NoticePage' className='contMain'>
                    <div className='contCardMain'>
                        <div className="card contCard">
                            <div className="card-body">
                                <div className='row OneCont'>
                                    <ul className='ulItem'>
                                        <li>
                                            <img src={iconCard1} alt="icon" />
                                        </li>
                                        <li>
                                            <img src={iconCardFlag} alt="icon" className='iconCard' />
                                        </li>
                                        <li>
                                            <a className='tittleCard'> Jalisco - Guadalajara</a>
                                        </li>
                                    </ul>
                                    <ul className='ml-auto'>
                                        <li>
                                            <img src={iconLike} width='18' className='iconLike' alt="" /> <span className='numLike'>143</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <hr />
                            <div className="card-body">
                                <a className='tittleCard'> ¿El Vicentillo a prisión? Ayudó en Juicio de "El Chapo"</a>
                                <div className='row TwoCont'>
                                    <ul>
                                        <li>
                                            <div className='Newspaper'>
                                                <h4 className='textNewspaper'>El imparcial </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <img src={stars} alt="icon" className='imgStars'/>
                                        </li>
                                        <li>
                                        <img src={date} alt="icon" className='imgStars'/>
                                        </li>
                                        <li>
                                            <img src={date1} alt="icon" className='imgStars'/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className="card-body">
                                <img src={imgParagraph} className='imgParagraph' alt=""/>
                            </div>
                            <hr />
                            <div className="card-body">
                               <ul>
                                        <li>
                                        
                                            <h4 className='tittleTikets'>Etiquetas</h4>
                                           
                                        </li>
                                        <li>
                                            <div className='contTag'>
                                                <h4 className='tag'> Narcotráfico </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='contTag'>
                                                <h4 className='tag'> Secuestro </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='contTag'>
                                                <h4 className='tag'> Violación </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='contTag'>
                                                <h4 className='tag'> Derechos Humanos </h4>
                                            </div>
                                        </li>
                                    </ul>
                              
                            </div>

                        </div>
                    </div>
                </Link>
          
            
            
       
         </React.Fragment>
        );
    }
}