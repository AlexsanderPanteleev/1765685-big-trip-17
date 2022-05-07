import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import {render} from './render.js';

const boardPresenter= new BoardPresenter();
const tripMainElement = document.querySelector('.trip-main');
const filterControlsHeaderElement = tripMainElement.querySelector('.trip-controls__filters h2');
const tripEventsContainer = document.querySelector('.trip-events');

render(new FilterView(), filterControlsHeaderElement, 'afterend');
boardPresenter.init(tripEventsContainer);
