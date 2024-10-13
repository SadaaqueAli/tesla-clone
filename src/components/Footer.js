import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
      <FooterContainer>
        <FooterText>
          © {new Date().getFullYear()} Tesla, Inc. All Rights Reserved.
        </FooterText>
        <FooterText>
          <FooterLink href="#">Privacy Policy</FooterLink> |{' '}
          <FooterLink href="#">Terms of Service</FooterLink>
        </FooterText>
      </FooterContainer>
    );
  };
  
  export default Footer;

  const FooterContainer = styled.footer`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  position: fixed; /* or relative */
  bottom: 0;
  width: 100%;
  z-index: 10;
`;

const FooterText = styled.p`
color:#778899;
  margin: 0;
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
