export const query = graphql`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/trusted/"}}) {
      edges {
        node {
          frontmatter {
            name
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 700) {
                  src
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`