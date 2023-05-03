import { faCalendarAlt, faCarSide, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

// complete container of steps description section (mainbox)
const Container = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-6
        pb-6
        lg:pt-10
        lg:pb-10
    `}
`;

// heading
const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-4xl
    text-black
    font-bold
  `};
`;

// a container that holds all 3 steps
const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-6
  `};
`;

// single step container
const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:w-96
    items-center
    transition-colors
    hover:text-red-500
    m-3
  `};
`;

// container to hold the icon
const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
  `};
`;

// title
const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
    mt-4
  `};
`;

// description for each step
const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `};
`;

// icon for each step
const StepIcon = styled.span`
  ${tw`
    text-red-500
    text-3xl
  `};
`;

export function BookingSteps() {
    return (
        <Container>
            <Title>Our Working Steps</Title>
            {/* choose location */}
            <StepsContainer>
                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                        </StepIcon>
                    </Step>
                    <StepTitle>Choose Location</StepTitle>
                    <StepDescription>
                        Find the nearest Rentcar point and book your car.
                    </StepDescription>
                </StepContainer>

                {/* pick up date */}
                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </StepIcon>
                    </Step>
                    <StepTitle>Pick-Up Date</StepTitle>
                    <StepDescription>
                        Pickup the Best Date to rent a car for you.
                    </StepDescription>
                </StepContainer>

                {/* book the car */}
                <StepContainer>
                    <Step>
                        <StepIcon>
                            <FontAwesomeIcon icon={faCarSide} />
                        </StepIcon>
                    </Step>
                    <StepTitle>Book Your Car</StepTitle>
                    <StepDescription>
                        Book your nice car with ease in one single click
                    </StepDescription>
                </StepContainer>
            </StepsContainer>
        </Container>
    )
}