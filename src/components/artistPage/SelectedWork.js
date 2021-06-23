import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import HorizontalScroll from "./HorizontalScroll";
import './SelectedWork.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const BumperSection = styled.section`
	text-align: center;
	padding: 100px 16px;
	background-color: #efefef;
`;


const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;


const SampleCard = styled.img.attrs(({ artistGallery }) => ({
	src: `${artistGallery.img}` 
  }))`
  position: relative;
  height: 60vh;
  width: auto;
  background-color: #111f30;
  margin-right: 75px;
  flex-shrink: 0;
  `;

const SampleCards = React.memo( ({artistGallery}) =>
	artistGallery.map((obj, i) => <SampleCard key={`sampleCard-${i}`} artistGallery={obj}/>)
);

const SelectedWork = ({ contentMoreText, artistGallery }) => (
  <>
    <GlobalStyle />
    <Main>
      <BumperSection>
        <h2>Selected work</h2>
      </BumperSection>
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            <SampleCards artistGallery={artistGallery}/>
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
      <BumperSection>
		<h2>A few more text</h2>
      </BumperSection>

	  	<div className="content-more-text">
			{contentMoreText.map( (txt, index) => (
				<p key={index}>{txt}</p>
			))}
		</div>

    </Main>
  </>
);


export default SelectedWork;