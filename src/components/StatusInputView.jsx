import React from "react";

const StatusInputView = () => {
  const [ expand, setExpand ] = React.useState(false);

  return (
    <div className="status">
      {expand ? (
        <div className="status-inputbox">
          <textarea placeholder="Whats on your mind" className="status-inputbox-input" />
          <span onClick={() => setExpand(!expand)} className="status-inputbox-close">
            +
          </span>
        </div>
      ) : (
        <div className="status-container" onClick={() => setExpand(!expand)}>
          Whats on your mind?
        </div>
      )}
    </div>
  );
};

export default StatusInputView;
