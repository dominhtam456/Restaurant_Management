import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div class="text-right mt-3">
                            <button type="submit" class="btn btn-danger">Lưu & thêm mới</button>
                            <button type="button" ng-click="test()" class="btn btn-secondary"
                              data-dismiss="modal">Đóng</button>
                          </div>
        );
    }
}

export default Footer;