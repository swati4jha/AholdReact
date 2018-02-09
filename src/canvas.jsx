import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillStyle="#dddddd";
    ctx.fillRect(x, y, width, height);
    
}

class Canvas extends React.Component {
    constructor(){
        super();
        
    }
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    showMsg(self,message) {
        this.elementBox = self.getBoundingClientRect();
        var comp = React.createElement('a', {style: {position:"absolute", zIndex:999, left: this.elementBox.x+50+"px", 
        top: this.elementBox.y-40+ window.scrollY+"px",padding: "5px",borderRadius:"10px",border:"1px solid"}},message)
        ReactDOM.render(comp, document.getElementById('test'));
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, 300, 300);
        rect({ctx, x: 40, y: 40, width: 380, height: 150});
    }
    render() {
        return (
            <div className="canvas-wrap">
            <canvas ref="canvas" width="450" height="150"></canvas>
            <div className="overlay">
            <div className="row abc">{
				this.props.users.map((users,i) =>{
                    if(users.gender == "M"){
                        return (<div key={users.id.toString()} className="col-sm-6" style={{textAlign: "center"}}>
					    <button className="profileM" 
						onClick={() => this.showMsg(document.getElementById(users.id),users.info)} 
						id={users.id}></button>
						
					  </div>)
                    } else{
                        return (<div key={users.id.toString()} className="col-sm-6" style={{textAlign: "center"}}>
					    <button className="profile" 
						onClick={() => this.showMsg(document.getElementById(users.id),users.info)} 
						id={users.id}></button>
						
					  </div>)
                    }
					
					}
				)
			}
			</div></div></div>
			
			)
      }
    
}
export default Canvas
