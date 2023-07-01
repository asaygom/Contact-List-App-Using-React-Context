import ContactCard from "../components/ContactCard";
import DeleteContact from "../components/DeleteContact";
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
            {store.listOfContacts.map((contact,index)=>{
                return <ContactCard key={index} name={store.contact.name} address={store.contact.address} phone={store.contact.phone} email={store.contact.email} img={store.contact.img}/>})}
            <ContactCard name="John Smith" address="123 street" phone="+56912345678" email="john.smith@email.com" img="https://img.getimg.ai/generated/img-lh3Cj2hRE8d6x0UdvcVdi.jpeg"/>
            <ContactCard name="John Smith" address="123 street" phone="+56912345678" email="john.smith@email.com" img="https://img.getimg.ai/generated/img-lh3Cj2hRE8d6x0UdvcVdi.jpeg"/>
            <ContactCard name="John Smith" address="123 street" phone="+56912345678" email="john.smith@email.com" img="https://img.getimg.ai/generated/img-lh3Cj2hRE8d6x0UdvcVdi.jpeg"/>
            <ContactCard name="John Smith" address="123 street" phone="+56912345678" email="john.smith@email.com" img="https://img.getimg.ai/generated/img-lh3Cj2hRE8d6x0UdvcVdi.jpeg"/>
        </div>
    )
}

export default Home;