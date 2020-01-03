import { elements } from './base';

export const getSearchInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearSearchList = () => {
    elements.searchList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}

export const titleLimit = ( title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if(acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0)
        return `${newTitle.join(' ')}...`
    }
    return title;
}

const renderRecipe = (recipe) => {
    const markup = `<li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${titleLimit(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>`;

    elements.searchList.insertAdjacentHTML('beforeend', markup);
}

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
      
    </button>`


const renderButtons = (page, numRes, resPerPage ) => {
    const pages = Math.ceil(numRes/resPerPage);
    let button;
    if(page === 1){
        //first page and render only next button.
        button = createButton(page, 'next');
    }else if(page < pages) {
        // render both next and prev button.
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `
    }
     else if(page === pages){
        //Last page and render only prev button.
        button = createButton(page, 'prev');

    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button)
}
export const renderRecipies = (recipes,page = 1,resPerPage = 10) => {
    const start = (page -1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start,end).forEach(renderRecipe);
    renderButtons(page, recipes.length, resPerPage);
}