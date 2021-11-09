import React, {useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import styled from 'styled-components';
import Moon from "./components/moon/moon";
import Star from "./components/star/star";
import ShootingStar from "./components/shooting-star/shooting-star";

interface NightSkyProps {
}

const NightSky = (props: NightSkyProps) => {
    console.log('props:', props)

    const [fullpageDrag, setFullpageDrag] = useState(true);
    const windowSize = {x: window.innerWidth, y: window.innerHeight};
    const randomize = (pos: number) => Math.random() * pos;
    const createElements = (num: number) => [...Array(num)];

    return (
        <ReactFullpage
            licenseKey='key'
            scrollingSpeed={1500}
            dragAndMove={fullpageDrag && window.innerWidth < 768}
            dragAndMoveKey={process.env.REACT_APP_DRAGMOVE_KEY}
            render={() => (
                <ReactFullpage.Wrapper>
                    <StyledSectionThree className="section">   {createElements(150).map((el, i) => (
                        <Star
                            key={i}
                            scale={randomize(1)}
                            delay={randomize(1)}
                            xPos={randomize(windowSize.x)}
                            yPos={randomize(windowSize.y)}
                        />
                    ))}</StyledSectionThree>
                    <StyledSectionTwo className="section"> {createElements(7).map((el, i) => (
                        <ShootingStar
                            key={i}
                            startX={randomize(windowSize.x)}
                            startY={randomize(windowSize.y)}
                            delay={randomize(10)}
                        />
                    ))}
                        {createElements(50).map((el, i) => (
                            <Star
                                key={i}
                                scale={randomize(1)}
                                delay={randomize(1)}
                                xPos={randomize(windowSize.x)}
                                yPos={randomize(windowSize.y) / 1.25}
                            />
                        ))}</StyledSectionTwo>
                    <StyledSectionOne className="section active">
                        <div style={{display: "flex", justifyContent: 'right'}}>
                            <Moon/>
                        </div>
                    </StyledSectionOne>
                </ReactFullpage.Wrapper>
            )}
        />
    );
}

const StyledSectionOne = styled.section`
  background: linear-gradient(180deg, #3b5171 0%, #b1abb7 65.1%, #fee4b8 100%);

  .moon-wrapper {
    position: absolute;
    top: 15vh;
    right: 20vw;
    cursor: move;
    padding: 5rem;

    img {
      pointer-events: none;
    }
  }
`;

const StyledSectionTwo = styled.section`
  background: linear-gradient(180deg, #162945 0%, #3b5171 100%);
`;

const StyledSectionThree = styled.section`
  background: linear-gradient(180deg, #0b192f 0%, #162945 100%);
`;
export default NightSky;
