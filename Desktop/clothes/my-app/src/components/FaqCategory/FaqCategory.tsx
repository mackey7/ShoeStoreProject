import React from 'react'
import Styled from 'styled-components'

const FaqCategorySection = Styled.section`
    background: #ebe7df;
    padding:40px 0px;
`

const FaqCategoryWrapper = Styled.div`
    width:80%;
    margin:auto;
    background: #f5f2ec;
    padding:40px;

`
const H2 = Styled.h2`
    padding:30px 0px;
    font-size:40px;
    text-align:center;

`
const Row = Styled.div`
    display:flex;
    flex-direction:column;
    padding:40px 0px;
    border-bottom:2px solid #a6a6a6;
`

const MiddleRow = Styled.div`
    display:flex;
    flex-direction:row;
    padding:10px 0px;
`
const Sign = Styled.span`
    font-weight:900;
    margin-right:30px;
`

const QuestionText = Styled.p``
const AnswerText = Styled.p``

const FaqCategory: React.SFC = () => {

    return (
        <FaqCategorySection>

            <FaqCategoryWrapper>

                <H2>FAQ</H2>
                <Row>
                    <MiddleRow>
                        <Sign>Q:</Sign>
                        <QuestionText>Lorem ipsum dolor sit.</QuestionText>
                    </MiddleRow>
                    <MiddleRow>
                        <Sign>A:</Sign>
                        <AnswerText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, consequuntur error. Ullam tempora obcaecati animi laborum repellendus veritatis minima aut velit beatae maiores voluptates praesentium tempore delectus, atque eaque dicta, sapiente aliquid porro. Nulla magni molestias eligendi quo earum odio cupiditate culpa aut explicabo laborum velit accusamus blanditiis odit voluptas numquam harum, ad ipsa. Molestiae incidunt minus ratione odio obcaecati, aut architecto necessitatibus porro nisi. Deserunt voluptatum dicta minus voluptatibus.</AnswerText>
                    </MiddleRow>
                </Row>
                <Row>
                    <MiddleRow>
                        <Sign>Q:</Sign>
                        <QuestionText>Lorem ipsum dolor sit.</QuestionText>
                    </MiddleRow>
                    <MiddleRow>
                        <Sign>A:</Sign>
                        <AnswerText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi magnam repudiandae quaerat in fuga corrupti labore molestiae deleniti repellat minima.</AnswerText>
                    </MiddleRow>
                </Row>
                <Row>
                    <MiddleRow>
                        <Sign>Q:</Sign>
                        <QuestionText>Lorem ipsum dolor sit.</QuestionText>
                    </MiddleRow>
                    <MiddleRow>
                        <Sign>A:</Sign>
                        <AnswerText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias labore laudantium pariatur omnis possimus dicta cupiditate temporibus illo beatae, modi officia facilis. Laudantium fuga vel eius quibusdam? Voluptates consequuntur quo similique doloribus eaque est nesciunt vel ducimus, necessitatibus, pariatur autem ratione, modi a neque. Vero explicabo atque est nisi.</AnswerText>
                    </MiddleRow>
                </Row>
                <Row>
                    <MiddleRow>
                        <Sign>Q:</Sign>
                        <QuestionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, placeat?</QuestionText>
                    </MiddleRow>
                    <MiddleRow>
                        <Sign>A:</Sign>
                        <AnswerText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque assumenda blanditiis aliquam quos ut, rerum quibusdam dolorem excepturi labore corrupti dolore atque sint? Iure, rerum facere. Est, eius aut dolores blanditiis modi accusantium vero soluta exercitationem? Officiis molestias atque porro, vero, ex sunt voluptas perferendis dignissimos sapiente, laudantium amet ad. Quis non deserunt officiis molestias reprehenderit qui architecto, doloribus voluptates?</AnswerText>
                    </MiddleRow>
                </Row>
                <Row>
                    <MiddleRow>
                        <Sign>Q:</Sign>
                        <QuestionText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</QuestionText>
                    </MiddleRow>
                    <MiddleRow>
                        <Sign>A:</Sign>
                        <AnswerText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit a mollitia eligendi id, iusto alias dicta sint tempora optio ad animi omnis perspiciatis fugit quae doloremque! Cupiditate magnam fuga modi illo excepturi natus. Pariatur excepturi autem doloribus totam cupiditate officia. Cupiditate tempore sapiente ad dolorem. Distinctio dolore dolores ducimus explicabo ad nisi at, veritatis tempora, ex laborum nobis pariatur ea quia temporibus. Ea eveniet vero vel iure expedita, architecto explicabo odio commodi repellat dicta recusandae quidem dolore corporis. Corporis assumenda obcaecati minus necessitatibus voluptatem aut pariatur esse sequi. Dolorem adipisci commodi culpa omnis nihil, sequi quisquam non beatae quo.</AnswerText>
                    </MiddleRow>
                </Row>
            </FaqCategoryWrapper>
        </FaqCategorySection>
    )
}

export default FaqCategory