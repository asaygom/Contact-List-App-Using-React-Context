import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

function NewContact(){
    const { store, actions } = useContext(Context);
    return(
        <div className="container p-3">
            <h2 className="text-center">Add a new contact</h2>
            <form className="row g-3">
                <div className="col-md-12">
                    <label htmlFor="inputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Full name" name="name" onChange={actions.handleChange} value={store.contact.name} onSubmit={actions.handleSubmit}/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" name="email" onChange={actions.handleChange} value={store.contact.email} onSubmit={actions.handleSubmit}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="inputPhone" placeholder="Enter phone" name="phone" onChange={actions.handleChange} value={store.contact.phone} onSubmit={actions.handleSubmit}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" name="address" onChange={actions.handleChange} value={store.contact.address} onSubmit={actions.handleSubmit}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link className="m-2" to="/">or get back to contacts</Link>
                </div>
            </form>
        </div>
    )
}

export default NewContact;