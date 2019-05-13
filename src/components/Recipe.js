import React from 'react';
import { Link } from 'react-router-dom';

const API_KEY ="ea5123e5278af4e8f6db17cf1b8865b4";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const request =  await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`); 
        
        const response = await request.json();

        this.setState({ activeRecipe: response.recipes[0] });
        console.log(this.state.activeRecipe);
    }
    render() {
        const recipe = this.state.activeRecipe;
        
        return (
            <div className="container">
                { this.state.activeRecipe.length !== 0 &&
                    <div className="active-recipe">
                    <img className="active-recipe__img" 
                        src={recipe.image_url} 
                        alt={recipe.title} />
                    <h3 className="active-recipe__title">
                        { recipe.title }
                    </h3>
                    <h4 className="active-recipe__publisher">
                        Publisher: <span>{ recipe.publisher }</span>
                    </h4>
                    <p className="active-recipe__website">Recipe Details:
                        <span><a href={recipe.source_url}>{recipe.source_url}</a></span>
                    </p>
                    <button className="active-recipe__button">
                        <Link to="/">Go to Home</Link>
                    </button>
                </div>
                }
            </div>
        );
    }
}

export default Recipe;