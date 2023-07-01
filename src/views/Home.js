import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../store/context";

function Home(props){
    const { store, actions } = useContext(Context);
    useEffect(()=>{actions.getContacts()},[])
    return(
        <div className="container mb-2">
            <div className="d-grid d-flex justify-content-end">
                <Link to="/new-contact"><button className="btn btn-success my-2">Add new contact</button></Link>
            </div>
            {store.listOfContacts.map((contact)=>{
                return <ContactCard key={contact.id} name={contact.full_name} address={contact.address} phone={contact.phone} email={contact.email} img={contact.img}/>})}
            <ContactCard name="John Smith" address="123 street" phone="+56912345678" email="john.smith@email.com" img="https://img.getimg.ai/generated/img-lh3Cj2hRE8d6x0UdvcVdi.jpeg"/>
        </div>
    )
}

export default Home;