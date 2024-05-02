import React from "react";
import ReactDOM from "react-dom/client";

const header = (<div className="header">
    <h1 className="name">What is Your name</h1>
</div>)

const Heading = () =>{
    return(
        <div className="Heading">
            {header}
            <p>Thanks for giving me this opportunoity sir.<br/>first of all my name is Muthu Krishnan .In TamilNadu we 
                use our Father firstname as Initial for us.
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading/>)