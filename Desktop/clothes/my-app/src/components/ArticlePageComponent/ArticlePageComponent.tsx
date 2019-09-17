import React from 'react'
import Styled from 'styled-components'
import uuid from 'uuid'

const ArticleSection = Styled.section`
background:#ebe7df;
width:100%;
height:100%;
display: flex;
  align-items: center;
  justify-content: center;
`
const Article = Styled.article`
max-width:900px;
background:#f9f8f7;
padding:40px;

`
const Image = Styled.img`
width:100%;
`
const H2 = Styled.h2`
font-size:40px;
text-align:center;
margin-bottom:40px;
`
const P = Styled.p`
margin:40px 0 ;
`

interface IProps {
    data: any;
    articleId: number;

}


const ArticlePageComponent: React.SFC<IProps> = ({ data, articleId }) => {
    let elem1 = articleId - 1
    let elem2 = articleId
    const DataMapToItem = data.slice(elem1, elem2).map((item: any) => (

        < Article key={uuid.v4()} >
            <H2>{item.title}</H2>
            <Image src={item.img} />
            <P>{item.content}</P>
        </Article>



    ))

    return (
        <ArticleSection>
            {DataMapToItem}
        </ArticleSection>
    )
}

export default ArticlePageComponent