// we named this as .tsx becuase it is typescript-with react component

import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";

// page container with tailwindcss styled properties
// the flex, flex-col .... etc stuff is the css-styled-compinent-classes
const PageContainer = styled.div `
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
    return <PageContainer>
        <Navbar />
    </PageContainer>
}