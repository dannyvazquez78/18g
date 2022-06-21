import { useState } from "react";

import "./App.css";

function CardItemContent({ title, text }) {
  return (
    <div className="card-item-content">
      <p className="title">{title}</p>
      <p className="content">{text}</p>
    </div>
  );
}

function App() {
  const [itemActive, setItemActive] = useState(null);

  const isActive = (itemNumber) => itemNumber === itemActive;

  const koders = [
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      firstName: "Kim",
      lastName: "Lee Anderson",
      age: 40,
      gender: "F",
      photoURL: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      firstName: "David",
      lastName: "Romero",
      age: 28,
      gender: "m",
      photoURL: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      firstName: "Yusef",
      lastName: "Lopéz",
      age: 40,
      gender: "f",
      photoURL: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const kodersUI = koders.map(
    ({ firstName, lastName, age, gender, photoURL }, index) => (
      <div key={index} className="card-container">
        <div className="card-image-container">
          <img alt="profile" src={photoURL} className="card-image" />
        </div>
        <div className="card-content">
          <CardItemContent title="Nombre" text={`${firstName} ${lastName}`} />
          <CardItemContent title="Edad" text={age} />
          <CardItemContent
            title="Gender"
            text={gender === "m" ? "Masculino" : "Femenino"}
          />

          {/* <div className="card-item-content">
            <p className="title">Edad</p>
            <p className="content">{age}</p>
          </div>
          <div className="card-item-content">
            <p className="title">Gender</p>
            <p className="content">
              {gender === "m" ? "Masculino" : "Femenino"}
            </p>
          </div> */}
        </div>
      </div>
    )
  );

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li
            onClick={() => setItemActive(1)}
            className={`${isActive(1) ? "active" : "inactive"}`}
          >
            Texto 1
          </li>
          <li
            onClick={() => setItemActive(2)}
            className={`${isActive(2) ? "active" : "inactive"}`}
          >
            Texto 2
          </li>
          <li
            onClick={() => setItemActive(3)}
            className={`${isActive(3) ? "active" : "inactive"}`}
          >
            Texto 3
          </li>
          <li
            onClick={() => setItemActive(4)}
            className={`${isActive(4) ? "active" : "inactive"}`}
          >
            Texto 4
          </li>
          <li
            onClick={() => setItemActive(5)}
            className={`${isActive(5) ? "active" : "inactive"}`}
          >
            Texto 5
          </li>
        </ul>
      </header>
      <div className="main-container">
        <div className="container">{kodersUI}</div>
      </div>
    </div>
  );
}

export default App;