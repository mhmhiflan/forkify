import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

const state = {};

const controlSearch = async () => {
    //1.Get query from view
    const query = searchView.getSearchInput();
    console.log(query);
    //2.new state object and add to state
    state.search = new Search(query);
    //3.prepare UI for results
    searchView.clearInput();
    searchView.clearSearchList();
    renderLoader(elements.results);
    //4.get search results
    await state.search.getResults();
    //5.Display results on UI
    clearLoader();
    searchView.renderRecipies(state.search.result);

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener('click', e => {
   const btn = e.target.closest('.btn-inline');
   if(btn){
       const goToPage = parseInt(btn.dataset.goto,10);
       searchView.clearSearchList();
       searchView.renderRecipies(state.search.result,goToPage);
   }
})