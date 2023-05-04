import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
// import { useState } from "react";

// import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
// import "@brainhubeu/react-carousel/lib/styles.css";

// import Carousel, { Dots } from 'brainhubeu__react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';



const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-4xl
    text-black
    font-bold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

// const EmptyCars = styled.div`
//   ${tw`
//     w-full
//     flex
//     justify-center
//     items-center
//     text-sm
//     text-gray-500
//   `};
// `;

// const LoadingContainer = styled.div`
//   ${tw`
//     w-full
//     mt-9
//     flex
//     justify-center
//     items-center
//     text-base
//     text-black
//   `};
// `;

export function TopCars() {
    // const [current, setCurrent] = useState(0);

    // dynamic show of cars - testcars
    const testCar: ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc:
          "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
      };
    
      const testCar2: ICar = {
        name: "HONDA cITY 5 Seater Car",
        mileage: "20k",
        thumbnailSrc:
          "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol",
      };

    return(
        <TopCarsContainer>
            <Title>Explore Our Top Details</Title>
            <CarsContainer>

            <Car {...testCar2} />
            <Car {...testCar} />
            <Car {...testCar} />

                {/* <Carousel  
                    value={current}
                    onChange={setCurrent}
                    slides={[
                        (<Car {...testCar2} />),
                        (<Car {...testCar} />),
                        (<Car {...testCar2} />),
                        (<Car {...testCar} />),
                        (<Car {...testCar} />)
                    ]}
                />
                <Dots value={current} onChange={setCurrent} number={2} /> */}
            </CarsContainer>
        </TopCarsContainer>
    );
}
