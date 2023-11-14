import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
        <div id="restaurant-search-container">
          <input id="query" type="text">
  
            <div class="restaurant-result-container">
              <ul class="restaurants">
              </ul>
          </div>
        </div>
      `;
  }

  // eslint-disable-next-line class-methods-use-this
  getFavoriteRestaurantTemplate() {
    return `
        <div class="content">
            <h2 class="content__heading">Favorit</h2>

            <div id="restaurants" class="restaurants">
            </div>
        </div>
      `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  showRestaurants(restaurants) {
    let html;
    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(`
          <li class="restaurant">
            <span class="restaurant__title">${restaurant.title || '-'}</span>
          </li>`),
        '',
      );
    } else {
      html = '<div class="restaurants__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }

    document.querySelector('.restaurants').innerHTML = html;

    document
      .getElementById('restaurant-search-container')
      .dispatchEvent(new Event('restaurants:searched:updated'));
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)),
        '',
      );
    } else {
      html = '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }

    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }
}

export default FavoriteRestaurantSearchView;
