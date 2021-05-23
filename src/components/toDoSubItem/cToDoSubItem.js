import React, { useState } from 'react';
import { useDispatch }     from 'react-redux';
import CActionButtons      from 'components/actionButtons/cActionButtons';
import { editSubItem }     from 'views/vDashboard/store/vDashboard.store';

const CToDoSubItem = ({ subItem }) => {
  const dispatch = useDispatch();

  const [ editMode, setEditMode ] = useState();
  const [ form, setForm ] = useState({
    title: subItem.title,
    description: subItem.description,
  });

  const updateForm = (e) => {
    setForm({
      ...form,
      [ e.target.name ]: e.target.value,
    });
  };

  const saveForm = (e) => {
    e.preventDefault();
    dispatch(editSubItem({
      id: subItem.id,
      form,
    }));
    setEditMode(false);
  };

  return (
    !editMode ?
    <div className="flex flex-col">
      <span className="p-2 font-bold text-lg">{subItem.title}</span>
      <span className="p-4">{subItem.description}</span>
      <CActionButtons id={subItem.id}
                      type={'SUB-ITEM'}
                      editMode={editMode}
                      onSetEditMode={setEditMode}
                      checked={subItem.checked} />
    </div> :
    <div className="flex flex-col">

      <form className="flex flex-col p-2"
            onSubmit={saveForm}
            onChange={updateForm}>

        <input className="mb-2 text-lg font-bold"
               defaultValue={form.title}
               name="title" />

        <textarea defaultValue={form.description}
                  name="description" />

        <button type={'submit'}>Save</button>
      </form>

      <CActionButtons id={subItem.id}
                      type={'SUB-ITEM'}
                      editMode={editMode}
                      onSetEditMode={setEditMode}
                      checked={subItem.checked} />
    </div>
  );
};

export default CToDoSubItem;