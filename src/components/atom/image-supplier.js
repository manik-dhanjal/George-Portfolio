import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const ImageSupplier = () => {

  // Don't forget to set the size of your image in
  // fluid(maxWidth: 300, quality: 100) {
  const { allFile } = useStaticQuery(graphql`
  {
    allFile(
      filter: {relativeDirectory: {eq: "illustrations"}}
      sort: {fields: name}
    ) {
      edges {
        node {
          childImageSharp {
            fixed(height: 400) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
  `);
  console.log(allFile)
  return ( allFile.edges );
};

export default ImageSupplier;