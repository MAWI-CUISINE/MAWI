import React from 'react'

const Singleingr = (props) => {
  return (
    <div>
      <div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
           { props.e}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Singleingr