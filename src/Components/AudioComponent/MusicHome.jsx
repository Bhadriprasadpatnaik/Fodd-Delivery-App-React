import React, { useContext} from "react";
import { Fragment } from "react/cjs/react.development";
import { AudioContextApi } from "../../Apis/AudioContext";

import './audio.css'
import AudioList from "./AudioList";

const MusicHome = () => {
    let AUDIO = useContext(AudioContextApi);
    // let [play, setPlay] = useState(false);
    // let audioRef = useRef(false);
  return (
    <Fragment>{AUDIO.state.length >= 0 && (<AudioList audio={AUDIO.state} HandleSelect={AUDIO.HandleSelect} />)}
    </Fragment>
            )
          }
      
     

export default MusicHome;
