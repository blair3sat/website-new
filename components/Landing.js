import React, { createRef } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "../pages/index";
import * as THREE from "three";
import Link from "next/link";




const fadeInUp = keyframes`
	from {
		transform: translate3d(0,40px,0)
	}

	to {
		transform: translate3d(0,0,0);
		opacity: 1
	}
`;

export const LandingContainer = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;

  background: #020307;
  color: #eee;
  z-index: 2;


  .custom-bg {
    // position: absolute;
  }

  .globe {
    width: 55vw;
    position: absolute;

    left: 50%;
    right: 0px;
    bottom: 50%;

    transform: scaleY(-1) translate(-50%, 0%);

    pointer-events: none;
  }
  .logo {
    height: 50%;
    width: 50%;
  }
  .content {
    width: 60%;
    margin: auto;

    text-align: center;

    position: absolute;
    top: calc(50% - 20em);
    left: 0;
    right: 0;
  }

  .animated {
    opacity: 0;
    animation: ${fadeInUp};
    animation-duration: 1s;
    animation-fill-mode: both;
  }
  .title {
    text-align: inherit;
    font-family: "Montserrat", sans-serif;
    font-size: 4em;
    margin: 0px;

    animation-delay: 0s;
  }

  .desc {
    font-family: Arial, sans-serif;
    animation-delay: 0.15s;
  }

  .actions {
    margin: auto -1em;
    animation-delay: 0.3s;
  }
`;
