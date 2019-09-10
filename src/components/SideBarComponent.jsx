import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/SiderBarStyle.css";
import Brand from '../images/brand.png';
import iconSearch from '../images/iconSearch.svg';
import iconHeart from '../images/iconHeart.svg';
import iconLabel from '../images/iconLabel.svg';
import iconUser from '../images/iconUser.svg';


class sideBar extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div class="sidebar">
                    <div className="contBrand text-center">
                        <img className='brand' src={Brand} width='45' alt="Brand..." />
                    </div>
               
                    <Link class="active" to="/">
                        <img src={iconSearch} width='23' alt="search..." />
                    </Link>
                    <Link to="/OnePage">
                        <img src={iconHeart} width='23' alt="search..." />
                    </Link>
                    <Link to="/TwoPage">
                        <img src={iconLabel} width='23' alt="search..." />
                    </Link>
                    <Link to="/ThreePage">
                        <img src={iconUser} width='23' alt="search..." />
                    </Link>
             
                </div>
            </React.Fragment>
        );
    }
}
export default sideBar;