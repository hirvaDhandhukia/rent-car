import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `}
`;

// left side of topSection for heading-text
const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

// right side of container for Image 
const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `};
`;

// main-heading for app
const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

// text below the main-heading
const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    // overflow-hidden
    max-h-28
    text-gray-800
  `};
`;

// background blob behind the img
const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
//   sm matlab for mobile, tablets   
  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
//   lg matlab larger than tablet
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

// landing-car on top of the blob
const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    mt-4
    flex-wrap
  `}
`;

export function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Rent The Best Quality Cars With Us</Slogan>
                <Description>
                    Choose the best car from our local stores or order it remotely at the best price for you and get the best quality cars for as long as you like!
                </Description>
                
                <ButtonsContainer>
                  <Button theme="outlined" text="Book Your Ride" />
                  <Button theme="filled" text="Sell Your Car"/>
                </ButtonsContainer>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg} alt="landing-car" />
                </BlobContainer>
                <StandaloneCar>
                    <img src={MclarenCarImg} alt="background" />
                </StandaloneCar>
            </RightContainer>
        </TopSectionContainer>
    )
}