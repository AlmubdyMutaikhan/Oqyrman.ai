import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  resize: none;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.frametype === 'circle' ? '50%' : '0'};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
`;

const Text = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: ${props => props.textposition === 'bottom' ? '0' : props.textposition === 'center' ? '50%' : '90%'};
  transform: ${props => props.textposition === 'center' ? 'translateY(-50%)' : 'none'};
  color: ${props => props.textcolor}; /* Apply textColor here and ensure it's not passed to DOM */
`;

const ImageFrame = ({
  src,
  alt,
  frametype = 'rectangle',
  text = '',
  textposition = 'bottom',
  textcolor = 'black', // Default text color
  style,
  height='300px',
  width='300px'
}) => (
  <ImageContainer src={src} height={height} width={width} frametype={frametype} style={style} alt={alt}>
    <Text textposition={textposition} textcolor={textcolor}>{text}</Text>
  </ImageContainer>
);

export default ImageFrame;
