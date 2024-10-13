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
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
