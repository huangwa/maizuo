import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'

import Bdetail from '../components/Bdetail.js'

export default class extends Component {
    constructor(...rest){
        super();
        this.state={
            data:['萨拉萨','北京','深圳']
        }
    }
    render(){
        let alink =  this.state.data.map((item,index)=>{
                       
                      return <li key={index} onClick={this.toAction.bind(this,item)} >{item}</li>
             })
        

        return(
            <div>
                <div className="page b-page">
                    <h2>发现</h2>
                    <ul>
                        {alink}
                    </ul>
                </div>
                <Route path='/b/Bdetail' component={Bdetail}/>
            </div>
        )

    }
    toAction(item){
         this.props.history.push({
                pathname: '/b/Bdetail',
                state: {title:item}
            });
        
    }


}