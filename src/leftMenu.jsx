import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
let textInput = null;
export default class Example extends React.Component {
    constructor(){
        super();
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }
    componentDidUpdate(self,message) {
        console.log(this.textInput)
        this.elementBox = self.getBoundingClientRect();
        //this.elementHeight = self.node.clientHeight;
        //console.log(this.elementBox)
        //var comp = React.createElement("a", {style: {position: "absolute", right: "50px", bottom: "100px"}}, {id: 'testPlace'},"ancdhck")
        var comp = React.createElement('a', {style: {position:"absolute", zIndex:999, left: this.elementBox.x+40+"px", 
        top: this.elementBox.y-50+ window.scrollY+"px",padding: "5px",borderRadius:"10px",border:"1px solid"}},message)
        ReactDOM.render(comp, document.getElementById('test'));
    }
    
  render() {
    
    return (
      <div>
        
        <Nav vertical>
        {
            this.props.users.map((users,i) =>{
            return <NavItem key={users.id.toString()} className="center">
            <NavLink href="#"  ref={(input) => { this.textInput = input; }} className="circle" onClick={() => this.componentDidUpdate(document.getElementById(users.id),users.message)}>
            {users.name}</NavLink>
          </NavItem>
          })
        }
        </Nav>
        
      </div>
    );
  }
}