const getState = ({setStore,getStore, getActions}) => {
    return {
        store: {
            contact: {
                full_name:"",
                email:"",
                agenda_slug: "asaygom_agenda",
                address:"",
                phone:""
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
                fetch("https://assets.breatheco.de/apis/fake/contact/",{
                    method: "POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify(store.contact)
                }).then((response)=>response.json()).then((data)=>console.log(data)).catch((error)=>console.log(error))
                //if(store.contact){}
                setStore({
                    contact: {
                        full_name:"",
                        email:"",
                        agenda_slug: "asaygom_agenda",
                        address:"",
                        phone:""
                            }
                })
            }
        }
    }
}

export default getState;