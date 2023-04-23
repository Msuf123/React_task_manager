import React from "react";
import style from './main.module.css'
export default class Heading extends React.Component{
    render(){
        return <h1 className={style.heading}>To-do list!</h1>
    }
}