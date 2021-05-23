import React           from 'react';
import * as Icons      from '@heroicons/react/solid';
import CToDoList       from 'components/toDoList/cToDoList';
import { useDispatch } from 'react-redux';
import { addItem }     from 'views/vDashboard/store/vDashboard.store';

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <section className="flex flex-col w-3/4 mx-auto">
      <div className="w-8 h-8 bg-green-400 self-end flex items-center justify-center rounded-md cursor-pointer m-2"
           onClick={() => dispatch(addItem())}>

        <Icons.PlusIcon />
      </div>
      <CToDoList />
    </section>
  );
};

export default Dashboard;