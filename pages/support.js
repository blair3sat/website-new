import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Nav from "../components/nav.js";
import { Button } from "../components/Button";

const sponsors = [
	{
		name: "Maryland Space Business Roundtable",
		tier: "Silver",
		image: "/msbr_orig-324c71370056ff1e6a0a34f3659dcafd.png",
		desc:
			"Thanks to MSBR we were able to purchase new electronics for development.",
		site: "http://www.mdspace.org/"
	},
	{
		name: "MBHS Magnet Foundation",
		tier: "Bronze",
		image: "/magnet-7a0f6626331d50517d6be2df2d051931.png",
		desc:
			"Thanks to the MBHS Magnet Foundation we could attend the 2019 SmallSat conference.",
		color: "#701",
		site: "https://mbhs.edu/departments/magnet/"
	},
	{
		name: "Overleaf",
		tier: "Steel",
		image: "/overleaf-9616755adf07d8ee303b89a18d9598ba.png",
		desc:
			"Thanks to MSBR we were able to purchase new electronics for development.",
		site: "https://www.overleaf.com/"
	},
	{
		name: "Nyrad",
		tier: "Steel",
		image: "/nyrad-306a2879821e4a3f36eae64972c2c670.png",
		desc:
			"Thanks to NYRAD, we have bolstered our CSLI application with letters of support and established connections within the aerospace community.",
		site: "https://nyradspace.com/"
	},
	{
		name: "Micro Aerospace Solultions",
		tier: "Support",
		image: "/MicroALogo.png",
		desc:
			"Thanks to Micro Aerospace we were able to strengthen our CSLI application with letters of support, and have a greater understanding of the aerospace industry as a whole.",
		site: "https://www.micro-a.net/"
	}
];

const tierInfo = [
	[
		"Title plus",
		{
			// color: "#dFb700",
			benefits: `Right to Name our Satellite Team
				Right to Name our CubeSat
				Large Logo on Website
				Large Logo on Merchandise
				Monthly Updates
				Optional Position on Board to Influence Decisions
				Optional Presentation
				Optional Team Visit`,
			price: 300
		}
	],
	[
		"Title",
		{
			// color: "#dFb700",
			benefits: `
        Right to name our CubeSat
        Large Logo on Website
        Large Logo on Merchandise
        Monthly Updates
        Optional Position on Board to Influence Decisions
        Optional Presentation
        Optional Team Visit`,
			price: 300
		}
	],
	[
		"Titanium",
		{
			// color: "#dFb700",
			benefits: `
        Large Logo on Website
        Large Logo on Merchandise
        Monthly Updates
        Optional Position on Board to Influence Decisions
        Optional Presentation
        Optional Team Visit`,
			price: 300
		}
	],
	[
		"Gold",
		{
			// color: "#dFb700",
			benefits: `
        Large Logo on Website
        Large Logo on Merchandise
        Monthly Updates
        Optional Presentation
        Optional Team Visit`,
			price: 300
		}
	],
	[
		"Silver",
		{
			// color: "#dFb700",
			benefits: `
        Large Logo on Website
        Large Logo on Merchandise
        Monthly Updates
        Optional Presentation`,
			price: 300
		}
	],
	[
		"Bronze",
		{
			// color: "#dFb700",
			benefits: `
        Medium Logo on Website
        Medium Logo on Merchandise
        Monthly Updates
        Optional Presentation`,
			price: 300
		}
	],
	[
		"Steel",
		{
			// color: "#dFb700",
			benefits: `
        Small Logo on Website
        Small Logo on Merchandise`,
			price: 300
		}
	]
];

const benefits = new Set(
	tierInfo.reduce(
		(a, b) => a.concat(b[1].benefits.split("\n").map(a => a.trim())),
		[]
	)
);

const topTiers = [0, 1, 2];

const SupportContainer = styled.section`
	min-height: 100vh;
	background-color: #f4f4f4;
	overflow: auto;

	hr.all {
		margin: 0.5em auto;
		border: none;
		box-shadow: none;
		width: 50%;
		height: 2px;
		background-color: rgba(0, 0, 0, 0.1);
	}

	.section-title {
		font-size: 3em;
		margin: 2rem auto 1rem auto;
		text-align: center;
	}
	.sponsor-list {
		overflow: auto;
		display: flex;
		padding: 3rem;
		box-sizing: border-box;

		scroll-snap-type: x mandatory;

		& > *:first-child {
			margin-left: auto;
		}
		& > *:last-child {
			margin-right: auto;

			position: relative;

			&:after {
				content: "";
				position: absolute;
				min-width: 3rem;
				height: 1px;
				left: 100%;
			}
		}

		::-webkit-scrollbar {
			display: none;
		}
	}
	.support-us {
		width: 90%;
		margin: auto;

		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.top-pricing {
		display: flex;
    align-items: center;

		overflow: auto;
		scroll-snap-type: x mandatory;

		padding: 0em 3rem;
	}
`;

const SponsorCard = styled.div`
	flex: 0 0 18em;
	margin: 1em;
	border-radius: 5px;

	display: inline-flex;
	flex-direction: column;

	color: rgba(0, 0, 0, 0.75);
	background-color: #fff;
	box-shadow: 0px 30px 30px -30px rgba(0, 0, 0, 0.25);

	transition: box-shadow 0.25s ease-in-out, border 0.25s ease-in-out,
		transform 0.25s ease-in-out;
	cursor: pointer;

	scroll-snap-align: center;

	:hover {
		box-shadow: 0px 35px 35px -35px rgba(0, 0, 0, 0.25);

		/* border: 1.15px solid rgba(0, 0, 0, 0.1); */
		transform: scale(1.02);
	}

	.card-content {
		padding: 1.5em;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.top-row {
	}

	.name {
		font-size: 1.1em;
		color: rgba(0, 0, 0, 0.95);
		font-weight: 600;
	}

	.desc {
		flex-grow: 1;
		padding-top: 1.5em;
	}

	.visit {
		justify-self: flex-end;
		padding: 1.5em;
		/* padding-top: 1em;/ */
	}
`;
const SponsorLogo = styled.div`
    // max-width: 400px;
	min-height: 10em;
	padding: 1em;
	/* background-color: ${p => p.color}; */
	position: relative;

	.logo {
		left: 1em;
		top: 1em;
		right: 1em;
		bottom: 1em;

		position: absolute;

		background: url(${p => p.src});
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
	}
`;
const Sponsor = ({
	sponsor: { name, tier, image, desc, color = "#fff", site }
}) => {
	return (
		<SponsorCard>
			<SponsorLogo color={color} src={image}>
				<div className="logo" />
			</SponsorLogo>
			<div className="card-content">
				<div className="top-row">
					<div className="name">{name}</div>
					<div className="tier">{tier}</div>
				</div>
				<div className="desc">{desc}</div>
			</div>
			{/* <div>
					<a href={site}>Visit Site</a>
				</div> */}
		</SponsorCard>
	);
};

const TierContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-basis: 30%;

	box-sizing: border-box;

	margin: 2em;
	padding: 2em;

	background-color: #fff;
	color: #333;

	align-items: center;

	box-shadow: 0px 30px 35px -30px rgba(0, 0, 0, 0.15);

	hr {
		margin: 0.5em auto;
		border: none;
		box-shadow: none;
		width: 100%;
		height: 2px;
		background-color: rgba(0, 0, 0, 0.075);
	}

	.tier-name {
		text-transform: capitalize;
		font-size: 1.5em;
		margin: 0.5em 0em;
	}
	.pricing {
		font-size: 2em;
		margin: 0.5em 0em;

		:before {
			content: "$";
			font-size: 0.65em;
			vertical-align: top;
		}
	}
	.benefits {
		list-style-type: none;
		line-height: 1.8;
		color: #666;
		padding: 0px;
		text-align: center;
	}
	.callToAction {
	}
`;
const TierCard = styled(TierContainer)`
	scroll-snap-align: center;
	flex-direction: column;

	scroll-snap-align: center;
	min-width: 300px;
	max-width: 350px;
	// min-width: 250px;

	button {
		margin: 1em 0em 0em 0em;
		width: 100%;
	}

	&:nth-child(1) {
		order: 2;
		height: calc(100% + 4em);
		border: 3px solid rgba(0, 153, 0, 0.75);
	}

	&:nth-child(2) {
		order: 1;
		height: calc(100% + 2em);
		margin-left: auto;
	}
	&:nth-child(3) {
		order: 3;
		margin-right: auto;
		position: relative;

		&:after {
			content: "";
			position: absolute;
			min-width: 3rem;
			height: 1px;
			left: 100%;
		}
	}
`;
const TierRow = styled(TierContainer)`
	flex-direction: row;
	width: 80%;
	margin: 2em auto;
	padding: 1em 3%;

	hr {
		display: none;
	}

	.tier-name {
	}
	.pricing {
	}
	.benefits {
	}
	.call-to-action {
	}

	@media (max-width: 768px) {
		flex-direction: column;

		hr {
			display: block;
			margin: 0.5em auto;
			border: none;
			box-shadow: none;
			width: 50%;
			height: 2px;
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
`;

const Benefit = styled.li``;

export default () => {
	return (
		<>
			<Nav />
			<SupportContainer>
				<h1 className="section-title">Our sponsors</h1>
				<div className="sponsor-list">
					{sponsors.map(s => (
						<Sponsor sponsor={s} />
					))}
				</div>
				<div id="support" className="support-us-container">
					<h1 className="section-title">Sponsor us</h1>
					<div className="top-pricing">
						{topTiers
							.map(a => tierInfo[a])
							.map(([name, info]) => (
								<TierCard>
									<h3 className="tier-name">{name}</h3>
									<hr />
									<h2 className="pricing">{info.price}</h2>
									<hr />
									<ul className="benefits">
										{info.benefits.split("\n").map(b => (
											<Benefit>{b}</Benefit>
										))}
									</ul>
									<hr />
									<Button
										color="white"
										background="#090"
										className="call-to-action">
										Support us
									</Button>
								</TierCard>
							))}
					</div>
					<hr className="all" />
					{/* <hr className="all" /> */}
					<div className="all-pricing">
						{tierInfo.map(([name, info]) => (
							<TierRow>
								<h3 className="tier-name">{name}</h3>
								<hr />
								<h2 className="pricing">{info.price}</h2>
								<hr />
								<ul className="benefits">
									{info.benefits.split("\n").map(b => (
										<Benefit>{b}</Benefit>
									))}
								</ul>
								<hr />
								<Button
									color="white"
									background="#090"
									className="call-to-action">
									Support us
								</Button>
							</TierRow>
						))}
					</div>
				</div>
			</SupportContainer>
		</>
	);
};
