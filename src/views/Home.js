import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/context";
import DeleteContact from "../components/DeleteContact";

function Home(props){
    const { store, actions } = useContext(Context);
    const [IDContact, setIDContact] = useState("");
    useEffect(()=>{actions.getContacts()},[])
    return(
        <div className="container mb-2">
            <div className="d-grid d-flex justify-content-end">
                <Link to="/new-contact"><button className="btn btn-success my-2">Add new contact</button></Link>
            </div>
            {store.listOfContacts.map((contact,index)=>{
                return <ContactCard key={index} setID={setIDContact} id={contact.id} name={contact.full_name} address={contact.address} phone={contact.phone} email={contact.email} img="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"/>})}
            <DeleteContact idToDelete={IDContact}/>
        </div>
    )
}

export default Home;