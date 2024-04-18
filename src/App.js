import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  { name: "кроссовки Nike", price: 12500, UrlImage: "/img/sneakers/1.jpg" },
  { name: "кроссовки Nike", price: 55555, UrlImage: "/img/sneakers/2.jpg" },
  { name: "кроссовки Nike", price: 55888, UrlImage: "/img/sneakers/3.jpg" },
];

function App() {
  return (
    <div className="wrapper clear">
      {/* Drawer */}
      <Drawer />

      {/* Header */}
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-4o">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card 
            title={obj.name}
            price={obj.price}
            UrlImage={obj.UrlImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
