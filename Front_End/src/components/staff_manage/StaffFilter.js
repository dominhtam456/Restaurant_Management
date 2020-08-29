import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'

class StaffFilter extends Component {
    constructor(props) {
        super(props);
        this.act = React.createRef();
        this.deact = React.createRef();
        this.pv = React.createRef();
        this.tn = React.createRef();
        this.db = React.createRef();
        this.ad = React.createRef();
      }
      onclick() {
        let act1 = "";
        let deact1 = "";
        let pv1 = "";
        let tn1 = "";
        let db1 = "";
        let ad1 = "";
        this.act.current.checked ? (act1 = "1") : (act1 = "-1");
        //console.log(act1);
        this.deact.current.checked ? (deact1 = "0") : (deact1 = "-1");
        //console.log(deact1);
        this.pv.current.checked ? (pv1 = "1") : (pv1 = "-1");
        this.tn.current.checked ? (tn1 = "2") : (tn1 = "-1");
        this.db.current.checked ? (db1 = "3") : (db1 = "-1");
        this.ad.current.checked ? (ad1 = "4") : (ad1 = "-1");
        this.props.staffStore.filterStaffs(act1, deact1, pv1,tn1,db1,ad1);
      }
    render() {
        return (
            <table>
        <thead>
          <tr>
            <td>Hiện trạng:</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                id="1"
                name="Active"
                value="1"
                ref={this.act}
                className="checkact"
              />
              Active
            </td>
            <td>
              <input
                type="checkbox"
                id="0"
                name="Deactive"
                value="0"
                ref={this.deact}
                className="checkdeact"
              />
              Deactive
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Chức vụ:</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                id = "1"
                name="pv"
                value="1"
                ref={this.pv}
                className="checkpv"
              />
              Phục vụ
            </td>
            <td>
              <input
                type="checkbox"
                id="2"
                name="tn"
                value="2"
                ref={this.tn}
                className="checktn"
              />
              Thu ngân
            </td>
            <td>
              <input
                type="checkbox"
                id="3"
                name="db"
                value="3"
                ref={this.db}
                className="checkdb"
              />
              Bếp
            </td>
            <td>
              <input
                type="checkbox"
                id="4"
                name="ad"
                value="4"
                ref={this.ad}
                className="checkad"
              />
              Quản trị (Admin)
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <input type="button" value="Lọc" onClick={() => this.onclick()} />
            </td>
          </tr>
        </tfoot>
      </table>
        );
    }
}

export default inject("staffStore")(observer(StaffFilter));