import React, { Component } from 'react'

export default class TableDetailRow extends Component {
    render() {
        return (
            
                <tr>
                <td>index</td>
                <td><i className="fa fa-times" style={{color: '#F5365C', fontSize: 20}} />
                </td>
                <td>ten mon an</td>
                <td>
                    <input type="number" style={{width: '4em'}} />
                </td>
                <td>gia</td>
                <td>so luong</td>
                </tr>
            
        )
    }
}
