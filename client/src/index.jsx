import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  send(item,quantity){
    $.ajax({
      url:'/grocery',
      method:'POST',
      data: JSON.stringify({item:item, quantity:quantity}),
      contentType: 'application/json',
      success: (data)=>{
        console.log('Grocery Item sent successfully',data);
      },
      error: (data)=>{
        console.log('Error! No item was sent!', data);
      }

    });
  }

  
  render () {
    return (<div>
             <AddGrocery send={this.send.bind(this)}/>
             <GroceryList list={this.state.list}/>
            </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));