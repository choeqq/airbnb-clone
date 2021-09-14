import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Sun, Moon } from "react-feather";

export default function ThemeToggle({ text, icon, className }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
      window.localStorage.setItem("airbnbTheme", "dark");
    } else {
      document.body.classList.remove("dark");
      window.localStorage.setItem("airbnbTheme", "light");
    }
  }, [isDark]);

  return (
    <Container
      className={`${className} themeToggle`}
      onClick={() => setIsDark((prevState) => !prevState)}
    >
      {icon && (
        <>{isDark ? <Sun className="sun" /> : <Moon className="moon" />}</>
      )}
      {text && "Switch Theme"}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: fit-content;
  cursor: pointer;
`;
