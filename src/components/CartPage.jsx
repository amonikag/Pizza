import { useContext, useRef, useState } from "react";
import { MyContext } from "../contexts/MyContext";
import axios from "axios";

const CartPage = () => {
  const { myState, setMyState } = useContext(MyContext);
  const [couponCode, setCouponCode] = useState(null);
  const [popUp, setPopUp] = useState(null);
  const [disc, setDisc] = useState(null);
  const [done, setDone] = useState(false);

  const couponCurrValue = useRef();

  let sum = 0;
  const mySet = new Set(myState);
  const newArr = [...mySet];

  let handleVerify = () => {
    console.log(couponCode);
    axios
      .post(
        "http://localhost:3000/copoun/640d49ebf5e392eb2368b04f/verify",
        {
          coup_id: couponCode,
          prod: "cart",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          setPopUp("success");
          console.log(response.data);
          console.log(response.data.data[0].discount_number);
          setDisc(response.data.data[0].discount_number);
        } else if (response.status == 404) {
          setPopUp("failure");
        }
        console.log(response.data);
      })
      .catch((error) => {
        setPopUp("failure");
        console.error(error);
      });
  };

  let handleRedeem = () => {
    console.log(couponCode);
    axios
      .post(
        "http://localhost:3000/copoun/640d49ebf5e392eb2368b04f/confirm",
        {
          coup_id: couponCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status == 200) {
          console.log("Money has been deducted :)");
        }
        console.log(response.data);
        setDone(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-16 text-left mb-5">Your cart</h1>

      <div className="flex">
        {console.log(couponCode)}
        <div className="w-3/4">
          {newArr.map((items, index) => {
            return (
              <div className="flex mb-8">
                <img src={items.img} className="w-1/4 rounded-lg" />
                <div className="w-full text-left ml-16">
                  <p className="text-xl font-bold mb-5">{items.name}</p>

                  <p className="text-md font-bold">
                    Total Price:{" "}
                    <span className="font-light">{items.price}</span>
                  </p>
                  <p className="text-md font-bold">
                    Quantity:{" "}
                    <span className="font-light">
                      {myState.filter((x) => x == items).length}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}

          <div className="text-left mt-10">
            <p className="text-lg font-bold ">Have a coupon code ?</p>
            <input
              type="text"
              ref={couponCurrValue}
              placeholder="Type here"
              className="input mr-5 input-bordered input-error w-full max-w-xs"
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button
              className="btn btn-warning"
              onClick={() => {
                handleVerify();
              }}
            >
              Redeem coupon
            </button>
            {popUp == "success" ? (
              <div className="bg-accent p-5 rounded-xl mt-10 text-white mr-10">
                Coupon Verified !!!
              </div>
            ) : null}
            {popUp == "failure" ? (
              <div className="bg-error p-5 rounded-xl mt-10 text-white mr-10">
                Coupon code is invalid !!!
              </div>
            ) : null}
          </div>
        </div>

        <div className="w-1/4">
          <div className="bg-base-200 rounded-lg p-3">
            <p className="text-2xl font-semibold">Grand Total</p>
            <p className="text-md mt-8 font-bold">
              Total ({myState.length} items):{" "}
              {myState
                .map((x) => parseInt(x.price))
                .forEach((element) => {
                  sum = sum + element;
                })}{" "}
              {sum}
            </p>
            {popUp == "success" ? (
              <p className="text-md mt-3 font-bo mr-10">
                Price after Discount: {sum - disc}
              </p>
            ) : null}

            <button className="btn btn-active btn-primary mt-10">
              Proceed to pay
            </button>
          </div>

          <div className="bg-base-200 rounded-lg p-3 mt-10">
            <p className="text-md">(Did you add your coupon ?)</p>
            <button
              className="btn btn-active btn-accent m-5"
              onClick={() => handleRedeem()}
            >
              Confirm Payment
            </button>
          </div>

          {done ? (
            <div className="bg-warning p-5 rounded-xl mt-10 text-black w-full mr-10">
              Payment successful !!!
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
