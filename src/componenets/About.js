import User from "./User";
import UserClass from "./UserClass";
const About =()=>{
    return (
        
        <div >
            <h1>About</h1>
            <h2>This is learning React</h2>
            <div className="about-card">
            <User name={"Gaurav Mishra"} Location={"Varanasi"} profession={"SDE"}/>
             <UserClass name="Elon Musk" location="USA" />
            </div>
           
        </div>
    );
};

export default About;