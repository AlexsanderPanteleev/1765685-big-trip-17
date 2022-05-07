import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import ListEventsView from '../view/list-events-view.js';
import EditPointView from '../view/edit-point-view.js';
import NewPointView from '../view/new-point-view.js';
import EventPointView from '../view/event-point-view.js';

export default class BoardPresenter {
  listEventsView =new ListEventsView();

  init(boardContainer){
    this.boardContainer = boardContainer;
    render(new SortView(), this.boardContainer);
    render(this.listEventsView, this.boardContainer);
    render(new NewPointView(), this.listEventsView.getElement());
    render(new EditPointView(), this.listEventsView.getElement());
    for (let i = 0; i < 3; i++) {
      render(new EventPointView(), this.listEventsView.getElement());
    }
  }
}
