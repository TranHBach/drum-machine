import "./App.css";
import React from "react";
import ButtonGroup from "./components/ButtonGroup";
import OtherButtons from "./components/OtherButtons";
import { useState } from "react";
function App() {
  const [currentPlaylist, setCurrentPlaylist] = useState(0);
  const [power, setPower] = useState(true);
  const [description, setDescription] = useState("");
  const [volume, setVolume] = useState(30);
  function changeAudio() {
    setCurrentPlaylist((prevState) => (prevState === 0 ? 1 : 0));
  }

  function changePower() {
    setPower((prevState) => (prevState ? false : true));
  }
  function setDisplay(description) {
    setDescription(description);
  }

  function changeVolume(value) {
    setVolume(value);
  }

  return (
    <>
      <p className="text-center">
        <strong>
          I did this project a little different. Instead of using audio, I use a
          button to create an Audio object. The overall function works but I
          dont get all the test pass
        </strong><br />
        <a href="https://github.com/TranHBach/drum-machine.git">Link to my code</a>
      </p>
      <div id="drum-machine" className="App row">
        <ButtonGroup
          volume={volume}
          setDisplay={setDisplay}
          power={power}
          currentPlaylist={currentPlaylist}
        />
        <OtherButtons
          setDisplay={setDisplay}
          changeVolume={changeVolume}
          description={description}
          changePower={changePower}
          changeAudio={changeAudio}
        />
      </div>
    </>
  );
}

export default App;
