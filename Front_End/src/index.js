import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "mobx-react";
import Table from './store/TableOrderStore';
import Kitchen from './store/KitchenStore';
import Statistical from './store/StatisticStore';
import Login from './store/LoginStore'
import TableStore from './store/TableStore';
import FoodStore from './store/FoodStore';
import ResourceStore from './store/ResourceStore';
import StaffStore from './store/StaffStore';
import FoodTypeStore from './store/FoodTypeStore';
import ResourceTypeStore from './store/ResourceTypeStore';
import GetChartStore from './store/GetChartStore';


ReactDOM.render(
  <React.StrictMode>
    <Provider 
      tableStore={new Table()}
      kitchenStore={new Kitchen()}
      statisticStore={new Statistical()}
      loginStore={new Login()}
      tableManageStore={new TableStore()}
      foodStore={new FoodStore()}
      resourceStore={new ResourceStore()}
      staffStore={new StaffStore()}
      foodTypeStore={new FoodTypeStore()}
      resourceTypeStore={new ResourceTypeStore()}
      getChartStore={new GetChartStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
