import Search from './models/Search';

const search = new Search('pizza');

search.getResults();

const constrolSearch =  () => {
    //1.Get query from view

    //2.new state object and add to state

    //3.prepare UI for results

    //4.get search results

    //5.Display results on UI

}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})