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
            getContacts: ()=>{
                fetch("https://assets.breatheco.de/apis/fake/contact/agenda/asaygom_agenda",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfContacts: data})).catch((error)=>console.log(error))
            },
            handleChange: (event)=>{
                const store = getStore();
                setStore({contact: {...store.contact, [event.target.name]: event.target.value} }) 
                console.log(store.contact)
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