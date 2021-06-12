import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useForm } from 'react-hook-form';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const ContactForm = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "contact-form section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          textareaPlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const contactForm = markdownRemark.frontmatter;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Styled.ContactForm>
      <Container section>
        <TitleSection title={contactForm.title} subtitle={contactForm.subtitle} center />
        <Styled.Form
          onSubmit={handleSubmit(onSubmit)}
          action="https://getform.io/f/a70c7cc2-fc41-44e5-8edc-ffe0a9ca505c"
          method="POST"
        >
          <Styled.Input
            type="text"
            name="name"
            placeholder={contactForm.namePlaceholder}
            autoComplete="off"
            {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          <Styled.Input
            type="email"
            name="email"
            placeholder={contactForm.emailPlaceholder}
            {...register('email', { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          <Styled.TextArea
            name="message"
            placeholder={contactForm.textareaPlaceholder}
            {...register('email', { required: true })}
          ></Styled.TextArea>
          <Button primary block>
            {contactForm.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.ContactForm>
  );
};

export default ContactForm;
