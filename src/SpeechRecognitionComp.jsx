import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognitionComp = () => {
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();
  console.log(transcript);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container">
      <h1>Speech to Text convertor</h1>
      <div>
        <p>{transcript}</p>
        <button className="btns">copy</button>
        <button className="btns" onClick={SpeechRecognition.startListening}>
          Start Listening
        </button>
        <button className="btns" onClick={SpeechRecognition.stopListening}>
          Stop Listening
        </button>
        <button className="btns" onClick={resetTranscript}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default SpeechRecognitionComp;
