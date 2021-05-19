import React,{useState, useEffect} from 'react';
import S from './S';
import L from './L';
// import S from './S';
import "./login.css"
import { Redirect, Switch,Route } from 'react-router-dom';
import Test from './Test';

function MainScreen(){
	
	return(
		<div className='main__div'>
			<Switch>
			 	<Route exact path='/' component={L}/>
			 	<Route path='/s' component={S} />
				 <Route path='/t' component={Test} />
				 <Redirect to="/"/>
				 <L/>
			 </Switch>
		</div>
	);
}



export default MainScreen;