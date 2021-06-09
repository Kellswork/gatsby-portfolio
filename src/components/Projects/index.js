import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import Icon from 'components/ui/Icon';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Posts = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "recent projects section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "projects" }, published: { eq: true } } }) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              description
              stack
              github
              website
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle = markdownRemark.frontmatter;
  const posts = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <Styled.Posts>
        {posts.map((item) => {
          const {
            id,
            frontmatter: { title, cover, description, stack, website, github }
          } = item.node;

          return (
            <Styled.Post key={id}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                <Styled.Card>
                  <Styled.Image>
                    <Img width='338' height='180.08px' fluid={cover.childImageSharp.fluid} alt={title} />
                  </Styled.Image>
                  <Styled.Content>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.Description>{description}</Styled.Description>
                  </Styled.Content>
                  <Styled.Stack>Stack: {stack}</Styled.Stack>
                  <Styled.Tags>
                    <Styled.RowFlex>
                      <a href={github} target="_blank" rel="noopener noreferrer">
                        <Styled.ProjectIcon>
                          <Icon icon={faGithub} />
                        </Styled.ProjectIcon>
                      </a>
                      <a href={website} target="_blank" rel="noopener noreferrer">
                        <Styled.ProjectIcon>
                          <Icon icon={faLink} />
                        </Styled.ProjectIcon>
                      </a>
                    </Styled.RowFlex>
                  </Styled.Tags>
                </Styled.Card>
              </motion.div>
            </Styled.Post>
          );
        })}
      </Styled.Posts>
    </Container>
  );
};

export default Posts;
