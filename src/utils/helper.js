export function filterRestaurants(searchText, restaurantList) {
    return restaurantList.filter((restaurant) => {
        return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
}