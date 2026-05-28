// 12.4.4 Props: Mengirim Data antar Component 
/* 
function Profile(props) {
  return (
    <div>
      <h3>Nama: {props.name}</h3>
        <p>Role: {props.role}</p>
    </div>
  );
}*/

//destructuring pada props
/*
function Profile ({ name, role }) {
  return (
    <div>   
        <h3>Nama: {name}</h3>
        <p>Role: {role}</p>
    </div>
  );
}
*/

//Eksperimen Praktikum 12.4.3 Konsep Component & JSX

function Profile({ name, role, age, email }) {
  return (
    <div>
      <h2>{name}</h2>

      <p>Role: {role}</p>
      <p>Umur: {age}</p>
      <p>Email: {email}</p>

      <hr />
    </div>
  );
}

export default Profile;