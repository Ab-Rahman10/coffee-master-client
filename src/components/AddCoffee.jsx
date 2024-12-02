import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    // send data to server
    fetch("http://localhost:5001/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-5">Add a Coffee</h2>

      <div className="w-6/12 mx-auto">
        <form onSubmit={handleAddCoffee} className="space-y-3">
          {/* form row */}
          <div className="flex justify-center gap-5 ">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full "
            />
            <input
              name="quantity"
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex justify-center gap-5 ">
            <input
              name="supplier"
              type="text"
              placeholder="Supplier"
              className="input input-bordered w-full "
            />
            <input
              name="taste"
              type="text"
              placeholder="Taste"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex justify-center gap-5 ">
            <input
              name="category"
              type="text"
              placeholder="Category"
              className="input input-bordered w-full "
            />
            <input
              name="details"
              type="text"
              placeholder="Details"
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn bg-gray-700 text-white w-full hover:text-black"
          >
            Add a Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
