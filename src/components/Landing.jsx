import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import Cards from "./Cards";
const items = [
  {
    price: "300",
    name: "Plain pizza",
    img: "https://b.zmtcdn.com/data/pictures/chains/4/43984/97293d96278f57d63c60822cbba7fe6c_o2_featured_v2.jpg?output-format=webp",
  },
  {
    price: "350",
    name: "Spicy Capsicum",
    img: "https://b.zmtcdn.com/data/pictures/chains/5/45855/2373730dab7b75dad41cbb30d9134c18_o2_featured_v2.jpg?output-format=webp",
  },
  {
    price: "350",
    name: "Mozarella Cheese Pizza",
    img: "https://b.zmtcdn.com/data/pictures/0/20317900/6e51f70e3a1cc03ff344d0622fe14b76_o2_featured_v2.jpg?output-format=webp",
  },
  {
    price: "3",
    name: "Cheese Burst Mayo",
    img: "https://b.zmtcdn.com/data/pictures/chains/0/18386400/a637f7be26b117b3950c3b4d3b505cd8_o2_featured_v2.jpg",
  },
  {
    price: "450",
    name: "Chicken cheesy feast",
    img: "https://b.zmtcdn.com/data/pictures/7/20486657/3dcf397f87dd513cb52120d3baa317bd_o2_featured_v2.jpg",
  },
  {
    price: "500",
    name: "Chicken cheesy mayo feast",
    img: "https://b.zmtcdn.com/data/pictures/6/20160676/3bb0b4a960d22dbc7226722897f9fcb7_o2_featured_v2.jpg",
  },
];
const Landing = () => {
  const { myState, setMyState } = useContext(MyContext);

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.godubrovnik.com%2Fwp-content%2Fuploads%2Fpizza.jpg&f=1&nofb=1&ipt=ca738b496d1b467b8750c116b6581bc19dfa7c65740eab7967c03999c487195d&ipo=images"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Buy Awesome Pizzas 😀</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary" href="#pizza">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3" id="pizza">
        <Cards data={items} />
      </div>
    </div>
  );
};

export default Landing;
