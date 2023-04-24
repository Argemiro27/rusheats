import React from "react";
import * as S from "./style";
import { FaHome, FaShoppingCart, FaHamburger, FaSignOutAlt, FaUserAlt, FaUserTie} from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <S.MenuContainer>
        <Link to={"/home"}><S.Icon>
          <FaHome size={20}/>
        </S.Icon></Link>
        <Link to={"/produtos"}><S.Icon>
          <FaHamburger size={20} />
        </S.Icon></Link>
        <Link to={"/carrinho"}><S.Icon>
          <FaShoppingCart size={20} />
        </S.Icon></Link>
        <Link to={"/perfil"}><S.Icon>
          <FaUserAlt size={20} />
        </S.Icon></Link>
        <S.Icon>
          
        </S.Icon>
        <Link to={"/adm"}><S.Icon>
          <FaUserTie size={20} />
        </S.Icon></Link>
        <Link to={"/login"}><S.Icon>
          <FaSignOutAlt size={20} />
        </S.Icon></Link>
      </S.MenuContainer>
    </>
  );
};

export default Menu;
