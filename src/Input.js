import React from "react";
import style from './main.module.css'
export default class Input extends React.Component{
    constructor(props){
        super(props);
        
      }
    
    render (){
        
        return <input type="text" className={style.form} onChange={
            (e)=>{
                this.props.onType(e.target.value)
            }
        }
        value={this.props.inputValue}/>
    }
    componentDidUpdate(){
        
    }   
}
