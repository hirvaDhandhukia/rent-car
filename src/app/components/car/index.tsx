import React from "react"
import tw from "twin.macro";
import styled from "styled-components";
import { ICar } from "../../../typings/car";
import { Button } from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faFillDrip, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";


interface ICarProps extends ICar {}

// car container box showing each car
const CarContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
//   max-height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `};
`;

// image of the car
const CarThumbnail = styled.div`
  width: 100%;
  height: auto;

  // css for the image to write this way
  img {
    width: 100%;
    height: 100%;
  }
`;

const CarName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `};
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    m-0
  `};
`;

// daily price text
const SmallText = styled.p`
  color: inherit;
  ${tw`
    inline-flex
    text-xs
    font-thin
    m-0
    p-0
  `};
`;

const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3
    mb-0
    pb-0
  `};
`;

const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

const CarDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `};
`;

const CarDetail = styled.span`
  ${tw`
    inline-flex
    items-center
  `};
`;

// error here in css
const CarInfo = styled.h6`
  margin: 0;
  padding: 2px;
  ${tw`
    text-gray-400
    text-xs
  `};
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-3
  `};
`;

const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `};
`;


export function Car(props: ICarProps) {
    const {
        name,
        thumbnailSrc,
        dailyPrice,
        monthlyPrice,
        mileage,
        gearType,
        gas
    } = props;

    return (
        <CarContainer>
            <CarThumbnail>
                <img src={thumbnailSrc} alt="carimage" />
            </CarThumbnail>
            <CarName>{ name }</CarName>
            <PricesContainer>
                <DailyPrice>
                    ${ dailyPrice }
                    <SmallText>/Day</SmallText>
                </DailyPrice>

                <MonthlyPrice>
                    ${ monthlyPrice }
                    <SmallText>/Month</SmallText>
                </MonthlyPrice>
            </PricesContainer>
            
            
            <Seperator />


            <CarDetailsContainer>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faTachometerAlt}  />
                    </SmallIcon>
                    <CarInfo>{ mileage }</CarInfo>
                </CarDetail>
            </CarDetailsContainer>

            <CarDetailsContainer>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faEllipsisH}  />
                    </SmallIcon>
                    <CarInfo>{ gearType }</CarInfo>
                </CarDetail>
            </CarDetailsContainer>

            <CarDetailsContainer>
                <CarDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faFillDrip}  />
                    </SmallIcon>
                    <CarInfo>{ gas }</CarInfo>
                </CarDetail>
            </CarDetailsContainer>

            <RentButton text="Rent Now" />
        </CarContainer>
    );
}