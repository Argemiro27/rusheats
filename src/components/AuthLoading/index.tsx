import Lottie from "react-lottie";
import animationData from "../../lotties/authloading.json";
import * as S from "./styles";

const AuthLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <S.Container>
        <div className="modal">
          <div className="modal-content">
            <Lottie options={defaultOptions} height={50} width={50} />
          </div>
        </div>
      </S.Container>
    </div>
  );
};

export default AuthLoading;
