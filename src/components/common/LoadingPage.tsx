import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
const BackDrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
type PropsLoader = {
  color?: string;
};
const Loader = styled(motion.span)<PropsLoader>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
const loaderVariants2 = {
  animationOne: {
    x: [-10, 10],
    y: [0, -10],
    transition: {
      staggerChildren: 0.5,
      x: {
        repeat: Infinity,
        duration: 2,
        delay: 0.2,
        ease: 'easeOut',
      },
      y: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeOut',
      },
    },
  },
};
const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -20],
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

export const LoadingPage = () => {
  return (
    <BackDrop>
      <Loader color="#e83e8c" variants={loaderVariants} animate="animationOne"></Loader>
      <Loader color="#F0B400" variants={loaderVariants} animate="animationOne"></Loader>
      <Loader color="#6f42c1" variants={loaderVariants} animate="animationOne"></Loader>
    </BackDrop>
  );
};

export const SpinnerBorder = styled.span`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border 0.75s linear infinite;
  @keyframes spinner-border {
    to {
      transform: rotate(360deg);
    }
  }
`;
// width: 1rem;
//     height: 1rem;
//     border-width: 0.2em;
