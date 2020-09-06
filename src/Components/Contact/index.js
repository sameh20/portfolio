import React from "react";
import {
  ContactSection,
  Form,
  FormInput,
  Input,
  InputEmail,
  InputExp,
  InputText,
  InputSub,
  TextArea,
  ContactTitle,
  Span,
} from "./style.js";
import Footer from "./../footer";

const Contact = () => {
  return (
    <React.Fragment>
      <ContactSection>
        <div className="container">
          <ContactTitle>
            <Span>Drop </Span>Me A line
          </ContactTitle>
          <Form>
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputExp type="text" className="sub" placeholder="Your Subject" />
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSub type="submit" value="Send Message" />
          </Form>
        </div>
      </ContactSection>
      <Footer />
    </React.Fragment>
  );
};
export default Contact;
