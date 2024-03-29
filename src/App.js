import React from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';

const API_KEY ="ea5123e5278af4e8f6db17cf1b8865b4";

class App extends React.Component {

  state = {
      recipes: []

  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call =  await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=20`); 
    
    const data = await api_call.json();
   
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes }); 
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render () {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
        Recipe Search
        </h1>
      </header>
      <Form getRecipe={this.getRecipe} />
      <Results recipes={this.state.recipes} />
    </div>
  );
}
}

export default App;
