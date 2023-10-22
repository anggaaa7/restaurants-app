import FavoriteRestaurantIdb from '../../data/fav-restaurantdb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorit = {
  async render() {
    return `
        <div class="grid-container">
        <div class="content">
            <h2 class="content__heading">Favorit</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorit;
