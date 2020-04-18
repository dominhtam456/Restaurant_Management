import React, { Component } from 'react'
import FootDetailFooter from './FootDetailFooter'

export default class FoodDetail extends Component {
    render() {
        return (
            <tr id="a1" className="collapse " data-parent="#accordionRow">
                <td colSpan={8}>
                <div className="container">
                    <div className="row">
                    <div className="card-body border">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông Tin</a>
                        </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="container border">
                            <h2 className="mt-1">{'{'}{'{'}foodDetails.monan_NAME{'}'}{'}'}</h2>
                            <div className="row p-2 mt-3 ">
                                <div className="col-4">
                                <div className="card">
                                    <img width={250} height={300} src="assets/img/resources/Mon_an_va_nuoc/{{x.monan_IMG}}" />
                                </div>
                                </div>
                                <div className="col-4">
                                <table>
                                    <tbody><tr className="p-2">
                                        <td>
                                        Mã món ăn:
                                        </td>
                                        <td>
                                        {'{'}{'{'}foodDetails.monan_NO{'}'}{'}'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Loại món ăn:
                                        </td>
                                        <td>
                                        {'{'}{'{'}foodDetails.tenloai_LOAIMONAN{'}'}{'}'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Giá Bán:
                                        </td>
                                        <td>
                                        {'{'}{'{'}foodDetails.monan_PRICE{'}'}{'}'}đ
                                        </td>
                                    </tr>
                                    </tbody></table>
                                </div>
                                <div className="col-4">
                                <table>
                                    <tbody><tr>
                                        <td>
                                        Đơn vị tính:
                                        </td>
                                        <td>
                                        {'{'}{'{'}foodDetails.monan_UNIT{'}'}{'}'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Trạng thái:
                                        </td>
                                        <td>
                                        {'{'}{'{'}foodDetails.monan_STATUS{'}'}{'}'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{verticalAlign: 'top'}}>
                                        Thành Phần:
                                        </td>
                                        <td>
                                        <span >- {'{'}{'{'}z.nguyenlieu.nguyenlieu_NAME{'}'}{'}'}<br /><br /></span>
                                        </td>
                                    </tr>
                                    </tbody></table>
                                </div>
                            </div>
                            </div>
                            <div>
                            <FootDetailFooter />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...
                        </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </td>
            </tr>
        )
    }
}
