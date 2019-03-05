import React from 'react'

export default props =>
    <div>
        Type is: {props.match.params.type}
        <br/>
        Prod ID is: {props.match.params.prodid ? props.match.params.prodid : "-"}
    </div>