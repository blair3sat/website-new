import styled from "styled-components";
export const Button = styled.button`
  border: none;
  font-family: inherit;
  position: relative;

  font-size: 1.1rem;
  color: ${p => p.color};
  border: 1px solid ${p => p.color};
  cursor: pointer;

  background: ${p => p.background};

  transition: color 0.25s ease-in-out, transform 0.25s ease-in-out;

  padding: 0.75em 2em;
  margin: 1em;

  z-index: 1;

  outline: none;

  &.slide:before {

    pointer-events: none;

    content: "";

    position: absolute;

    left: -1px;
    top: -1px;
    bottom: -1px;
    right: 100%;

    transition: right 0.25s ease-out;
    background-color: ${p => p.color};
    z-index: -1;
  }
  &.slide:hover {
    color: #222;
    &:before {
      right: 0px;
    }
  }

  &.scale {
    border: none;
  }
  &.scale:hover {
    transform: scale(1.05);
  }
`;
export const SupportButton = styled(Button)`
  border: none;
  position: fixed;
  right: 1em;
  bottom: 1em;
  box-shadow: 0px 30px 30px -30px rgba(0, 0, 0, 0.15);
`;
