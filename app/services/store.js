import Ember from 'ember';
import Item from 'rating-system/models/item';

const items = [
  Item.create({
    id: '1',
    title: 'The title of item #1',
    description: 'A small blurb about the 1st item.',
    date: new Date('03-02-2016'),
    up: 10,
    down: 7,
    votes: 3
  }),

  Item.create({
    id: '2',
    title: 'The title of item #2',
    description: 'A small blurb about the 2nd item.',
    date: new Date('03-03-2016'),
    up: 12,
    down: 2,
    votes: 10
  }),

  Item.create({
    id: '3',
    title: 'The title of item #3',
    date: new Date('03-04-2016'),
    description: 'A small blurb about the 3rd item.',
    up: 15,
    down: 10,
    votes: 5
  }),
];

export default Ember.Service.extend({
  findItemById(id) {
    return this.findItems().findBy('id', id);
  },
  findItems() {
    return items;
  }
});
