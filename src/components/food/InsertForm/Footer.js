import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="text-right mt-3">
                <button type="submit" className="btn btn-danger">Lưu &amp; thêm mới</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
            </div>
        )
    }
}
