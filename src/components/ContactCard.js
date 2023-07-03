import { Link } from "react-router-dom";
import DeleteContact from "./DeleteContact";
import { useContext } from "react";
import { Context } from "../store/context";


function ContactCard(props){
    const { store, actions } = useContext(Context);
    return(
        <div className="card">
            <div className="row g-0">
                <div className="col-md-3 px-3 py-2 d-flex align-items-center justify-content-around">
                <img src={props.img} className="img-fluid rounded-circle contactImg" alt="..."/>
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><i className="fa-solid fa-location-dot me-2"></i>{props.address}</p>
                        <p className="card-text"><i className="fa-solid fa-phone-flip me-2"></i>{props.phone}</p>
                        <p className="card-text"><i className="fa-solid fa-envelope me-2"></i>{props.email}</p>
                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-around">
                    <Link to="/edit-contact"><button className="btn"><i className="fa-solid fa-pencil"></i></button></Link>
                    <button className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            <DeleteContact idToDelete={props.id}/>
        </div>
    )
}

export default ContactCard;