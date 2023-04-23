import style from './main.module.css'
import React from "react"
 export default  class Button extends React.Component{
    constructor(props){
        super(props)
        
    }

render(){
    return (<button type="button" className={style.button} onClick={(e)=>{this.props.onClick(e)}}> Add</button>
    
    
    
    )
}

}