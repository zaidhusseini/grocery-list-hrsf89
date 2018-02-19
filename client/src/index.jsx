import React from 'react';
import ReactDOM from 'react-dom';
import AddGrocery from './components/AddGrocery.jsx';
import GroceryList from './components/GroceryList.jsx';
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentWillMount(){
    this.retrieve();
  }

  send(item,quantity){
    $.ajax({
      url:'/grocery',
      method:'POST',
      data: JSON.stringify({item:item, quantity:quantity}),
      contentType: 'application/json',
      success: (data)=>{
        console.log('Grocery Item sent successfully',data);
        this.retrieve();
      },
      error: (data)=>{
        console.log('Error! No item was sent!', data);
      }
    });
  }

  retrieve(){
    $.ajax({
      url:'/grocery',
      method:'GET',
      success: (data)=>{
        console.log('Grocery Items received successfully',data);
        this.setState({list:data});
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