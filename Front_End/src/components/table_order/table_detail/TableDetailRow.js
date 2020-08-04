import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'
import CommonUtil from './../../../util'
import { toJS } from 'mobx'

class TableDetailRow extends Component {
    constructor(props){
        super(props)
        this.commentRef = React.createRef();
    }
    onChangeAmount(e) {
        if(this.props.order.status !== "queue" && this.props.order.status !== "cancel"){
            alert("Món ăn đang hoặc đã được thực hiện");
            return;
        }
        this.props.tableStore.setAmount(this.props.order, e.target.value)
    }

    onClickDelete() {
        if(this.props.order.status !== "queue" && this.props.order.status !== "cancel"){
            alert("Món ăn đang hoặc đã được thực hiện");
            return;
        }
        this.props.tableStore.deleteOrder(this.props.order)
    }

    onLoseFocusComment() {
        if(this.props.order.status !== "queue" && this.props.order.status !== "cancel"){
            alert("Món ăn đang hoặc đã được thực hiện");
            return;
        }
        this.props.tableStore.updateComment(this.commentRef.current.value, this.props.order.hoadonchitiet_id.monan_id);
    }

    render() {
        let style = {}
        if(this.props.order.status === "pending")
            style={backgroundColor: "white"};

        if(this.props.order.status === "processing")
            style={backgroundColor: "khaki"};
        
        if(this.props.order.status === "ready")
            style={backgroundColor: "lawngreen"};

        if(this.props.order.status === "completed")
            style={backgroundColor: "lightblue"};

        if(this.props.order.status === "cancel")
            style={backgroundColor: "lightcoral"};

        if(this.props.tableStore.isPayment){
            document.getElementById('amount-input').disable = true;
        }

        //console.log(this.commentRef.current)

        return (
            
                <tr style={style}>
                <td>{this.props.index + 1}</td>
                <td onClick={() => this.onClickDelete()}><i className="fa fa-times" style={{color: '#F5365C', fontSize: 20}} />
                </td>
                    <td>{this.props.order.tenMonAn}</td>
                <td>
                    <input type="number" style={{width: '4em'}} 
                        value={this.props.order.soluong}
                        onChange={(e) => this.onChangeAmount(e)} id="amount-input"/>
                </td>
                <td>{CommonUtil.formatVND(this.props.order.price)}</td>
                <td>{CommonUtil.formatVND(this.props.order.price * this.props.order.soluong)}</td>
                <td>
                    <textarea 
                        ref={this.commentRef}
                        onBlur={() => this.onLoseFocusComment()} rows="2" cols="20" defaultValue={this.props.order.comment} key={this.props.order.comment}></textarea>
                </td>
                </tr>
            
        )
    }
}

export default inject("tableStore")(observer(TableDetailRow));
