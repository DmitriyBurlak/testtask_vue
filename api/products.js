const SLEEP_TIME = 200;
function sleep(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, SLEEP_TIME);
  });
}

const dataService = {
  getProductsList() {
    let products = [
      {
        id: 'potato',
        title: 'Картошка',
        price: 120.99,
        image: '/products/potato.jpg',
        unit: 'кг.'
      },
      {
        id: 'carrot',
        title: 'Морковка',
        price: 55.00,
        image: '/products/carrot.jpg',
        unit: 'кг.'
      },
      {
        id: 'cabbage',
        title: 'Капуста',
        price: 80.50,
        image: '/products/cabbage.jpg',
        unit: 'кг.'
      },
      {
        id: 'beef',
        title: 'Говядина',
        price: 420.50,
        image: '/products/beef.jpg',
        unit: 'кг.'
      }
    ];
    return products;
  },
};

const productsApi = {
  getProductsList() {
    return sleep(dataService.getProductsList);
  },
};
export default productsApi;
