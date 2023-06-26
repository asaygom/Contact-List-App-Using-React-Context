import ContactCard from "../components/ContactCard";
import DeleteContact from "../components/DeleteContact";
import { Link } from "react-router-dom";

function Home(props){
    return(
        <div className="container">
            <div className="d-grid d-flex justify-content-end">
                <Link to="/new-contact"><button className="btn btn-success my-2">Add new contact</button></Link>
            </div>
            <ContactCard name="John Smith" address="123 street" phone="+56912345678" email="john.smith@email.com" img="https://img.getimg.ai/generated/img-lh3Cj2hRE8d6x0UdvcVdi.jpeg"/>
            <ContactCard name="John Smith" address="123 street" phone="+56912345678" email="john.smith@email.com" img="https://img.getimg.ai/generated/img-lh3Cj2hRE8d6x0UdvcVdi.jpeg"/>
            <ContactCard name="John Smith" address="123 street" phone="+56912345678" email="john.smith@email.com" img="https://img.getimg.ai/generated/img-lh3Cj2hRE8d6x0UdvcVdi.jpeg"/>
            <ContactCard name="John Smith" address="123 street" phone="+56912345678" email="john.smith@email.com" img="https://img.getimg.ai/generated/img-lh3Cj2hRE8d6x0UdvcVdi.jpeg"/>
        </div>
    )
}

export default Home;