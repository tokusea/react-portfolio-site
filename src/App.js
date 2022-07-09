import React from "react";

const NameText = (props) => {
  return (
    <p>Hi, {props.name}!</p>
  )
}

const Profile = (props) => {
  return (
    <div>
      <p>{props.age}</p>
      <p>{props.country}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <NameText name="Jack"></NameText>
      <Profile age={22} country="US"></Profile>
      <NameText name="Mary"></NameText>
      <Profile age={20} country="UKkkkk"></Profile>
    </div>
  )
}
export default App;
