import './App.css';
import {useState} from 'react';

const coffeeMenu=[
{ 
  id: 1,
  name: 'Флет Уайт',
  description: ' 1 часть готового эспрессо и 3 части вспененного молока с расширением 10 %.',
  price: '250р',
  image: 'https://franko.su/upload/iblock/edc/lzwjusre8648acdi0gog3w5i7zdic600.png',
},
{ 
  id: 2,
  name: 'Капучино',
  description: 'Классическая формула напитка: эспрессо, паровое и вспененное молоко в равных пропорциях',
  price: '300р',
  image: 'https://avatanplus.com/files/resources/original/57d40d6672e7515714545847.png',
},
{ 
  id: 3,
  name: 'Латте',
  description: 'молоко и эспрессо',
  price: '300р',
  image: 'https://franko.su/upload/iblock/c69/1hebq0tx6m2vd22vu49zuq6tcxa9zx5p.png',
},
{
  id:4,
  name:'Моккачино',
  description:'это европейский аналог американского кофе мокко',
  price:'350р',
  image:'https://png.pngtree.com/png-clipart/20230927/original/pngtree-cup-of-coffee-cream-picture-image_13106639.png',
},
{
  id:5,
  name:'Горячий шоколад',
  description:'Горячий шоколад готовят из растопленного плиточного шоколада (или шоколадной стружки) исключительно на молоке с добавлением ванили, сахара, корицы и взбивают его до состояния пены.',
  price:'200р',
  image:'https://menu2go.ru/images/food/230/230_383_20210826153614_2491.jpg'

}
];

const lunchMenu = [
{ 
  id: 6,
  name: 'Сэндвич с индейкой, беконом, чеддером и яичным белком',
  description: 'Индейка, бекон, соус,хлеб',
  price: '250р',
  image: 'https://eda.ru/img/eda/c1200x1800/s1.eda.ru/StaticContent/Photos/130829212936/130904171008/p_O.jpgg',
},
{ 
  id: 7,
  name: 'Помидоры и Моцарелла на Фокачче',
  description: 'Хлеб, колбаса,помидоры, моцарелла',
  price: '220р',
  image: 'https://syrovarnyakp.familygardengroup.ru/upload/resize_cache/iblock/824/320_1000_1/w8z5z55n0j92cfni7dc6ek0wos8ptb2j.webp',
},
{ 
  id: 8,
  name: 'Хрустящий жареный сыр на закваске',
  description: 'Хлеб, сыр, закваска',
  price: '350р',
  image: 'https://menu2go.ru/images/food/95/95_20211008144823_8481.png',
},
{
  id:9,
  name:'Горячий бутерброд',
  description:'Хлеб, индейка, соус 1000 островов',
  price:'450р',
  image:'https://cafeautodom.kz/image/cache/catalog/items/Dener,%20kebab,%20fastfud/Goryachyi%20buter-700x700.png',

}
];

function App() {
const [selectedMenu, setSelectedMenu] = useState(coffeeMenu);

const handleMenuChange = (menuType) => {
  if (menuType === 'coffee') {
    setSelectedMenu(coffeeMenu);
  } else if (menuType === 'lunch') {
    setSelectedMenu(lunchMenu);
  }
};

const [expandedItem, setExpandedItem] = useState(null);

return (
  <div className="app">
    <div className="top-menu">
      <h1>Наше меню</h1>
      <img   width={50} src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"></img>
      <ul>
        <li>Сезонные напитки</li>
        <li>Франшизы по всему миру</li>
        <li>Контакты</li>
      </ul>
    </div>
    <div className="menu-buttons">
      <button onClick={() => handleMenuChange('coffee')}>Кофе</button>
      <button onClick={() => handleMenuChange('lunch')}>Горячие закуски</button>
    </div>
    <div className="menu">
      {selectedMenu.map((item) => (
        <div className={`menu-item ${expandedItem === item.id ? 'expanded' : ''}`} key={item.id}>
          <h3>{item.name}</h3>
          <div className="menu-image-container">
            <img src={item.image} alt={item.name} className="menu-image" />
          </div>
          <p>{item.price}</p>
          <button onClick={() => setExpandedItem(item.id)}>Подробнее</button>
          {expandedItem === item.id && (
            <p>Ингредиенты: {item.description}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);
}

export default App;