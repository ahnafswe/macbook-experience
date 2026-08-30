"use client";

import { performanceImages, performanceImgPositions } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export function Performance() {
	const sectionRef = useRef(null);
	const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

	useGSAP(
		() => {
			gsap.fromTo(
				".content p",
				{ opacity: 0, y: 10 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power2.out",
					scrollTrigger: {
						trigger: ".content",
						start: "top bottom",
						end: "top center",
						scrub: true,
						invalidateOnRefresh: true,
					},
				},
			);

			if (isMobile) return;

			const tl = gsap.timeline({
				defaults: {
					ease: "power1.inOut",
					duration: 2,
					overwrite: "auto",
				},
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top bottom",
					end: "center top",
					scrub: 1,
					invalidateOnRefresh: true,
				},
			});

			performanceImgPositions.forEach((pos) => {
				const layoutVars: Record<string, any> = {
					y: 120,
					opacity: 0,
				};

				if (pos.left !== undefined) layoutVars.left = `${pos.left}%`;
				if (pos.right !== undefined) layoutVars.right = `${pos.right}%`;
				if (pos.bottom !== undefined)
					layoutVars.bottom = `${pos.bottom}%`;
				if (pos.width !== undefined) layoutVars.width = pos.width;
				if (pos.zIndex !== undefined) layoutVars.zIndex = pos.zIndex;
				if (pos.xPercent !== undefined)
					layoutVars.xPercent = pos.xPercent;

				gsap.set(`.${pos.id}`, layoutVars);

				tl.to(`.${pos.id}`, { y: 0, opacity: 1 }, 0);
			});

			return () => {
				tl.scrollTrigger && tl.scrollTrigger.kill();
				tl.kill();
			};
		},
		{ scope: sectionRef, dependencies: [isMobile] },
	);

	return (
		<section
			id="performance"
			ref={sectionRef}
		>
			<h2>Next-level graphics performance. Game on.</h2>
			<div className="wrapper">
				{performanceImages.map((img) => (
					<img
						key={img.id}
						src={img.src}
						alt={img.id}
						className={img.id}
					/>
				))}
			</div>
			<div className="content">
				<p>
					Run graphics-intensive workflows with a responsiveness that
					keeps up with your imagination. The M5 family of chips
					features a GPU with a second-generation hardware-accelerated
					ray tracing engine that renders images faster, so gaming
					feels{" "}
					<span className="text-white">
						more immersive and realistic than ever
					</span>
					.
				</p>
				<br />
				<p>
					Dynamic Caching optimizes fast on-chip memory to
					dramatically increase average GPU utilization - driving{" "}
					<span className="text-white">a huge performance boost</span>{" "}
					for the most demanding pro apps and games.
				</p>
			</div>
		</section>
	);
}
