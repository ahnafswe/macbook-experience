"use client";

import { useEffect, useRef } from "react";

export function Hero() {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 1.5;
		}
	}, []);

	return (
		<section id="hero">
			<div>
				<h1>MacBook Pro</h1>
				<img
					src="/title.png"
					alt="MacBook Title"
				/>
				<h2>Now with M5, M5 Pro, and M5 Max.</h2>
			</div>
			<video
				ref={videoRef}
				src="/videos/hero.mp4"
				autoPlay
				muted
				playsInline
			></video>
			<button type="button">Buy</button>
			<p>From $1999 or $166.58/mo. for 12 mo.</p>
		</section>
	);
}
