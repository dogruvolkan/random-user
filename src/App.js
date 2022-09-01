import {useState ,useEffect} from "react";
import './style.css';


function App() {

  const [user ,setUser] =useState("");

  const getUser = async () => {
      const res = await fetch("https://reqres.in/api/users/")
      const json = await  res.json()
      const data = json.data;
      let randomNum = Math.floor(Math.random()*data.length)
      setUser(data[randomNum]);
  }

  useEffect(() =>{
      getUser();
  }, [])

  return (
    <>
        <div className="card">
          <div className="card-container">
              <div className="img-container">
                <img src={user.avatar} alt="" />
              </div>
              <p>{user.first_name} {user.last_name}</p>
              <p>{user.email}</p>
              <button onClick={getUser}>get User</button>
          </div>  
        </div>
    </>
  );
}

export default App;
