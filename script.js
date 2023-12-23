const appNode = document.querySelector('.tovar');

const cartNode = document.querySelector('.popup-list');
const dataCards = [];
class Card {
  constructor(product) {
    const template = document.getElementById('cards-template');
    const content = document.importNode(template.content, true);

    this.imgSrc = content.querySelector('.card-img');
    this.name = content.querySelector('.name');
    this.price = content.querySelector('.info');
   

    this.imgSrc.src = product.imgSrc;
    this.price.innerHTML = product.price;
    this.name.innerHTML = product.name;
   
    appNode.appendChild(content);
  }

  addToCart(product) {
    dataCards.push(product);
    const li = document.createElement('li');
    li.innerText =  product.name + ' ' + product.price;
    popupFailed.appendChild(li);
  }
}

class Product {
  constructor(name, imgSrc, price) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.price = price;
  }
}

const product = new Product(
  'седьмая чашка кофе в подарок',
  'https://ie.wampi.ru/2022/12/09/image-17.png',
   'По предьявлению специальной карточки, ее выдаем в кофейне',
);

const product2 = new Product(
  '-20% за час до закрытия',
  'https://im.wampi.ru/2022/12/09/image-12.png',
  'Скидка 20% на выпечку и дессерты за час до закрытия пекарни. Скидка доступна только при посещении пекарни.',
);

const product3 = new Product(
  '-15% в день рождения',
  'https://ie.wampi.ru/2022/12/09/image-16.png',
  'Действует при предъявлении документа, подтверждающую дату рождения (паспорт, водительское удостоверение, свидетельство о рождении)',
);

const product4 = new Product(
  'скидка за напиток в свой стакан',
   'https://im.wampi.ru/2022/12/09/image-13.png',
   'Скидку получает гость, который попросил налить напиток в свой стакан - 10%',
);


new Card(product);
new Card(product2);
new Card(product3);
new Card(product4);
