import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './LayoutComponent';
import Home from '../containers/HomePages';
import OnePage from '../containers/OnePages';
import TwoPage from '../containers/TwoPages';
import ThreePage from '../containers/ThreePages';
import 'bootstrap/dist/css/bootstrap.css'; 

const App = () => {
  return (
      
      <BrowserRouter>     
            <Layout>
              <Switch>
                  <Route exact path = "/" component={Home}/>
                  <Route exact path = "/OnePage" component={OnePage}/>   
                  <Route exact path = "/TwoPage" component={TwoPage}/>    
                  <Route exact path = "/ThreePage" component={ThreePage}/>             
              </Switch> 
          </Layout>  

       
             
      </BrowserRouter>
  );
}
export default App;
