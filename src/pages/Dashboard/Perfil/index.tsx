import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Contained, Loading, MenuComponent } from "../../../components";

const Perfil = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="Perfil">
          <MenuComponent />
          <Contained>

          </Contained>
        </div>
      )}
    </>
  );
};

export default Perfil;
