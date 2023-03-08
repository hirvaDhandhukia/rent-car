import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.div`
    ${tw`
        flex
        list-none
    `}
`;

// how would a single navigation item would look like
// { menu?: any } is a prop to make the mobile view look better i.e. i just added a prop to include mobile css for same
const NavItem = styled.li<{ menu?: any }>`
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
    `};

    ${({ menu }) =>
        menu &&
        css`
            ${tw`
                text-white
                text-xl
                mb-3
                focus:text-white
        `};
    `};
`;

// will add react router functionalities in this
const A = styled.a`
    ${tw`
        no-underline
        // hover:underline
    `}
`;

export function NavItems() {

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    if(isMobile) {
        return (
            <Menu right styles={menuStyles}>
            <ListContainer>
                <NavItem menu><A>Home</A></NavItem>
                <NavItem menu><A>Cars</A></NavItem>
                <NavItem menu><A>Services</A></NavItem>
                <NavItem menu><A>Contact Us</A></NavItem>
            </ListContainer>
            </Menu> 
        );    
    }

    return (
        <ListContainer>
            <NavItem><A>Home</A></NavItem>
            <NavItem><A>Cars</A></NavItem>
            <NavItem><A>Services</A></NavItem>
            <NavItem><A>Contact Us</A></NavItem>
        </ListContainer>
    );
}