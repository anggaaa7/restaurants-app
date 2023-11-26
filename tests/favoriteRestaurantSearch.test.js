import {
  beforeEach, describe, expect, it, jest,
} from '@jest/globals';
import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-view';

// eslint-disable-next-line
describe('Searching restaurants', () => {
  // eslint-disable-next-line no-unused-vars
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = {
      // eslint-disable-next-line no-undef
      getAllRestaurants: jest.fn(),
      // eslint-disable-next-line no-undef
      searchRestaurants: jest.fn(),
    };

    // eslint-disable-next-line no-undef
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  // eslint-disable-next-line no-undef

  // eslint-disable-next-line no-undef
  describe('When query is empty', () => {
    // eslint-disable-next-line no-undef
    it('should capture the query as empty', () => {
      favoriteRestaurants.getAllRestaurants.mockImplementation(() => ([]));

      searchRestaurants(' ');
      // eslint-disable-next-line no-undef
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('    ');
      // eslint-disable-next-line no-undef
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('');
      // eslint-disable-next-line no-undef
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchRestaurants('\t');
      // eslint-disable-next-line no-undef
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });

    // eslint-disable-next-line no-undef
    it('should show all favorite restaurants', () => {
      favoriteRestaurants.getAllRestaurants.mockImplementation(() => ([]));

      searchRestaurants('    ');

      // eslint-disable-next-line no-undef
      expect(favoriteRestaurants.getAllRestaurants)
        .toHaveBeenCalled();
    });
  });

  // eslint-disable-next-line no-undef
  describe('When no favorite restaurants could be found', () => {
    // eslint-disable-next-line no-undef
    it('should show the empty message', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
        // eslint-disable-next-line no-undef
          expect(document.querySelectorAll('.restaurant-item__not__found').length)
            .toEqual(1);
          done();
        });

      favoriteRestaurants.searchRestaurants.mockImplementation(() => ([]));
      searchRestaurants('restaurant a');
    });

    // eslint-disable-next-line no-undef
    it('should not show any restaurant', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
        // eslint-disable-next-line no-undef
          expect(document.querySelectorAll('.resto-item').length)
            .toEqual(0);
          done();
        });

      favoriteRestaurants.searchRestaurants.mockImplementation(() => ([]));

      searchRestaurants('restaurant a');
    });
  });
});
