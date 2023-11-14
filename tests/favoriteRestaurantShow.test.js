import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter';

// eslint-disable-next-line no-undef
describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getFavoriteRestaurantTemplate();
  };

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    renderTemplate();
  });

  // eslint-disable-next-line no-undef
  describe('When no restaurants have been liked', () => {
    // eslint-disable-next-line no-undef
    it('should render the information that no restaurants have been liked', () => {
      const favoriteRestaurants = {
        // eslint-disable-next-line no-undef
        getAllRestaurants: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      const restaurants = [];
      presenter._displayRestaurants(restaurants);

      // eslint-disable-next-line no-undef
      expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);
    });

    // eslint-disable-next-line no-undef
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = {
        // eslint-disable-next-line no-undef
        getAllRestaurants: jest.fn().mockImplementation(() => []),
      };

      // eslint-disable-next-line no-new
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      // eslint-disable-next-line no-undef
      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    // eslint-disable-next-line no-undef
    it('should show the information that no restaurants have been liked', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          // eslint-disable-next-line no-undef
          expect(document.querySelectorAll('.restaurant-item__not__found').length).toEqual(1);

          done();
        });

      const favoriteRestaurants = {
        // eslint-disable-next-line no-undef
        getAllRestaurants: jest.fn().mockImplementation(() => []),
      };

      // eslint-disable-next-line no-new
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  // eslint-disable-next-line no-undef
  describe('When favorite restaurants exist', () => {
    // eslint-disable-next-line no-undef
    it('should render the restaurants', () => {
      const favoriteRestaurants = {
        // eslint-disable-next-line no-undef
        getAllRestaurants: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      presenter._displayRestaurants([
        {
          id: 11,
          name: 'A',
          rating: 3,
          description: 'Sebuah restaurant A',
        },
        {
          id: 22,
          name: 'B',
          rating: 4,
          description: 'Sebuah restaurant B',
        },
      ]);

      // eslint-disable-next-line no-undef
      expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
    });
  });
});
