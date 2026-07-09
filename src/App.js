import { useState, useEffect } from "react";
import "./App.css";
import User from "./Components/User/User";
import Cart from "./Components/Cart/Cart";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => setUser(data.results));
  }, []);
  const [cart, setCart]=useState([])
  const handleAddUser =(user)=>{
    const newCart = [...cart, user]
    setCart(newCart)
  }
  return (
    <div className="users">
      <div className="user-item">
        {users.map((user) => (
          <User user={user} handleAddUser={handleAddUser} key={user.login.uuid}></User>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
        
      
    </div>
  );
}

export default App;
