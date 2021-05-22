import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer   from './views/vDashboard/store/vDashboard.store';

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});