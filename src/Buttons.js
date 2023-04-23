import style from './main.module.css'
import React from 'react'
export default class Button extends React.Component{
    constructor(props){
        super(props)
        this.delete=this.delete.bind(this)
    }
    delete(e){
        e.persist()
        this.props.delete(e.target.id)
    }
    render(){
        return(
            <div>
                
                <button className={style.cross} id={this.props.id} onClick={this.delete}>&times;</button>
            </div>
        )
    }
}