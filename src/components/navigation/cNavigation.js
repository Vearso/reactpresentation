import React    from 'react';
import { Link } from 'react-router-dom';

const CNavigation = () => {
    return(
      <div className="flex justify-between mx-auto w-2/3">
        <Link to="/">Dashboard</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/someOtherPage">Some other page</Link>
      </div>
    )
}

export default CNavigation;