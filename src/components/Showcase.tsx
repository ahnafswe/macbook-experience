"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

export function Showcase() {
	const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

	useGSAP(() => {
		if (!isTablet) {
			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: "#showcase",
					start: "top top",
					end: "bottom top",
					scrub: true,
					pin: true,
				},
			});

			timeline
				.to(".mask img", {
					scale: 1.1,
				})
				.to(".content", {
					opacity: 1,
					y: 0,
					ease: "power1.in",
				});
		}
	}, [isTablet]);

	return (
		<section id="showcase">
			<div className="media">
				<video
					src="/videos/game.mp4"
					loop
					muted
					autoPlay
					playsInline
				/>
				<div className="mask">
					<img src="/mask-logo.svg" />
				</div>
			</div>
			<div className="content">
				<div className="wrapper">
					<div className="lg:max-w-md">
						<h2>Rocket chips</h2>
						<div className="space-y-5 mt-6 pe-10">
							<p>
								Introducing{" "}
								<span className="text-white">
									M5, M5 Pro, and M5 Max, the next generation
									of Apple silicon
								</span>
								.
							</p>
							<p>
								They drive next-level Apple Intelligence on Mac,
								so you can code, render, and accomplish massive
								workflows with ease. All in a design that's
								unbelievably thin, light, and powerful.
							</p>
							<p>
								A revolutionary unified memory architecture
								delivers breathtaking bandwidth and
								responsiveness. And a next-gen GPU with
								hardware-accelerated ray tracing brings
								workstation-level graphics to your fingertips.
							</p>
							<p className="text-primary">
								Learn more about Apple Intelligence
							</p>
						</div>
					</div>

					<div className="max-w-xs space-y-12">
						<div className="space-y-2">
							<p>Up to</p>
							<h3>5x</h3>
							<p>pro rendering performance than M3</p>
						</div>
						<div className="space-y-2">
							<p>Up to</p>
							<h3>2x</h3>
							<p>CPU performance than M3</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
