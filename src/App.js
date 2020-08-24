import React from "react";
import "./App.css";

const DRUMS = [
  {
    id: "1",
    padId: "Q",
    padName: "Q",
    src:
      "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Drum%20Kick%2016-924-Free-Loops.com.mp3",
  },
  {
    id: "2",
    padId: "W",
    padName: "W",
    src: "http://www.denhaku.com/r_box/sr16/sr16bd/md%20stomp.wav",
  },
  {
    id: "3",
    padId: "E",
    padName: "E",
    src: "http://www.phatdrumloops.com/audio/wav/bootleggin.wav",
  },
  {
    id: "4",
    padId: "A",
    padName: "A",
    src:
      "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Amen%20Drumloop%20170bpm-657-Free-Loops.com.mp3",
  },
  {
    id: "5",
    padId: "S",
    padName: "S",
    src:
      "http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Crash%20N%20Roll-5886-Free-Loops.com.mp3",
  },
  {
    id: "6",
    padId: "D",
    padName: "D",
    src: "https://www.freesound.org/data/previews/197/197541_3172867-lq.mp3",
  },
  {
    id: "7",
    padId: "Z",
    padName: "Z",
    src:
      "http://www.mzentertainment.com/drumset_samples/sabian_b8_hihats_14.mp3",
  },
  {
    id: "8",
    padId: "X",
    padName: "X",
    src:
      "http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Hand%20Drum%20with%20Delay-5205-Free-Loops.com.mp3",
  },
  {
    id: "9",
    padId: "C",
    padName: "C",
    src:
      "http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/128%20Techno%20Loop-12444-Free-Loops.com.mp3",
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      drumPadId: "",
      padName: "",
    };
    this.playDrum = this.playDrum.bind(this);
    this.listenKeyDown = this.listenKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.listenKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.listenKeyDown);
  }
  listenKeyDown() {
    window.addEventListener("keydown", (event) => {
      if (
        event.key.toLowerCase() === "q" ||
        event.key.toLowerCase() === "w" ||
        event.key.toLowerCase() === "e" ||
        event.key.toLowerCase() === "a" ||
        event.key.toLowerCase() === "s" ||
        event.key.toLowerCase() === "d" ||
        event.key.toLowerCase() === "z" ||
        event.key.toLowerCase() === "x" ||
        event.key.toLowerCase() === "c"
      )
        this.playDrum({ padId: event.key.toUpperCase(), padName: event.key });
    });
  }
  playDrum(drumData) {
    this.setState({
      play: true,
      drumPadId: drumData.padId,
      padName: drumData.padName,
    });
    var temp = document.getElementById(drumData.padId);
    console.log(temp);
    temp.play();
  }
  render() {
    const drumPad = DRUMS.map((drum, index) => {
      return (
        <span key={index}>
          <button
            className="drum-pad"
            onClick={() => this.playDrum(drum)}
            id={drum.id}
          >
            <audio
              src={drum.src}
              id={drum.padId}
              className="clip"
              type="audio/mp3"
            ></audio>

            {drum.padName}
          </button>
        </span>
      );
    });
    return (
      <div id="drum-machine">
        <div id="display">
          {drumPad}
          {this.state.padName}
          <div id="videoState"></div>
        </div>
      </div>
    );
  }
}

export default App;
