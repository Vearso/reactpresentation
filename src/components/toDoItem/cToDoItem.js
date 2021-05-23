import React, {
  useEffect,
  useMemo,
  useState,
}                      from 'react';
import CActionButtons  from 'components/actionButtons/cActionButtons';
import CToDoSubItem    from 'components/toDoSubItem/cToDoSubItem';
import { useDispatch } from 'react-redux';
import { editItem }    from 'views/vDashboard/store/vDashboard.store';

const CToDoItem = (props) => {
  const {item} = props;
  const defaultFormState = useMemo(() => {
    return {
      title: item.title,
      description: item.description,
    };
  }, [ item.description, item.title ]);

  const dispatch = useDispatch();

  const [ editMode, setEditMode ] = useState(false);
  // const [ title, setTitle ] = useState(item.title);
  // const [ description, setDescription ] = useState(item.description);
  const [ form, setForm ] = useState(defaultFormState);

  useEffect(() => {
    if (!editMode) {
      setForm(defaultFormState);
    }
  }, [ editMode, defaultFormState ]);

  // const updateTitle = (e) => {
  //   setTitle(e.target.value);
  // };
  //
  // const updateDescription = (e) => {
  //   setDescription(e.target.value);
  // };

  const updateForm = (e) => {
    setForm({
      ...form,
      [ e.target.name ]: e.target.value,
    });
  };

  const saveForm = (e) => {
    e.preventDefault();
    dispatch(editItem({
      id: item.id,
      form,
    }));
    setEditMode(false);
  };

  return (
    !editMode ?
    <div className="flex flex-col p-2">
      <span className="font-bold text-2xl">{item.title}</span>
      <span className="p-2 text-xl">{item.description}</span>

      <CActionButtons id={item.id}
                      type={'ITEM'}
                      editMode={editMode}
                      onSetEditMode={setEditMode}
                      checked={item.checked} />

      {item.subItems.map(subItem =>
        <div key={subItem.id}
             className="bg-gray-100 w-5/6 self-end my-2 rounded-md">

          <CToDoSubItem subItem={subItem} />
        </div>,
      )}
    </div> :
    <div className="flex flex-col p-2">
      <form className="flex flex-col p-2"
            onSubmit={saveForm}
            onChange={updateForm}>

        <input className="mb-2 font-bold text-2xl"
               defaultValue={form.title}
               name="title" />

        <textarea className="text-xl"
                  defaultValue={form.description}
                  name="description" />

        <button type={'submit'}>Save</button>
      </form>

      <CActionButtons id={item.id}
                      type={'ITEM'}
                      editMode={editMode}
                      onSetEditMode={setEditMode}
                      checked={item.checked} />

      {item.subItems.map(subItem =>
        <div key={subItem.id}
             className="bg-gray-100 w-3/4 self-end my-2 rounded-md">

          <CToDoSubItem subItem={subItem} />
        </div>,
      )}
    </div>
  );
};

export default CToDoItem;