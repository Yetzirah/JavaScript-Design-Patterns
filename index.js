const Collection = function (id, name, handle) {

    this.id = id;
    this.name = name;
    this.handle = handle;

    this.getId = function () {
        return this.id;
    }

    this.getName = function () {
        return this.name;
    }

    this.getHandle = function () {
        return this.handle;
    }
}

const markdowns = new Collection('0912904', 'markdowns', 'markdowns');
const newArrivals = new Collection('7809174', 'New Arrivals', 'new-arrivals');

const Product = function (id, title, images, sizes) {

    this.id = id;
    this.title = title
    this.images = images;
    this.sizes = sizes;
}


Product.prototype.getId = function () {
    return this.id;
}

Product.prototype.title = function () {
    return this.title;
}

Product.prototype.images = function () {
    return this.images;
}

Product.prototype.sizes = function () {
    return this.sizes;
}

const classicBlouse = new Collection(
    '9034812', 
    'The Classic Blouse', 
    ['classic_1.jpg', 'classic_2.jpg', 'classic_3.jpg', 'classic_4.jpg'],
    ['XS', 'S', 'M', 'L']
);

const simpleDress = Object.create( Product );

simpleDress.id = '7568423';
simpleDress.title = 'Simple Dress';
simpleDress.images = ['simple_d_1.jpg', 'simple_d_2.jpg'];
simpleDress.sizes = ['XXS', 'XS', 'S'];