// ContactPage.js

import React from 'react';
import styled from 'styled-components';
import './styles.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid var(--secondary-colour);
  border-radius: 8px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactHeader = styled.h2`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  display: block;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid var(--secondary-colour);
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid var(--secondary-colour);
  width: 100%;
  height: 150px;
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  background-color: var(--primary-colour);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--secondary-colour);
  }
`;

function ContactPage() {
  return (
    <Container>
      <ContactHeader>Contact Us</ContactHeader>
      <ContactForm>
        <FormField>
          <Label htmlFor="name">Your Name</Label>
          <Input type="text" id="name" />
        </FormField>
        <FormField>
          <Label htmlFor="email">Your Email</Label>
          <Input type="email" id="email" />
        </FormField>
        <FormField>
          <Label htmlFor="message">Your Message</Label>
          <TextArea id="message" />
        </FormField>
        <FormField>
          <SubmitButton type="submit" value="Submit" />
        </FormField>
      </ContactForm>
    </Container>
  );
}

export default ContactPage;
