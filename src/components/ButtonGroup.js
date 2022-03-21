import { useCallback, useEffect } from "react";

const audioList = [
  [
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      id: "Heater-1",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      id: "Heater-2",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      id: "Heater-3",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      id: "Heater-4",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      id: "Clap",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      id: "Open-HH",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      id: "Kick-n'-Hat",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      id: "Kick",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      id: "Closed-HH",
    },
  ],
  [
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      id: "Chord-1",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      id: "Chord-2",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      id: "Chord-3",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      id: "Shaker",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      id: "Open-HH",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      id: "Closed-HH",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      id: "Punchy-Kick",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      id: "Side-Stick",
    },
    {
      link: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      id: "Snare",
    },
  ],
];

const keyList = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

function ButtonGroup(props) {
  const fireAudio = useCallback(
    (source) => {
      let audio = new Audio(source);

      audio.volume = props.volume / 100;
      audio.play();
    },
    [props.volume]
  );
  const { setDisplay } = props;
  const findAudio = useCallback(
    (event) => {
      const keyPressed = event.key.toUpperCase();
      const index = keyList.findIndex((each) => each === keyPressed);
      if (index !== -1 && props.power) {
        fireAudio(audioList[props.currentPlaylist][index].link);
        setDisplay(audioList[props.currentPlaylist][index].id);
      }
    },
    [props.currentPlaylist, fireAudio, setDisplay, props.power]
  );

  useEffect(() => {
    document.addEventListener("keydown", findAudio);

    return () => {
      document.removeEventListener("keydown", findAudio);
    };
  }, [props.currentPlaylist, findAudio]);

  return (
    <div className="button-wrapper col-8">
      {audioList[props.currentPlaylist].map((each, index) => {
        return (
          <button
            id={each.id}
            key={each.id}
            className="btn btn-warning drum-pad"
            onClick={fireAudio.bind(null, each.link)}
          >
            {keyList[index]}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonGroup;
