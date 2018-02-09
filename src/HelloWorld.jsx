import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import Example from './leftMenu.jsx'
import Canvas from './canvas.jsx'
class App extends React.Component {
	constructor(){
        super();
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        
    }
	render(){
		return (<div className="row abc">{
			
			this.props.users.map((users,i) =>{
				if(i%2==0){
					console.log(i);
					return (<div className="col-sm-6" key={users.id.toString()}><Canvas   
					users={this.props.users.slice(i,i+2)}/></div>)
				}
				
				}
			)
		}
		</div>)
		
		
	}



componentDidUpdate(self,message) {
   
	this.elementBox = self.getBoundingClientRect();
	//this.elementHeight = self.node.clientHeight;
	console.log(this.elementBox)
	//var comp = React.createElement("a", {style: {position: "absolute", right: "50px", bottom: "100px"}}, {id: 'testPlace'},"ancdhck")
	var comp = React.createElement('a', {style: {position:"absolute", zIndex:999, left: this.elementBox.x+40+"px", 
	top: this.elementBox.y-40+ window.scrollY+"px",padding: "5px",borderRadius:"10px",border:"1px solid"}},message)
	ReactDOM.render(comp, document.getElementById('test'));
}
  

}

const data=
            [   
                {name:"Swati",
                 id:"sjha",
                 message:"Hi, I am swati",
				 info:"Swati, from Ahold.",
				 gender:"F",
				 table: 1   
                },
				{name:"Jake",
				 id:"jake",
				 message:"Hi, I am Jake",
				 info:"Jake, from Ahold.",
				 gender:"M",
				 table: 3      
				},
                {name:"Jazzy",
                    id:"jazzy",
                    message:"Hi, I am Jazzy",
					info:"Jazzy, from Ahold.",
					gender:"F",
					table: 1       
                   },
                   {name:"Shane",
                    id:"shane",
                    message:"Hi, I am Shane",
                    info:"Shane, from Ahold.",
					gender:"M",
					table: 2        
                   },
                   {name:"Seth",
                    id:"seth",
                    message:"Hi, I am Seth",
					info:"Seth, from Ahold.",
					gender:"M",
					table: 3      
                   },
                   {name:"Musa",
                    id:"musa",
                    message:"Hi, I am Musa",
					info:"Musa, from Ahold.",
					gender:"M",
					table: 4      
                   },
                   {name:"Ankita",
                    id:"ankita",
                    message:"Hi, I am Ankita",
					info:"Ankita, from Ahold.",
					gender:"F",
					table: 2      
                   }
            ]
render(<App users={data}/>, document.getElementById('app'));
render(<Example users={data} />, document.getElementById('left'));


