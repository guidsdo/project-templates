import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styling/GlobalStyle";
import { CurrentTheme } from "../styling/Theme";
import { GlobalCounter } from "./mobx-global-state/GlobalCounter";
import { LocalCounter } from "./react-state/LocalCounterMobx";

export const App: React.FC = () => (
    <ThemeProvider theme={CurrentTheme}>
        <GlobalStyle />
        <StyledLayout>
            <div>Hello World!</div>
            <GlobalCounter />
            <LocalCounter />
        </StyledLayout>
    </ThemeProvider>
);

const StyledLayout = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    font-family: ${({ theme }) => theme.globalFontFamily};
`;
