import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'

class DeletePanel extends Component {
    
    render() {
        return (
            <div className="modal-content ">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalDeleteMaterials">Xác Nhận Xóa</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p style={{whiteSpace: 'normal'}}>Bạn sẽ xóa bàn có mã là
                    <b>{'{'}{'{'}this.props.table.id{'}'}{'}'}</b> có tên là
                    <b>{'{'}{'{'}foodDetails.monan_NAME{'}'}{'}'}</b></p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => this.ondelete()}>Đồng ý</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Hủy</button>
                </div>
                </div>
        )
    }
}
export default inject("tableManageStore")(observer(DeletePanel))