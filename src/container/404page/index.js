import React from 'react';
import {Link} from 'react-router-dom'

export default class protect extends React.Component {
    render() {
        return (
            <div>
                <p>404 Page</p>
                <Link to={{ pathname:"/"}}>Trang chủ</Link>
            </div>
        )
    }
}