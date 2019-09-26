import React from 'react'
import Styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const TermsCategorySection = Styled.section`
    background: #ebe7df;
    padding:40px 0px;
`

const TermsCategoryWrapper = Styled.div`
    width:80%;
    margin:auto;
    background: #f5f2ec;
    padding:40px;
`

const H2 = Styled.h2`
    text-align:center;
    padding:30px 0px;
    font-size:40px;
`

const P = Styled.p`
    margin:30px 0px;
`

const OL = Styled.ol`
    margin:20px 0px 20px 40px;
`
const LI = Styled.li`
    font-weight:600;
    padding-bottom:6px;
`

const TermsCategory: React.SFC = () => {

    return (
        <TermsCategorySection>
            <ScrollAnimation animateIn='rotateIn' animateOnce={true}>
                <TermsCategoryWrapper>
                    <ScrollAnimation animateIn='bounceIn' animateOnce={true} delay={1000}>
                        <H2>Terms</H2>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='slideInLeft' animateOnce={true} delay={1000}>
                        <P> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quo maxime dolor dignissimos laudantium expedita culpa officia iste, voluptatum neque libero consequuntur assumenda cum cumque. Sed consequuntur libero obcaecati odit nesciunt repellat doloremque aspernatur excepturi facilis impedit ea quam quae placeat dolorum rerum ipsum optio qui, esse neque ut inventore atque. Voluptatem unde eius dolores voluptate officiis cupiditate a possimus iusto architecto est? Esse, accusamus aliquid rem ducimus repellendus cupiditate modi voluptatum dolorum iste odit distinctio amet nam aspernatur molestias provident, est non eos. Incidunt velit consequatur, at vitae itaque quia natus error voluptate porro explicabo enim modi esse quos ratione voluptates perspiciatis alias? Sed itaque quas similique amet quos in incidunt omnis, quidem labore. Facilis quaerat, nostrum porro recusandae, expedita error maxime nihil corrupti quisquam ipsum laborum provident corporis dolore culpa libero laudantium ab sed velit vero at inventore, quo cumque perspiciatis! Enim provident sunt dolorum alias, aut magnam? In vero nobis aspernatur, dolorem eum laudantium accusantium quas animi ab sed provident quasi enim omnis est natus, cupiditate consectetur quod tenetur incidunt nostrum facere odio ut! Ad perspiciatis sint esse id nemo libero autem cumque inventore, qui modi tempora obcaecati molestiae doloribus, alias neque at accusantium, magni quasi possimus.</P>
                    </ScrollAnimation>
                    <OL>
                        <ScrollAnimation animateIn='slideInRight' animateOnce={true} delay={1000}>
                        <LI>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, consequatur officia. Eligendi laudantium veritatis enim in minus cumque natus quasi, aut deserunt, velit consequatur voluptatem iusto porro laboriosam provident. Perspiciatis, itaque! Expedita minus repellendus sunt tempora quod culpa maiores minima eligendi, assumenda, dolore repudiandae id. Vero tempora labore dolorum. Doloribus, enim! Beatae corrupti, quibusdam illo ipsa facilis quas laboriosam eaque vitae inventore ab voluptates provident nisi. In ipsa dolorem alias possimus expedita blanditiis quasi placeat consequuntur repudiandae voluptas? Dolores voluptatum suscipit illum consectetur veritatis culpa cupiditate magni nesciunt, neque repudiandae saepe assumenda quos facere delectus aspernatur molestiae rerum dicta dignissimos doloremque minus similique exercitationem laboriosam. Dolore voluptate suscipit optio, tempora ullam pariatur eaque odio quaerat. Illo similique molestias, deleniti placeat magni omnis blanditiis porro officiis facere quod eos suscipit, qui saepe corrupti doloribus cum. Animi cupiditate dolorum perspiciatis in, excepturi dignissimos omnis nostrum eaque delectus voluptates quod non laboriosam autem. Nam expedita est autem qui eveniet maiores excepturi? Delectus laboriosam tempore consectetur commodi reprehenderit. Cumque impedit tenetur cum a quis obcaecati facilis, unde at voluptatum illum! Id ipsum asperiores ut nemo minus doloremque aliquid fuga facere molestias quisquam consequuntur pariatur reprehenderit iusto, explicabo possimus tempore dolore quidem ullam vitae sapiente.
                    </LI>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='slideInLeft' animateOnce={true} delay={1000}>
                        <LI>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis totam rerum necessitatibus voluptas distinctio debitis ipsum ipsa eos pariatur omnis corporis veritatis maiores maxime, nam cum repellat a expedita? Doloribus dignissimos ex fugiat tempora iusto laboriosam earum, omnis molestias expedita labore nisi voluptate voluptas voluptates fuga asperiores deserunt itaque modi.
    
                    </LI>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='slideInRight' animateOnce={true} delay={1000}>
                        <LI>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ex sunt quia beatae quisquam esse officia iusto ab, ipsam fugiat ratione impedit aperiam dolor illo perspiciatis autem recusandae necessitatibus sed voluptatum, dolorum voluptatibus? Laboriosam distinctio corrupti mollitia vel, at quos quisquam expedita dolores ex eaque, aliquam iure! Iure sequi vitae dolorum ut quis ipsum, aperiam eos non suscipit doloribus numquam ratione aliquid quo assumenda minus optio ex esse quod magnam ad necessitatibus. Architecto ab qui accusamus ipsam quisquam consectetur esse, autem pariatur iusto ut, quaerat repellat recusandae? Sunt maxime assumenda, alias vel reprehenderit tempora corporis consequatur aspernatur officiis odio eos.
    
                    </LI>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='slideInLeft' animateOnce={true} >
                        <LI>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia velit incidunt itaque quod magnam ipsum nesciunt sunt ducimus? Accusantium ea ipsam asperiores quam ad! Maiores nostrum possimus, earum error modi velit, ad iure enim quod maxime obcaecati totam excepturi consectetur nobis debitis repellat labore ipsam illum alias accusantium deleniti, harum dolorum. Atque, possimus iste? Non deserunt quas quos odit hic quisquam, voluptatem, minima suscipit voluptate, ipsum laudantium consectetur harum necessitatibus illo assumenda atque saepe aut adipisci exercitationem beatae? Voluptatum accusamus doloremque laborum mollitia pariatur est dolores quia numquam eius.
    
                    </LI>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='slideInRight' animateOnce={true} >
                        <LI>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, porro quasi laborum repellendus ex culpa sunt. Ea, vitae officia fugiat facilis, possimus voluptatibus mollitia atque aspernatur, delectus accusantium tempore nam!
                    </LI>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='slideInLeft' animateOnce={true} >
                        <LI>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione consequuntur, nesciunt accusantium quae adipisci earum labore, blanditiis ab sapiente eos a quisquam. Placeat vitae laboriosam eum iste facere aperiam illo cumque adipisci tempora! Qui labore veritatis, quae, cupiditate fugit delectus corrupti cumque voluptates aperiam voluptatum earum atque debitis iure ratione ad minus itaque autem iste? Voluptas dignissimos ullam cum ratione consequuntur quaerat, praesentium accusantium ex eius repellat, sit delectus perferendis earum cumque iusto cupiditate asperiores doloribus blanditiis voluptatibus!
    
                    </LI>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='slideInRight' animateOnce={true} >
                        <LI>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor facilis quas provident enim eum sapiente, ullam aperiam omnis eos odit esse ipsa a, quaerat repudiandae eveniet minima incidunt consequuntur deleniti, sint ex debitis laudantium repellat iure. Unde reprehenderit illo, ipsa omnis rem tempore adipisci dolores accusantium praesentium natus ea nesciunt harum, nobis nihil totam optio. Id earum reprehenderit magnam et assumenda a, laboriosam odit tempora voluptate quaerat odio aspernatur eos voluptatibus, inventore vel ut officia. Expedita recusandae accusamus molestiae nostrum earum. Veniam, sequi numquam dolores corrupti iure, vel fuga architecto eum, ut mollitia nostrum velit molestiae earum nihil error atque. Magnam quod tempore eaque qui placeat, harum voluptas praesentium natus quos ut ducimus hic possimus doloribus optio, error magni reiciendis? Quos ullam consequatur sequi delectus iure dolorem ipsam iusto quaerat.
    
                    </LI>
                    </ScrollAnimation>
                        <ScrollAnimation animateIn='slideInLeft' animateOnce={true} >
                        <LI>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis temporibus mollitia iusto fugiat ullam maxime impedit laudantium delectus eaque porro!
                    </LI>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='slideInRight' animateOnce={true} >
                        <LI>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, iste. Eveniet repudiandae, officia id vitae animi iure mollitia fuga vero, ad magni ipsa harum qui maxime eum impedit distinctio voluptatem.
    
                    </LI>
                    </ScrollAnimation>
                        <ScrollAnimation animateIn='slideInLeft' animateOnce={true} >
                        <LI>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, error impedit, nostrum, voluptate quisquam atque numquam repellendus at temporibus similique perspiciatis modi alias repudiandae blanditiis? Dignissimos eveniet laudantium soluta enim repellendus inventore omnis. Sapiente harum exercitationem modi nesciunt mollitia, nisi itaque saepe asperiores velit possimus fugiat quam maxime odio corrupti sint quod! Ullam ad consequuntur, nostrum maiores dicta dolorem non, quae sequi esse neque velit aut dolor laborum facere cupiditate quas nihil nemo tempora voluptate adipisci aliquid explicabo! Saepe itaque similique ea error praesentium animi cumque, repellendus consequatur voluptatibus, dolore inventore rem dignissimos temporibus accusamus fuga eos fugit molestias atque.
    
                    </LI>
                    </ScrollAnimation>

                    </OL>
           
                </TermsCategoryWrapper>
                </ScrollAnimation>
        </TermsCategorySection>
            )
        }
        
export default TermsCategory