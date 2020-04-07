import React from 'react';
import {Link} from 'react-router-dom';


export default class item extends React.Component {
    getData(data){
        this.props.getData(data)
    }

    render() {
        const listItems = this.props.data ? this.props.data.map(
            (item, index) => {
                return (
                    <li key={item.id}>
                        <div className="inner" onClick={() => this.getData(item)}>
                            <p>ID: {item.id ? item.id : null}</p>
                            <p>{item.name ? item.name : null}</p>
                            <Link to={{ pathname: `/detail/:${item.id}`, data: item, search: `${item.deal ? `?deal=${item.deal}` : ''}`}}>View detail</Link>
                        </div>
                    </li>
                )
            }
        ) : null;

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}