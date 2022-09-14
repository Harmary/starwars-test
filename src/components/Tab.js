import { useState } from "react";

export function Tab(props) {
    const [tabState,setTabState] = useState(false);
    function setTab() { 
        tabState === true? setTabState(false) : setTabState(true);
        return; 
    }
    return (
        <div className="tab">
            <h2 className="tab__name" onClick={()=>setTab()}>{props.person.name}</h2>
            <div className={tabState===true?"tab-open":"tab-close"}>
                <p>color: {props.person.skin_color}</p>
                <p>height: {props.person.height}</p>
                <p>weight: {props.person.mass}</p>
            </div>

        </div>
    );
}