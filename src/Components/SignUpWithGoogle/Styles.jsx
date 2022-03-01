import styled from 'styled-components'

export const SignUpGoogleContainer=styled.div`
background-color:rgba(0,0,0,0.8);
position:absolute;
top:0;
left:0;
width:100vw;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;

.BrandContainer
{
display:flex;
justify-content:center;
margin-bottom:1rem;
}
`
export const SignUpGoogleWrapper=styled.div`
background-color:#fff;
min-width:35%;
min-height:80vh;
padding:2rem;
box-shadow:0px 0px 10px rgba(0,0,0, 0.2);
border-radius:4px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1
{
    font:bold 2rem/2rem sans-serif;
    margin-bottom:3rem;
}
h3
{
    font:600 1rem sans-serif;
    margin-bottom:1rem;
}
input,select
{
    font:normal 1rem sans-serif;
    border:1px solid rgba(0,0,0, 0.2);
    border-radius:4px;
    padding:.5rem 1rem;
    margin-bottom:2rem;
}
button
{
    font:normal 1rem sans-serif;
    border-radius:4px;
    background-color:#1d9bf0;
    color:#fff;
    padding:.5rem 2rem;
}
`



