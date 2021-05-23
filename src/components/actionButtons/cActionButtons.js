import React, { Component } from 'react';
import { connect }          from 'react-redux';
import * as Icons           from '@heroicons/react/solid';
import {
  checkItem,
  checkSubItem,
  deleteItem,
  deleteSubItem,
  addSubItem,
}                           from 'views/vDashboard/store/vDashboard.store';

class CActionButtons extends Component {

  constructor(props) {
    super(props);
    this.identifier = this.props.type + ' ' + this.props.id;
  }

  componentDidMount() {
    console.log(this.identifier, 'I mounted');
  }

  componentDidUpdate() {
    console.log(this.identifier, 'Hey I updated!');
  }

  componentWillUnmount() {
    console.log(this.identifier, "I am gonna be destroyed");
  }

  addSubItem = () => {
    this.props.addSubItem(this.props.id);
  };

  deleteItem = () => {
    if (this.props.type === 'SUB-ITEM') {
      this.props.deleteSubItem(this.props.id);
    } else {
      this.props.deleteItem(this.props.id);
    }
  };

  checkItem = () => {
    if (this.props.type === 'SUB-ITEM') {
      this.props.checkSubItem(this.props.id);
    } else {
      this.props.checkItem(this.props.id);
    }
  };

  editItem = () => {
    this.props.onSetEditMode(!this.props.editMode);
  };

  render() {
    const type = this.props.type;
    const checked = this.props.checked;

    return (
      <div className={'c-action-buttons flex self-end'}>
        <div className="w-6 h-6 bg-red-400 flex items-center justify-center rounded-md cursor-pointer m-2"
             onClick={this.deleteItem}>

          <Icons.TrashIcon className={'w-4 h-4 text-white'} />
        </div>

        {type !== 'SUB-ITEM' &&
        <div className="w-6 h-6 bg-green-400 flex items-center justify-center rounded-md cursor-pointer m-2"
             onClick={this.addSubItem}>

          <Icons.PlusIcon className={'w-4 h-4 text-white'} />
        </div>}

        <div className={`w-6 h-6 flex items-center justify-center rounded-md cursor-pointer m-2 ${checked ? 'bg-green-600' : 'bg-red-600'}`}
             onClick={this.checkItem}>

          <Icons.CheckIcon className={'w-4 h-4 text-white'} />
        </div>

        <div className="w-6 h-6 flex items-center justify-center rounded-md cursor-pointer m-2"
             onClick={this.editItem}>

          <Icons.PencilIcon className={'w-4 h-4'} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkSubItem: (id) => dispatch(checkSubItem(id)),
    checkItem: (id) => dispatch(checkItem(id)),
    deleteSubItem: (id) => dispatch(deleteSubItem(id)),
    deleteItem: (id) => dispatch(deleteItem(id)),
    addSubItem: (payload) => dispatch(addSubItem(payload)),
  };
};

export default connect(null, mapDispatchToProps)(CActionButtons);