import React from 'react';
import Search from "./Search";
import PanelAdd from "./PanelAdd";
import "./menu.css";

class Menu extends React.Component {
     
    constructor(props){
        super(props);
        this.state = {newItemPanel: false};
    }
    
    add = () => {
       this.setState({newItemPanel: true});
    }

    onCancel = () => {
        this.setState({newItemPanel: false});
    }
    
    render(){
    
        return (
         <div className="container">
          <div className="subcontainer">
             <div className="logo">{this.props.title}</div>
             <div className="search"><Search onsearch={this.props.onsearch}/></div>
             <div className="actions"><button onClick={this.add } className="button btn-blue">Añadir nuevo libro</button></div>
          </div>
          {(this.state.newItemPanel)? <PanelAdd oncancel={this.onCancel} onadd={this.props.onadd}/> : ""}
         </div>
      );
    }
}

export default Menu;