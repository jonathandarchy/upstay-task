import styled from 'styled-components'

export const SpinnerWrapper = styled.div`
  margin: 50px auto;
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 10px;
  > div {
    background-color: black;
    height: 100%;
    width: 5px;
    margin: 0 1px;
    display: inline-block;
    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }
  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }
  .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }
  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }
  
  @-webkit-keyframes sk-stretchdelay {
	0%, 40%, 100% {
	  -webkit-transform: scaleY(0.4);
	}
	
	20% {
	  -webkit-transform: scaleY(1);
	}
  }
	
	
  @keyframes sk-stretchdelay {
    0%, 40%, 100% {
	  transform: scaleY(0.4);
	  -webkit-transform: scaleY(0.4);
    }

    20% {
	  transform: scaleY(1);
	  -webkit-transform: scaleY(1);
    }
  }
`

