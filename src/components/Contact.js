import { useState } from "react";

//lifting the state up means that the state is managed by the parent component and passed down to the child component as props

const Section = ({name, description,isVisible, setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2" >
            <h1>{name}</h1>
            {isVisible && <p>{description}</p>}
            <button onClick={
                () => {
                    setIsVisible()
                }
            }>{isVisible?"Hide":"Show"}</button>
        </div>
    )
}

const Contact = () => {
    const [visibleSection, setVisibleSection] = useState("chetan");
    return (
        <>
            <Section name="Chetan" description="Reach me at chetan@localhost.com" 
            isVisible={visibleSection === "chetan"}
            setIsVisible={()=>setVisibleSection(visibleSection==="chetan"?"none":"chetan")}/>
            <Section name="Megha" description="Reach me at megha@localhost.com"
            isVisible={visibleSection === "megha"}
            setIsVisible={()=>setVisibleSection(visibleSection==="megha"?"none":"megha")}
            />
            <Section name="Shivaleela" description="Reach me at shivaleela@localhost.com"
            isVisible={visibleSection === "shivaleela"}
            setIsVisible={()=>setVisibleSection(visibleSection==="shivaleela"?"none":"shivaleela")}
            />
        </>
    )
}

export default Contact;
