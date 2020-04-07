import React, { component, Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Detail extends Component {
    render() {     
        const text = this.props.location.data ? this.props.location.data.name : "no data";
        return (
            <div>
                <p>Name: {text}</p>

                <NavLink activeStyle={{
                    backgroundColor: 'black',
                    color: 'red'
                }} to="/" className="my-link">Trang chu</NavLink>
            </div>
        )
    }
}
