import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

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
    //4.get search results
    await state.search.getResults();
    //5.Display results on UI
    searchView.renderRecipies(state.search.result);

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})