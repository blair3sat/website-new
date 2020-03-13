import Link from "next/link";
import React, { useState, useLayoutEffect, Component } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import Nav from "../components/nav";
import { SmallSat } from "../components/Smallsat";

import { Parallax, Background } from "react-parallax";
import { LandingContainer } from "../components/Landing";

const AboutUsContainer = styled.section`
  background-color: #eee;
  overflow: auto;

  .section-title {
    font-size: 4em;
    //margin: 1em auto 1rem auto;
    text-align: center;
  }
  hr {
    margin: auto;
    border: none;
    box-shadow: none;
    width: 3em;
    height: 6px;
    background-color: #4b4;
  }

  .item {
    padding: 3em 10%;
    font-size: 1.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: visible;

    &:first-child {
      margin-top: 5em;
    }

    hr {
      margin: 1.25em 0em;
    }

    .title {
      margin: 0px;
    }

    .text {
      margin: 0em;
    }

    .desc {
      background-color: #fff;
      padding: 3em;
      box-shadow: 0px 30px 30px -30px rgba(0, 0, 0, 0.25);

      padding-right: 7em;
      flex-basis: 50%;
    }
    .image {
      flex-basis: 25%;
      display: block;
      width: 350px;
      /* height: 500px; */
      object-fit: cover;

      margin: 3em -4em -4em -4em;
      box-shadow: 0px 30px 40px -30px rgba(0, 0, 0, 0.5);
      /* box-shadow: 3px 3px 40px 0px rgba(0, 0, 0, 0.15); */
    }
    .actions {
      margin-top: 1em;
      button {
        margin-left: 0px;
        margin-bottom: 0px;
      }
    }

    &:nth-child(2n) {
      flex-direction: row-reverse;
      .desc {
        padding: 3em;

        padding-left: 7em;
      }
    }
    @media (max-width: 1000px) {
      .desc {
        padding: 3em;
        flex-direction: column;
      }
    }
  }
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0
    };
  }

  componentDidMount() {
    console.log("asdf");
    document.body.addEventListener("scroll", () => {
      this.setState({
        scroll: window.scrollTop / window.innerHeight
      });
    });
  }

  render() {
    // if (process.browser) console.log("asdf");

    const { scroll } = this.state;

    return (
      <LandingContainer>
        <img className="globe" src="/static/earth8.jpg" alt="" />
        <div
          className="content"
          style={{
            transform: `translateY(${scroll * 100}%);`
          }}
        >
          <img className="logo animated" src="/static/blair3satlogo.png" alt=""/>
          <h1 className="title animated">blair3sat</h1>
          <p className="desc animated">
            An entirely student-run cubesat team at Montgomery Blair High School
            paving the way for other high school STEM teams.
          </p>
          <div className="actions animated">
            <Link href="/mission">
              <Button
                className="slide"
                background="rgba(0, 0, 0, 0)"
                color="white"
              >
                Learn more
              </Button>
            </Link>{" "}
            <Link href="/support#support">
              <Button
                className="slide"
                background="rgba(0, 0, 0, 0)"
                color="white"
              >
                Support
              </Button>
            </Link>
          </div>
        </div>
      </LandingContainer>
    );
  }
}
const Home = () => {
  return (
    <>
      <Nav />
      <Landing />
      <AboutUsContainer>
        <h1 className="section-title">About</h1>
        <hr />
        <div className="item">
          <div className="desc">
            <h2 className="title">Who are we?</h2>
            <hr />
            <p className="text">
              Blair3sat an entirely student-run cubesat team at Montgomery Blair
              High School. Our satellite will measure charge density and high
              energy particle emissions in the ionosphere, contributing to radio
              propagation models and space weather research.
            </p>
            <div className="actions">
              <Link href="/support">
                <Button className="scale" color="white" background="#090">
                  Help us get to space
                </Button>
              </Link>
            </div>
          </div>
          <img
            src="static/andrew_picture.jpg"
            alt=""
            className="image"
          />
        </div>

        <br />
        <br />
        <br />
        <br />

        <div className="item">
          <div className="desc">
            <h2 className="title">Our mission</h2>
            <hr />
            <p className="text">
              Our nanosatellite will measure the electron density of the
              ionosphere to map how radio frequency (RF) waves are affected. The
              importance of the ionosphere comes from its wide utilization in
              long-distance communications, specifically in over the horizon
              (OTH) radars. Gathering detailed information about the ionosphere
              helps account for its effects on RF signals, making communication
              cheaper and more reliable. Mapping the charge density of the
              ionosphere has been a longstanding scientific objective, and our
              team’s unique approach is designed to pave the way for future
              research.
            </p>
            <div className="actions">
              <Link href="/mission">
                <Button className="scale" color="white" background="#090">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <img
            src="static/rendering.png"
            alt="/"
            className="image"
            style={{boxShadow: "none"}}
          />
        </div>
      </AboutUsContainer>
    </>
  );
};
export default Home;
