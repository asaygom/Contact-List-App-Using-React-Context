const getState = ({setStore,getStore, getActions}) => {
    return {
        store: {
            contact: {
                name:"",
                email:"",
                phone:"",
                address:"",
                img:""
            },
            listOfContacts: []
        },
        actions: {
            handleChange: (event, input)=>{
                const store = getStore();
                setStore({contact: {input: event.target.value} })
            },
            handleSubmit: (event)=>{
                event.preventDefault();
                const store = getStore();
                if(store.contact){
                    setStore({
                        listOfContacts: store.listOfContacts.concat(store.contact)
                    })
                }
                setStore({
                    contact: {
                        name:"",
                        email:"",
                        phone:"",
                        address:"",
                        img:""
                    }
                })
            }
        }
    }
}

export default getState;