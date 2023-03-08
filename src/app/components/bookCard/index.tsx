import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Marginer } from "../marginer";
import { Button } from "../button";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from "../responsive";


const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-9
        md:pr-9
    `}
`;

const ItemContainer = styled.div`
    ${tw`flex relative`}
`;

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`;

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
    `}
`;

const LineSeperator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `}
`;

const DateCalendar = styled(Calendar)`
    position: absolute;
    max-width: none;
    top: 3.5em;
    left: -2em;

    ${({ offset }: any) => 
        offset &&
        css`
            left: -6em;
    `};

    @media (min-width: ${SCREENS.md}) {
        top: 3.5em;
        left: -2em;
    }
` as any;

export function BookCard() {
    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name>Pick up date</Name>
            <DateCalendar />
        </ItemContainer>
        <LineSeperator />
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name>Return date</Name>
        </ItemContainer>
        <Marginer direction="horizontal" margin="2rem" />
        <Button theme="outlined" text="Book Your Ride" />
    </CardContainer>
}