import React from 'react'
import {Link} from 'react-router-dom'

export default () => <div>
    <Link to="/">Home</Link>
    &nbsp;
    <Link to="/mobiles">Mobiles</Link>
    &nbsp;
    <Link to="/mobiles/123456">Custom mobile</Link>
</div>