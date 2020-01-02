import { elements } from './base';

export const getSearchInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearSearchList = () => {
    elements.searchList.innerHTML = '';
}

const renderRecipe = (recipe) => {
    const markup = `<li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>`

    elements.searchList.insertAdjacentHTML('beforeend', markup);
}

export const renderRecipies = (recipes) => {
    recipes.forEach(renderRecipe)
}