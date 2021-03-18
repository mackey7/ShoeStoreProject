import styled from 'styled-components'

export const Loaders = styled.div`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;


div {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #000;
    border-radius: 50%;
    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000 transparent transparent transparent;
}

div:nth-child(1) {
    -webkit-animation-delay: -0.45s;
    animation-delay: -0.45s;
}

div:nth-child(2) {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
}

div:nth-child(3) {
    -webkit-animation-delay: -0.15s;
    animation-delay: -0.15s;
}

@-webkit-keyframes lds-ring {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes lds-ring {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
`