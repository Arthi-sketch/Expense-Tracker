import react from "react";

function card(props)
{
    return (<div className={"card " + props.className}>
        {props.children}
    </div>);
}

export default card;