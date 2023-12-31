import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import microphoneImg from "../src/assets/microphone.png";
import useClipboard from "react-use-clipboard";
import muteImg from "./assets/mute.png";

const SpeechRecognitionComp = () => {
  const [text, setText] = useState("");
  const [isListening, setListening] = useState(false);
  const [isCopied, setCopied] = useClipboard(text);
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const handleToggleListening = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
    setListening(!isListening);
  };

  return (
    <div className="container">
      <h1>Speech to Text converter</h1>
      <div>
        <p className="para">{transcript}</p>

        <div className="btns">
          <button className="btn" onClick={setCopied}>
            {isCopied ? "Copied!" : "Copy to clipboard"}
          </button>
          <button className="btn" onClick={handleToggleListening}>
            {isListening ? (
              <img src={muteImg} className="icon" alt="Mute" />
            ) : (
              <img src={microphoneImg} className="icon" alt="Microphone" />
            )}
          </button>
          <button className="btn" onClick={resetTranscript}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeechRecognitionComp;
