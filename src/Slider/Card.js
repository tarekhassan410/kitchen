import styled from 'styled-components'

const CardContainer = styled.div``

const ImageContainer = styled.div`
    background-image: url('https://images.unsplash.com/photo-1598546720078-8659863bc47d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
    background-size: cover;
    width: 100%;
    position: relative;
    @media (min-width: 1280px) {
        height: 450px;
    }
    @media (max-width: 1280px) {
        height: 440px;
    }
    @media  (max-width: 1024px) {
        height: 414px;
    }
    @media (max-width: 768px)  {
        height: 380px;
    }
    @media  (max-width: 480px) {
        height: 375px;
    }
    @media  (max-width: 374px) {
        height: 400px;
    }
`

const VoteCTA = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    background: rgba(19, 24, 29, 0.45);
    border: none;
    border-radius: 2rem;
    color: white;
    padding: 0.6rem 0.8rem;
    font-size: 0.6rem;
    font-weight: bold;
`

const TitleSection = styled.div`
    font-size: 16px;
    font-weight: 500;
    line-height: 29px;
`

const SubTitleSection = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 14px;
   margin: 0.3rem 0 1.3rem 0;
   color: hsla(180, 0%, 89%, 1);
   `
const AuthorSection = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 12px;
   padding: 0.7rem 0;
`

const Author = styled.span`
    font-weight: bold;
`

const Spacer = styled.hr`
    background: hsla(210, 11%, 29%, 1); height: 1px; border: 0;
`

function Card(){
    return (
        <CardContainer>
            <ImageContainer> 
                <VoteCTA> VOTE </VoteCTA>
            </ImageContainer>
            <div style={{padding: "1rem", background: "hsla(210, 21%, 18%, 1)"}}>
            <div>
                <TitleSection>  Ridiculus Lorem   </TitleSection>
                <SubTitleSection> 
                    <small> Stuttgart, Germany </small>
                    <small> July 21, 2021 </small>
                </SubTitleSection>
            </div>
            <Spacer />
            <AuthorSection> 
                <small style={{color: "hsla(180, 0%, 89%, 1)"}}> BY <Author>SPRECHER-KÜCHEN </Author>  </small>    
                <small> 120 votes </small>    
            </AuthorSection>
            </div>
        </CardContainer>
    )
}

export default Card