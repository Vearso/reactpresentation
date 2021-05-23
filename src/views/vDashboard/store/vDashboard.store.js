import { createSlice }  from '@reduxjs/toolkit';
import { toDoListMock } from 'views/vDashboard/store/toDoListMock';

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    toDoList: toDoListMock,
  },
  reducers: {
    addItem: (state) => {
      const itemToAdd = {
        title: '',
        description: '',
        id: (state.toDoList.length + 1).toString(),
        checked: false,
        subItems: [],
      };

      state.toDoList = [
        ...state.toDoList,
        itemToAdd,
      ];
    },
    addSubItem: (state, action) => {
      const currentItem = state.toDoList.find(item => item.id === action.payload);
      const lengthOfSubItems = currentItem.subItems.length + 1;
      const newId = action.payload + '-' + lengthOfSubItems.toString();

      const itemToAdd = {
        title: '',
        description: '',
        id: newId,
        checked: false,
      };

      state.toDoList = state.toDoList.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            subItems: [
              ...item.subItems,
              itemToAdd,
            ],
          };
        }
        return item;
      });
    },

    deleteSubItem: (state, action) => {
      const separateId = action.payload.split('-');
      state.toDoList = state.toDoList.map(item => {
        if (item.id === separateId[ 0 ]) {
          return {
            ...item,
            subItems: item.subItems.filter(subItem => subItem.id !== action.payload),
          };
        }
        return item;
      });
    },

    deleteItem: (state, action) => {
      state.toDoList = state.toDoList.filter(item => action.payload !== item.id);
    },

    editItem: (state, action) => {
      state.toDoList = state.toDoList.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.form.title,
            description: action.payload.form.description,
          };
        }
        return item;
      });
    },

    editSubItem: (state, action) => {
      const separateId = action.payload.id.split('-');
      console.log(action.payload);
      state.toDoList = state.toDoList.map(item => {
        if (item.id === separateId[ 0 ]) {
          return {
            ...item,
            subItems: item.subItems.map(subItem => {
              if (subItem.id === action.payload.id) {
                return {
                  ...subItem,
                  title: action.payload.form.title,
                  description: action.payload.form.description,
                };
              }
              return subItem;
            }),
          };
        }
        return item;
      });
    },

    checkItem: (state, action) => {
      state.toDoList = state.toDoList.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
    },

    checkSubItem: (state, action) => {
      const separateId = action.payload.split('-');
      state.toDoList = state.toDoList.map(item => {
        if (item.id === separateId[ 0 ]) {
          return {
            ...item,
            subItems: item.subItems.map(subItem => {
              if (subItem.id === action.payload) {
                return {
                  ...subItem,
                  checked: !subItem.checked,
                };
              }
              return subItem;
            }),
          };
        }
        return item;
      });
    },
  },
});

export const {
  checkItem,
  checkSubItem,
  addItem,
  addSubItem,
  deleteSubItem,
  deleteItem,
  editItem,
  editSubItem,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;