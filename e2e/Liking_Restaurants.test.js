const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorit');
});

// eslint-disable-next-line no-unused-vars, no-undef
Scenario('showing empty liked resstaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

// eslint-disable-next-line no-unused-vars, no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.resto-name', 10);
  I.seeElement('.resto-name');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.resto-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  // eslint-disable-next-line no-undef
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  // eslint-disable-next-line no-undef
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('.resto-item');
  const likedRestaurantName = await I.grabTextFrom('.resto-name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

// eslint-disable-next-line no-undef
// Scenario('searching restaurants', async ({ I }) => {
//   I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

//   I.amOnPage('/');

//   I.seeElement('.resto-name');

//   const names = [];
//   // eslint-disable-next-line no-plusplus
//   for (let i = 1; i <= 3; i++) {
//     // eslint-disable-next-line no-undef
//     I.click(locate('.resto-name').at(i));

//     I.seeElement('#likeButton');
//     I.click('#likeButton');

//     // eslint-disable-next-line no-await-in-loop
//     names.push(await I.grabTextFrom('.resto-title'));

//     I.amOnPage('/');
//   }

//   I.amOnPage('/#/favorit');
//   I.seeElement('#query');

//   const visibleLikedRestaurant = await I.grabNumberOfVisibleElements('.resto-item');
//   assert.strictEqual(names.length, visibleLikedRestaurant);

//   const searchQuery = names[1].substring(1, 3);

//   I.fillField('#query', searchQuery);
//   I.pressKey('Enter');

//   const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);
//   const visibleSearchedLikedRestaurant = await I.grabNumberOfVisibleElements('.resto-item');

//   assert.strictEqual(matchingRestaurants.length, visibleSearchedLikedRestaurant);

//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < matchingRestaurants.length; i++) {
//     // eslint-disable-next-line no-await-in-loop, no-undef
//     const visibleName = await I.grabTextFrom(locate('.resto-name').at(i + 1));
//     assert.strictEqual(matchingRestaurants[i], visibleName);
//   }
// });
