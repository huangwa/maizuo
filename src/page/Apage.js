import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'

import Adetail from '../components/Adetail.js'


export default class extends Component {
    constructor({history,location,match}){
        super();
        console.log(history);

        this.state={
            data:['星星点','史诗课','夏萨沙','福克斯']
        }

    }
    render(){
            let link = this.state.data.map((item,index)=>{
              {/* return (
                    <li key={index}>
                         <Link to={{pathname: '/a/Adetail', state: {title: item}}}>{item}</Link>
                    </li>
                ) */}

                return (
                    <li key={index}>
                         <Link to={"/a/Adetail/"+item} key={index}>{item}</Link>
                    </li>
                )

               
            })

        return(
           <div>
                <div className="page a-page">
                    <h2>首页</h2>
                    <ul>
                        {link}
                    </ul>
                </div>
                
                <Route path='/a/Adetail/:item' component={Adetail}/>
           </div>
        )

    }



}



