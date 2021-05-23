import React     from 'react';
import {
  useSelector,
}                from 'react-redux';
import CToDoItem from 'components/toDoItem/cToDoItem';

const CToDoList = () => {
    const toDoList = useSelector((state) => state.dashboard.toDoList);

    return (
      <>
        {toDoList.map(item =>
          <div className="rounded-md bg-gray-200 w-full mx-auto my-4"
               key={item.id}>
            <CToDoItem item={item} />
          </div>,
        )}
      </>
    );
  }
;

export default CToDoList;