import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Nav from "../components/nav.js";
import { Button } from "../components/Button";
import { Flipper, Flipped } from "react-flip-toolkit";

const members = Array(10)
	.fill()
	.map(() => ({
		img:
			"https://image.cnbcfm.com/api/v1/image/106069136-1565284193572gettyimages-1142580869.jpeg?v=1576531407&w=1400&h=950",
		name: "John Smith",
		team: "Programming",
		bio:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}));

const TeamContainer = styled.div`
	hr {
		margin: auto;
		border: none;
		box-shadow: none;
		width: 3em;
		height: 6px;
		background-color: #4b4;
	}
	.title {
		text-align: center;
	}
	.modal-bg {
		background-color: #000;
		opacity: 0;
		pointer-events: none;

		position: fixed;
		left: 0px;
		right: 0px;
		top: 0px;
		bottom: 0px;

		transition: opacity 0.25s ease-in-out;
		z-index: 2;

		&.visible {
			opacity: 0.25;
			pointer-events: auto;
		}
	}

	.team-grid {
		width: 80%;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		margin: auto;
		justify-content: center;
	}

	.placeholder {
		min-width: 10vw;
		min-height: 15vw;
		max-width: 10vw;
		max-height: 15vw;

		margin: 1em;
	}

	@media (max-width: 768px) {
		.placeholder {
			min-width: 80vw;
			max-width: 80vw;
			min-height: 80vw;
			max-height: 80vw;
		}
		.team-grid {
			flex-direction: column;
			align-items: center;
		}
	}
`;

const MemberContainer = styled.div`
	width: 10vw;
	height: 15vw;

	position: relative;

	overflow: hidden;

	transition: z-index 0.5s step-end;
	z-index: 1;

	background-color: #fff;

	&.selected {
		width: 100%;
		height: 100%;
		max-width: 40%;
		max-height: 60%;

		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		overflow: auto;

		transition: z-index 0.5s step-start;
		z-index: 3000;

		padding: 1em;
	}

	.content {
		width: 100%;
		overflow: hidden;
	}

	.member-img {
		min-width: 10vw;
		min-height: 10vw;
		max-width: 10vw;
		max-height: 10vw;

		margin: 1em auto;

		border-radius: 50%;

		background-position: center;
		background-size: cover;
	}

	.card-bg {
		position: absolute;
		left: 0px;
		top: 0px;
		height: 100%;
		width: 100%;
		background-color: #eee;
		z-index: -1;
	}

	.bg {
		position: fixed;
		left: 0px;
		right: 0px;
		top: 0px;
		bottom: 0px;

		background-color: #000;
		opacity: 0.75;
	}

	.member-name {
		text-align: center;
	}

	.member-desc {
	}

	@media (max-width: 768px) {
		width: 80vw;
		height: 80vw;

		.member-img {
			min-width: 40vw;
			min-height: 40vw;
			max-width: 40vw;
			max-height: 40vw;
		}

		&.selected {
			max-width: calc(100vw - 10em);
			max-height: calc(100vh - 10em);
		}
	}
`;

const TeamMember = ({ onClick, isSelected, id, img, name, team, bio }) => {
	return (
		<div className="placeholder">
			<Flipped flipId={`card-${id}`}>
				<MemberContainer
					onClick={onClick}
					className={isSelected ? "selected" : ""}>
					<Flipped flipId={`img-${id}`} translate={true} scale={true}>
						<div
							className="member-img"
							style={{
								backgroundImage: `url(${img})`
							}}
						/>
					</Flipped>
					<div className="content">
						<h1 className="member-name">{name}</h1>
						<div className="member-role">
							<span className="team">Teams:</span>
							<span className="teams">{team}</span>
						</div>
						<p className="member-desc">{bio}</p>
					</div>
				</MemberContainer>
			</Flipped>
		</div>
	);
};

export default () => {
	const [cur, setCur] = useState(null);
	return (
		<TeamContainer>
			<Nav></Nav>
			<h1 className="title">Our Team</h1>
			<hr />
			<Flipper flipKey={cur}>
				<div className="team-grid">
					{members.map((m, i) => (
						<TeamMember
							id={i}
							onClick={() => setCur(i)}
							isSelected={cur === i}
							{...m}
						/>
					))}
				</div>
			</Flipper>
			<div
				onClick={() => setCur(null)}
				className={`modal-bg ${cur === null ? "" : "visible"}`}
			/>
		</TeamContainer>
	);
};
