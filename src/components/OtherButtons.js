import { useRef } from "react";

const OtherButtons = (props) => {
  const slideRef = useRef();
  const slideTheBar = (event) => {
    event.stopPropagation();
    props.changeAudio();
    slideRef.current.style.float =
      slideRef.current.style.float === "right" ? "left" : "right";
  };
  function changeVolume(event) {
    props.changeVolume(event.target.value);
  }

  function powerHandler() {
    props.setDisplay("");
    props.changePower();
  }
  return (
    <div className="col-4 button-wrapper text-align">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          defaultChecked
          onChange={powerHandler}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
          <strong>Power</strong>
        </label>
      </div>
      <div id="display" className="text-center">
        <p className="info">
          <strong>{props.description}</strong>
        </p>
      </div>
      <input
        defaultValue={30}
        className="center"
        type="range"
        min={0}
        max={100}
        onChange={changeVolume}
      />

      <div className="text-center">
        <label>
          <strong className="text-center">Bank</strong>
        </label>
        <div className="BlackRectangle center" onClick={slideTheBar}>
          <div
            className="BlueRectangle"
            ref={slideRef}
            onClick={slideTheBar}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default OtherButtons;
