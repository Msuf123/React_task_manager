import React from "react";
import style from './main.module.css'
import Heading from "./Heading";
import Input from "./Input";
import Button from "./Button";

import Div from "./Div";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value:'',
      empty:false,
      array:[],
      number:0
    }

    this.handleClick=this.handleClick.bind(this)

  }
  delete(i){
    delete this.state.array[i]
  }
  handleClick(e){
    e.persist(e)
    if(this.state.value===''){
      alert('Please enter a task')
    }
    else{
      
    this.state.array.push({itemValue:this.state.value,id:this.state.number})
          this.setState({value:'',number:this.state.number+1})
          console.log(this.state.array)}
  }

  render() {

    return (
      <div className={style.full}>
        <Heading />
        
        <Input onType={(a)=>{
          this.setState({value:a})
        }} inputValue={this.state.value}/>
        <Button onClick={this.handleClick}/>
         {
         this.state.array.map((a)=>{
          return <Div value={a.itemValue} key={a.id.toString()}
          id={a.id} delete={(id)=>{
            let i=parseInt(id)
          this.state.array.splice(i,1)
          
          let modified_array=this.state.array
          console.log(modified_array)
          modified_array.map((a)=>{
            a.id=modified_array.indexOf(a)
            return 0
          })
          this.setState({array:this.state.array})
           
          }
              
              
          }
          
          />
        })}
        
        



      </div>
    )
  }
  componentDidMount() {
  
    
  }
  componentDidUpdate() {
    

  }
}
export default MyComponent
