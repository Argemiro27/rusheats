
import Lottie from 'react-lottie';
import animationData from '../../lotties/loading.json';
import * as S from "./styles";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <S.Container>
      <Lottie options={defaultOptions}
              height={420}
              width={420}
      />
      </S.Container>
    </div>
  );
};

export default Loading;