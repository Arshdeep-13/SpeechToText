import "regenerator-runtime/runtime"
import React, { useState } from "react";
import "../assets/SpeechToText.css";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import "../assets/ButtonHover.css"


function SpeechToText() {
  try {
    if (window.location.href === "http://ar-speechtotext/speechtotext") {
      document.body.style.backgroundColor = "#F0FFFF";
      console.log("bg change")
    }
    let start = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' }).then( () => {
      console.log("done")
    }).catch( err => {
      console.log("not")
    });
    const { transcript, browserSupportsSpeechRecognition, listening } = useSpeechRecognition();
    
    const [texttocopy, settexttocopy] = useState(" ");
    const [isCopied, setCopied] = useClipboard(texttocopy);
    
    if (!browserSupportsSpeechRecognition) {
      alert("doesn't supported")
    }


  return (
    <div className="main-container my-2">
      <h1>Speech To Text Converter</h1>
      <h6>A React hook that convert speech from microphone to text and make it available to your react components</h6>
      <div className="m-3 text">
        {listening ? "Listening..." : "Click paragraph to copy to clipboard"}
        <p onClick={() => settexttocopy(transcript)} className="form-control">
          {transcript}
        </p>
      </div>
      <div className="container">
        <div className="text-container"></div>
        <div className="btn-container">
          <button className="button-86" onClick={setCopied}>
            Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
          </button>
          <button className="button-86" onClick={start}>Start Listening</button>
          <button className="button-86" onClick={SpeechRecognition.stopListening()}>
            Stop Listening
          </button>
        </div>
      </div>
    </div>
  );
} catch (error) {
  console.error("Error in SpeechToText component:", error);
}
}

export default SpeechToText;
