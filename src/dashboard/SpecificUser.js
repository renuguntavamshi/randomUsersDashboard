import { useLocation } from "react-router-dom";
function SpecificUser(){
    console.log(useLocation())
    const specificUser=useLocation().state;
    console.log(specificUser);
    return(
        <div style={{display:"flex",justifyContent:"center"}}>
            <div>
            <img src={specificUser.image} alt="avatar" />
          <h2>Username:{specificUser.username}</h2>
          <h2>Gender:{specificUser.gender}</h2>
          <h2>Phone No:{specificUser.phone}</h2>
          <h2>Role :{specificUser.role}</h2>
          <h2>Weight:{specificUser.weight}</h2>
          <h2>University:{specificUser.university}</h2>

         </div>
        </div>
    )
}
export default SpecificUser;