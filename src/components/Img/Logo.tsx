import React from "react";

type LogoProps = {
  alt: string;
};

const Logo: React.FC<LogoProps> = ({ alt }) => {
  return (
    <img
      src="assets/logo.png"
      alt={alt}
      style={{ maxWidth: "50%", height: "auto" }}
    />
  );
};

export default Logo;

export {};
