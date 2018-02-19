import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      item:'',
      quantity:''
    }
  }

  setDescription(e){
    this.setState({item: e.target.value});
  }

  setQuantity(e){
    this.setState({quantity: e.target.value});
  }

  render () {
    return (<div className="addgrocery">
             <div><span>Description: </span><input type="text" value={this.state.item} onChange={this.setDescription.bind(this)}/></div>
             <div><span>Quantity: </span><input type="text" value={this.state.quantity} onChange={this.setQuantity.bind(this)}/><button id="add" onClick={()=>this.props.send(this.state.item,this.state.quantity)}>Add Item</button></div>
           </div>);
  }
}

export default AddGrocery;

