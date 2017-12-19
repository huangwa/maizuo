import React, { Component } from 'react'
import {BrowserRouter, Route, Router, NavLink,Link, Redirect, Switch } from 'react-router-dom'

import Apage from './page/Apage.js'
import Bpage from './page/Bpage.js'
import Cpage from './page/Cpage.js'


export default class App extends Component{
    constructor(){
        super();

    }
    render(){

        return(
           <BrowserRouter>
                <div id="root">
                    <Switch>
                        <Route path='/' exact component={Apage}></Route>
                        <Route path='/a' component={Apage}></Route>
                        <Route path='/b' render={({history,location,match})=>{
                            return <Bpage history={history}/>
                        }}></Route>
                        <Route path='/c' component={Cpage}></Route>    
                        <Route component={Apage}></Route>
                    </Switch>

                    <nav className="tabs one-top-border">
                        <NavLink to='/a'>首页</NavLink>
                        <NavLink to='/b'>发现</NavLink>
                        <NavLink to='/c'>我的</NavLink>
                    </nav>
                </div>
                
           </BrowserRouter>
        )
    }
}

