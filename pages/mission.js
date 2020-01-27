import React from "react";
import styled from "styled-components";
import { Converter } from "showdown";
import MissionContent, * as asdf from "../mission.mdx";
import Nav from "../components/nav";
import Link from "next/link";

const MissionContainer = styled.section`
	display: grid;
	grid-template-areas:
		"top top"
		"sidebar content";
	grid-template-rows: 35vh min-content;
	grid-template-columns: 25% auto;
	/* grid-column-gap: 2em; */
	background: #f8f8f8;

	@media (max-width: 768px) {
		grid-template-areas:
			"top"
			"sidebar"
			"content";
		grid-template-rows: 35vh min-content min-content;
		grid-template-columns: 100vw;
	}

	.content {
		grid-area: content;

		width: 80%;
		font-size: 1.5vw;
		line-height: 1.4;
		margin: 2em;
		padding: 2em;
		background: #fff;
		box-shadow: 3px 3px 30px 0px rgba(0, 0, 0, 0.15);
		box-sizing: border-box;

		font-family: "Open Sans";

		@media (max-width: 768px) {
			font-size: 1.2em;
			margin: 0em;
			width: 100%;
		}
	}

	.header {
		grid-area: top;
		background: url("/earth-horizon.jpg");
		background-size: cover;
		background-position-y: center;

		color: #fff;
		position: relative;
		box-shadow: 3px 3px 30px 0px rgba(0, 0, 0, 0.25);

		.title {
			position: absolute;
			bottom: 0;
			left: 0;
			margin: 3rem;
			font-size: 10vw;

			@media screen and (min-width: 1200px) {
				& {
					font-size: 4rem;
				}
			}
		}
	}

	.sidebar {
		grid-area: sidebar;
		padding: 2em 1em;

		.toc {
			position: sticky;
			top: 3em;
			color: #3a3;
			text-decoration: none;

			.title {
				color: #000;
				text-align: center;
				font-size: 2em;
				margin-bottom: 0em;
			}

			hr {
				margin: 0.5em auto 3em auto;
				border: none;
				box-shadow: none;
				width: 3em;
				height: 6px;
				background-color: #4b4;
			}

			a {
				transition: color 0.25s ease-in-out;
				&:hover {
					color: #4d4;
				}
			}

			li,
			a,
			ul {
				color: inherit;
				text-decoration: inherit;
			}

			ul {
				list-style-type: none;
				line-height: 1.8;
				font-size: 1.5rem;
				font-weight: normal;
			}

			ul.level-0 {
				font-weight: bold;
			}
		}
	}
`;

const TOC = ({ links, level = 0 }) => {
	if (links.length === 0) return null;
	return (
		<ul className={`level-${level}`}>
			{links.map(({ text, slug, links = [] }) => (
				<li>
					<Link href={"#" + slug}>{text}</Link>
					<TOC links={links} level={level + 1}></TOC>
				</li>
			))}
		</ul>
	);
};

const links = [
	{
		text: "Introduction",
		slug: "introduction",
		links: [{ text: "Ionosondes", slug: "ionosondes" }]
	},
	{
		text: "Our Instruments",
		slug: "our-instruments",
		links: [
			{
				text: "Photometer (Optical Payload)",
				slug: "photometer-optical-payload"
			},
			{
				text: "Ionosonde Receiver (RF Payload)",
				slug: "ionosonde-receiver-rf-payload"
			}
		]
	}
];

const Mission = () => {
	return (
		<>
			<Nav></Nav>
			<MissionContainer>
				<div className="header">
					<h1 className="title">Our Mission</h1>
				</div>
				<div className="sidebar">
					<div className="toc">
						{/* <h1 className="title">Contents</h1>
            <hr/> */}
						<TOC links={links}></TOC>
					</div>
				</div>
				<div className="content">
					<MissionContent />
				</div>
			</MissionContainer>
		</>
	);
};
export default Mission;
