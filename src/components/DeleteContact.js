//import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/context";


//const DeleteContactID = () =>{ const routeParams = useParams()}

function DeleteContact(props){
    const [closeModal,setCloseModal] = useState(false)
    const { store, actions } = useContext(Context);
    console.log(closeModal)
    const handleModal = ()=>{
        actions.deleteContact(props.idToDelete) 
        setCloseModal(true)
    }
    return(
    <div className="modal fade" tabIndex="-1" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Are you sure?</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>This action will delete the contact selected {props.idToDelete}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss={closeModal && "modal"} onClick={()=>{handleModal()}}>Yes</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DeleteContact;