import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from "../../components/seo"
import Layout from '../../containers/layout/layout'
import Header from '../../containers/layout/header/header-one'
import Footer from '../../containers/layout/footer/footer-one'
import PageHeader from '../../components/pageheader'
import { Container, Row, Col } from '../../components/ui/wrapper'
import Heading from '../../components/ui/heading'
import Sidebar from '../../containers/blog/sidebar'
import CTA from '../../containers/global/cta-area/section-one'
import Pagination from '../../components/blog/pagination'
import Blog from '../../components/blog/layout-two'
import { BlogListWrapper, BlogBoxWrapper, BlogBox } from './blog-list.style'

const BlogList = ({ data, pageContext, location, ...restProps }) => {
    const { headingStyle } = restProps;
    const blogs = data.allMarkdownRemark.edges;
    const { currentPage, numberOfPages } = pageContext;
    return (
        <Layout location={location}>
            <SEO title={`Blog: Page ${currentPage}`} />
            <Header />
            <PageHeader
                pageContext={pageContext}
                location={location}
                title="Blog Update"
            />
            <main className="site-wrapper-reveal">
                <BlogListWrapper>
                    <Container>
                        <Row>
                            <Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
                                <Sidebar />
                            </Col>
                            <Col lg={{ span: 8, order: 2 }} xs={{ span: 12, order: 1 }}>
                                <Heading {...headingStyle}>Interesting articles <span>updated daily</span></Heading>
                                <BlogBoxWrapper>
                                    {blogs.map(blog => (
                                        <BlogBox key={blog.node.fields.slug}>
                                            <Blog content={blog.node} />
                                        </BlogBox>
                                    ))}
                                </BlogBoxWrapper>
                                <Pagination
                                    rootPage="/blog"
                                    currentPage={currentPage}
                                    numberOfPages={numberOfPages}
                                />
                            </Col>
                        </Row>
                    </Container>
                </BlogListWrapper>
                <CTA />
            </main>
            <Footer />
        </Layout>
    )
}

export const query = graphql`
    query BlogListQuery($skip: Int!, $limit: Int!){
        allMarkdownRemark(
        sort: {fields: frontmatter___date, order: DESC}, 
        limit: $limit, 
        skip: $skip) {
            edges {
                node {
                    frontmatter {
                        categories
                        title
                        author {
                            name
                            image {
                                childImageSharp {
                                    fixed(width: 32, height: 32, quality: 100) {
                                        ...GatsbyImageSharpFixed_withWebp
                                    }
                                }
                            }
                        }
                        format
                        quote_text
                        quote_author
                        video_link
                        date(formatString: "LL")
                        featured_image {
                            childImageSharp {
                                fluid(maxWidth: 770, maxHeight: 420, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    presentationHeight
                                    presentationWidth
                                }
                            }
                        }
                    }
                    fields {
                        slug
                        authorId
                        dateSlug
                    }
                    excerpt
                }
            }
        }
    }
`;


BlogList.propTypes = {
    headingStyle: PropTypes.object
}

BlogList.defaultProps = {
    headingStyle: {
        as: 'h3',
        mb: '70px',
        textalign: 'center',
        child: {
            color: 'primary'
        },
        responsive: {
            medium: {
                mb: '50px'
            }
        }
    }
}

export default BlogList;