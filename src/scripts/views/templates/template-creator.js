import CONFIG from '../../golbals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="resto-title">${restaurant.name}</h2>
    <img crossorigin="anonymouse" class="resto-thumbnail lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="resto-info">
        <h3>City</h3>
        <p>${restaurant.city}</p>
        <h3>Address</h3>
        <p>${restaurant.address}</p>
        <h3>Rating</h3>
        <p>⭐️<span class="resto-item__rating">${restaurant.rating}</span></p>
        <h3>Deskripsi</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="resto-menu">
        <h3>Menu</h3>
        <p>Makanan:</p>
        <ul>
            ${restaurant.menus.foods.map((food) => `<li>-${food.name}</li>`).join('')}
        <br>
        </ul>
        <p>Minuman:</p>
        <ul>
            ${restaurant.menus.drinks.map((drink) => `<li>-${drink.name}</li>`).join('')}
        </ul>
    </div>
    <div class="resto-reviews">
        <h3>Reviews</h3>
        ${restaurant.customerReviews.map((review) => `
            <div class="resto-review">
                <h4>${review.name}</h4>
                <p>${review.review}</p>
                <p>${review.date}</p>
                <br>
            </div>
        `).join('')}
        </div>
    </div>`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="resto-item" tabindex="0">
        <div class="resto-item-header">
            <img crossorigin="anonymouse" class="resto-thumbnail lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
            <h2 class="resto-title"><a class="resto-name" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
            <p>⭐️<span class="resto-item__rating">${restaurant.rating}</span></p>
        </div>
        <div class="resto-info">
            <h3>City</h3>
            <p>${restaurant.city}</p>
        </div>
    </div>
    `;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
