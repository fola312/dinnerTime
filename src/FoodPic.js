import React from 'react';



const FoodPic = ({title, url, ingredients, image}) => {
     return (
        <div>
            <a href={url} title="recipeSteps"><h1 className='tc'>{title}</h1></a>
            <div className='dt mw6 center pv4 pv5-m pv6-ns'>
              <div className='dtc v-mid'>
              <img alt='nomnom' src={image}/>
              </div>
              <div className='dtc v-mid pl3'>
                <h2>Recipe</h2>   
                <p className=''>Ingredients: {ingredients} </p>   
              </div>
            </div>
        </div>
        
    );
}


export default FoodPic;