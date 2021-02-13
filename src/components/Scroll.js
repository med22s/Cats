

const Scroll=(props)=>{
    return (
        <div style={{overflowY:'scroll' ,border:'5px solid grey',height:'500px',margin:'auto',width:'70%'}}>

            {props.children}

        </div>
    )
}


export default Scroll;