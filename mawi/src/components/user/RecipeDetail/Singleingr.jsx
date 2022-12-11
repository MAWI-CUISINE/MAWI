import React from 'react'

const Singleingr = (props) => {
  return (
    <div>
      <div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={`customCheck${props.i}`}
          />
          <label className="custom-control-label" htmlFor={`customCheck${props.i}`}>
            {props.e}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Singleingr