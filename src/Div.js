import React from "react";
import style from './main.module.css'
import Button from "./Buttons";
export default class Div extends React.Component{
render(){
  return (
  <div className={style.list_div}>
  <h1 className={style.content}>&#10061; {this.props.value}</h1>
  <Button d={this.props.onClickDel} id={this.props.id} delete={this.props.delete}/>
  </div>)
}
}