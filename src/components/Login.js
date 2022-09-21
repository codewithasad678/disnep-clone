import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="./images/cta-logo-one.svg" />
            <SignUp>Get All There</SignUp>
            <Description>
            ​Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="./images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login
const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before{
        position: absolute;
        content:"";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        background-image: url("images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
    }
`

const CTA = styled.div`
    width: 90%;
    max-width: 650px;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    background-color: #0063e5;
    color: #f9f9f9;
    font-weight: 600;
    text-align: center;
    width: 100%;
    padding: 10px 20px;
    border: 2px solid rgb(249,249,249);
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    text-transform: uppercase;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
`