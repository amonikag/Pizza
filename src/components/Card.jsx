import React, { useState } from "react";
import { MyContext } from "../contexts/MyContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const { myState, setMyState } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className="card card-compact w-96 min-w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={props.data.img} alt="Pizza" className="h-60" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.data.name}</h2>

        <div className="card-actions justify-end">
          <span className="text-xl font-semibold">
            Price: <span className="font-medium">{props.data.price}</span>
          </span>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn btn-secondary"
            onClick={() => {
              setMyState([...myState, props.data]);
            }}
          >
            Add to cart
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              setMyState([...myState, props.data]);
              navigate("/cart");
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
