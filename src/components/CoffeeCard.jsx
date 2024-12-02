import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (coffeeId) => {
    fetch(
      `https://coffee-master-server-l0w6bzmwv-ab-rahmans-projects.vercel.app/coffees/${coffeeId}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remainingCoffees = coffees.filter((cof) => cof._id !== coffeeId);
        setCoffees(remainingCoffees);
      });
  };
  return (
    <div className="card items-center card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Category: {category}</p>
        <p>Quantity: {quantity}</p>
        <p>taste: {taste}</p>
        <p>supplier: {supplier}</p>
        <p>details: {details}</p>
      </div>
      <div className="card-actions pr-5 flex flex-col">
        <button className="btn">View</button>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="btn">Edit</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
