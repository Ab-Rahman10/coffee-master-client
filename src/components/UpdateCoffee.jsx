import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateCoffee = () => {
  const loadedCoffee = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // send data to server
    fetch(
      `https://coffee-master-server-l0w6bzmwv-ab-rahmans-projects.vercel.app/coffees/${loadedCoffee._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-5">Update a Coffee</h2>

      <div className="w-6/12 mx-auto">
        <form onSubmit={handleUpdateCoffee} className="space-y-3">
          {/* form row */}
          <div className="flex justify-center gap-5 ">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full "
              defaultValue={loadedCoffee.name}
            />
            <input
              name="quantity"
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered w-full "
              defaultValue={loadedCoffee.quantity}
            />
          </div>
          <div className="flex justify-center gap-5 ">
            <input
              name="supplier"
              type="text"
              placeholder="Supplier"
              className="input input-bordered w-full "
              defaultValue={loadedCoffee.supplier}
            />
            <input
              name="taste"
              type="text"
              placeholder="Taste"
              className="input input-bordered w-full "
              defaultValue={loadedCoffee.taste}
            />
          </div>
          <div className="flex justify-center gap-5 ">
            <input
              name="category"
              type="text"
              placeholder="Category"
              className="input input-bordered w-full "
              defaultValue={loadedCoffee.category}
            />
            <input
              name="details"
              type="text"
              placeholder="Details"
              className="input input-bordered w-full "
              defaultValue={loadedCoffee.details}
            />
          </div>
          <div>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              defaultValue={loadedCoffee.photo}
            />
          </div>
          <button
            type="submit"
            className="btn bg-gray-700 text-white w-full hover:text-black"
          >
            Update a Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
