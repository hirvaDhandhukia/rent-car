import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `}
`;

// how would a single navigation item would look like
const NavItem = styled.li`
    ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
`;

const A = styled.a`
    ${tw`
        no-underline
        // hover:underline
    `}
`;

export function NavItems() {
    return <ListContainer>
        <NavItem><A>Home</A></NavItem>
        <NavItem><A>Cars</A></NavItem>
        <NavItem><A>Services</A></NavItem>
        <NavItem><A>Contact Us</A></NavItem>
    </ListContainer>
}