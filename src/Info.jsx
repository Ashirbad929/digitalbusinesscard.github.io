import person from "./image/icon-male.png";
import {SiGmail} from "react-icons/si"
import {FaLinkedin} from "react-icons/fa";
const Info = () => {
    return ( 
        <div className="info">
            

            <nav>
                <img className="img" src={person} alt="pic" />
                <h1 className="username">Ashirbad Behera</h1>
                
                <h3 className="profile">Programmer / Developer</h3>
                <a href=""><small>Ashirbad.929.website</small></a>
            </nav>
            
            <button><SiGmail/></button>
            <button><FaLinkedin/></button>
            
           
        </div>
     );
}
 
export default Info;