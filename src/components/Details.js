import React from 'react'
import styled from 'styled-components'

const Details = () => {
  return (
    <Container>
        <Background>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg' />
        </Background>
        <ImageTitle>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78' />
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="./images/play-icon-black.png" />
                <span> Play</span>
            </PlayButton>
            <TrailerButton>
                <img src="./images/play-icon-white.png" />
                <span> Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src='./images/group-icon.png' />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2022 - All Product Is From Disney
        </SubTitle>
        <Description>
            lorem Ipsum Nice to have many these product from the many product etc.
            lorem Ipsum Nice to have many these product from the many product etc.
            lorem Ipsum Nice to have many these product from the many product etc.
        </Description>
    </Container>
  )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    margin-top: 40px;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    /* position:absolute; */
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;

    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    border: none;
    background-color: rgb(249,249,249);
    letter-spacing: 1.8px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        background-color: rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
    background-color: rgba(0,0,0,0.3);
    color: rgb(249,249,249);
    border: 1px solid rgb(249,249,249);
`
const AddButton = styled.button`
    margin-right:16px;
    width: 44px;
    height:44px;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    border:1px solid rgb(249,249,249) ;
    background-color: rgba(0,0,0,0.6);
    span{
        font-size: 26px;
        color: white;
        font-weight:600;
    }
`
const GroupWatchButton = styled(AddButton)` 
    background-color: rgb(0,0,0);
`

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size: 15px;
    min-height:20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height:1.4;
    font-size: 20px;
    margin-top:16px;
`