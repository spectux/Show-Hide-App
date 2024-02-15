import { useState } from 'react';
import './index.css';

const ShowHide = () => {
  const [isFirstNameVisible, setIsFirstNameVisible] = useState(false);
  const [isLastNameVisible, setIsLastNameVisible] = useState(false);

  const toggleFirstName = () => {
    setIsFirstNameVisible(!isFirstNameVisible);
  };

  const toggleLastName = () => {
    setIsLastNameVisible(!isLastNameVisible);
  };

  return (
    <div className="show-hide-container">
      <h1 className="heading">Show/Hide</h1>
      <div className="row">
        <button className="toggle-button" onClick={toggleFirstName}>
          {isFirstNameVisible ? 'Hide Firstname' : 'Show/Hide Firstname'}
        </button>
        <button className="toggle-button" onClick={toggleLastName}>
          {isLastNameVisible ? 'Hide Lastname' : 'Show/Hide Lastname'}
        </button>
      </div>
      <div className="row">
        {isFirstNameVisible && <p className="name">Joe</p>}
        {isLastNameVisible && <p className="name">Jonas</p>}
      </div>
    </div>
  );
};

export default ShowHide;

