import Card from "./Card";

const Cards = (props) => {
  // console.log(props)

  return (
    <div className="flex gap-x-8 gap-y-2 flex-wrap">
      {props.data.map((item, index) => {
        {
          // console.log(item); 
        }
        return <Card data={item} key={index} />;
      })}
    </div>
  );
};

export default Cards;
