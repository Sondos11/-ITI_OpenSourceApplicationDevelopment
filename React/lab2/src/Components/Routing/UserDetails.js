import { useParams } from "react-router-dom";

const UserDetails = (props) => {
  let { id } = useParams();
  console.log(id);
  return (
    <aside class="profile-card">
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdVtwNKsq8mdNcsanjqptRrv6d5q7eazrng&usqp=CAU"
          alt="..."
        />
      </header>

      <div class="profile-bio">
        <p className="mb-1">ID: {id}</p>
        <p className="mb-1">Name: Mariam Saad</p>
        <p className="mb-0">Age: 22</p>
      </div>
    </aside>
  );
};

export default UserDetails;
