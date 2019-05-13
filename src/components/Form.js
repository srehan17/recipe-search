import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.getRecipe} style={{marginBottom: "2em"}} > 
            <input className="form__input" type="text" name="recipeName" placeholder="Enter recipe"/>
            <button className="form__button">Submit</button>
        </form>
    );
}

export default Form;