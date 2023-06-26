import DeleteContact from "./DeleteContact";

function ContactCard(props){
    return(
        <div className="card">
            <div className="row g-0">
                <div className="col-md-3 px-3 py-2">
                <img src={props.img} className="img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><i className="fa-solid fa-location-dot me-2"></i>{props.address}</p>
                        <p className="card-text"><i className="fa-solid fa-phone-flip me-2"></i>{props.phone}</p>
                        <p className="card-text"><i className="fa-solid fa-envelope me-2"></i>{props.email}</p>
                    </div>
                </div>
                <div className="col-md-2 d-flex justify-content-around">
                    <p className="card-text mt-3"><i className="fa-solid fa-pencil"></i></p>
                    <p className="card-text mt-3"><i className="fa-solid fa-trash-can"></i></p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;