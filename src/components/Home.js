import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section title="Model S"
                description="Order Online for Touchiess Delivery"
                backGroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exiting Inventory"
            />
            <Section title="Model Y"
                description="Order Online for Touchiess Delivery"
                backGroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Exiting Inventory"
                 />
            <Section 
            title="Model 3"
            description="Order Online for Touchiess Delivery"
            backGroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Exiting Inventory"
            />
            <Section 
            title="Model X"
            description="Order Online for Touchiess Delivery"
            backGroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Exiting Inventory"
            />
            <Section 
            title="Solar Panels"
            description="Schedule a Virtual Consultation"
            backGroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            />
            <Section 
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            backGroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            />
            <Section 
            title="Accessories"
            description="Produce Clean Energy From Your Roof"
            backGroundImg="accessories.jpg"
            leftBtnText="Shop Now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh;
`
