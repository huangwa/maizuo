import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Adetail extends Component{
    constructor({history,location,match}){
        super();
        console.log(match);
        this.state={
            // title:location.state.title
            title:match.params.item
        }
        
    }

    render(){

        return(
           <div className='a-detail subpage'>
               <header>
                    <button onClick={this.backAction.bind(this)}>返回</button>
                    <h3>{this.state.title}</h3> 
               </header>
           </div>


        )
    }
    backAction(){
        this.props.history.goBack();
    }



}



