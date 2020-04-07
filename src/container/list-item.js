import React, { component, Component } from 'react';
import Item from '../components/item';

export default class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    id: 1,
                    name: 'ABC',
                    deal: 50
                },
                {
                    id: 2,
                    name: 'XYZ',
                }
            ]
        }
    }

    getDataDetail = (item) => {
        
    }

    render() {        
        return (
            <div>
                <Item data={this.state.data} getData={this.getDataDetail}/>
            </div>
        )
    }
}
