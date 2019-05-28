import React, {Component} from 'react';
import './App.css';
import "./header"
import Header from './header';
import FoodPic from './FoodPic';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      title: '',
      image: '',
      url: '',
      ingredients: ''
    }
  }

    componentDidMount() {
        fetch('https://blooming-thicket-86968.herokuapp.com/')
        .then(response => response.json()).then((responseJson) => {
         this.setState({ title : responseJson.title, ingredients : responseJson.ingredients, image : responseJson.image, url : responseJson.url}) 
        console.log(responseJson.id, responseJson.url, responseJson.image, 'hi')  
        })
        
    }

   

render() {
  return(
     <div>
    <div className="App-header">
      <Header />
    </div>
    <div className=''>
      <FoodPic title={this.state.title} ingredients={this.state.ingredients} image={this.state.image} url={this.state.url} />
    </div>
    <div className="Footer">
      <Footer />
    </div>
  </div>
  )
  }
   
 

  
}

export default App;
