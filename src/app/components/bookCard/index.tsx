import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import tw from "twin.macro";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
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

const SmallIcon = styled.span `
    ${tw`
        text-gray-500
        fill-current
        text-xs
        md:text-base
        ml-1
    `};
`;

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
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
    min-width: 18rem;
    // max-width: none;
    user-select: none;
    top: 2em;
    left: 0em;

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

// const DateCalendar = styled(Calendar)`
//     position: absolute;
//     min-width: 18rem;
//     user-select: none;
//     top: 3.5em;
//     left: -2em;
// `;

export function BookCard() {
    // pickup date 
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);

    // return date
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);


    // confirming the working of calendar for selecting date
    // console.log("Value: ", startDate);

    // this function toggles the value of the state
    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen);
        // to close if the returnCalendar is still open 
        if(isReturnCalendarOpen) {
            setReturnCalendarOpen(!isReturnCalendarOpen);
        }
    }
    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        // to close if the startCalendar is still open
        if(isStartCalendarOpen) {
            setStartCalendarOpen(!isStartCalendarOpen);
        }
    }

    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleStartDateCalendar}>Pick up date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
            </SmallIcon>
            {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate as any} />}
        </ItemContainer>
        <LineSeperator />
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleReturnDateCalendar}>Return date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown} />
            </SmallIcon>
            {isReturnCalendarOpen && 
                (
                    <DateCalendar 
                        offset
                        value={returnDate} 
                        onChange={setReturnDate as any} 
                    />
                )}
        </ItemContainer>
        <Marginer direction="horizontal" margin="2em" />
        <Button theme="outlined" text="Book Your Ride" />
    </CardContainer>
}