import Lottie from "react-lottie-player";
import lottieCongratulationsJson from "../../../public/lotties/congratulations.json";
import lottieHiJson from "../../../public/lotties/hi.json";
import lottieComplete from "../../../public/lotties/complete.json";
import lottieArrowDown from "../../../public/lotties/arrow.json";
import lottieVoiceRecognition from "../../../public/lotties/voice-recognition.json";

type PropsForLottie = {
  width?: any;
  height?: any;
  loop?: boolean;
  play?: boolean;
};

export function LottieCongratulations(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieCongratulationsJson}
      play
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieHi(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieHiJson}
      play
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieComplete(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieComplete}
      play={params.play}
      style={{ width: params.width, height: params.height }}

      //   onComplete={props.onComplete}
    />
  );
}

export function LottieVoiceRecognition(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieVoiceRecognition}
      play={params.play}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}

export function LottieArrowDown(params: PropsForLottie) {
  return (
    <Lottie
      loop={params.loop || false}
      animationData={lottieArrowDown}
      play={params.play}
      style={{ width: params.width, height: params.height }}
      //   onComplete={props.onComplete}
    />
  );
}
