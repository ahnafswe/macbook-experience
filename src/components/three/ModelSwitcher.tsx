"use client";

import { PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import { MacbookModel16 } from "../models/Macbook-16";
import { MacbookModel14 } from "../models/Macbook-14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 0.4;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group: any, opacity: number) => {
	if (!group) return;

	group.traverse((child: any) => {
		if (child.isMesh) {
			child.material.transparent = true;
			gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
		}
	});
};

const moveGroup = (group: any, x: number) => {
	if (!group) return;

	gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

export function ModelSwitcher({
	isMobile,
	scale,
}: {
	isMobile: boolean;
	scale: number;
}) {
	const largeMacbookRef = useRef(null);
	const smallMacbookRef = useRef(null);

	const showLargeMacbook = scale === 0.08 || scale === 0.05;

	useGSAP(() => {
		if (showLargeMacbook) {
			moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
			moveGroup(largeMacbookRef.current, 0);
			fadeMeshes(smallMacbookRef.current, 0);
			fadeMeshes(largeMacbookRef.current, 1);
		} else {
			moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);
			moveGroup(smallMacbookRef.current, 0);
			fadeMeshes(largeMacbookRef.current, 0);
			fadeMeshes(smallMacbookRef.current, 1);
		}
	}, [scale]);

	const controlsConfig = {
		snap: true,
		config: { mass: 1, tension: 0, friction: 25 },
	};

	return (
		<>
			<PresentationControls
				polar={[-Math.PI, Math.PI]}
				{...controlsConfig}
			>
				<group ref={largeMacbookRef}>
					<MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
				</group>
			</PresentationControls>
			<PresentationControls
				polar={[-Math.PI, Math.PI]}
				{...controlsConfig}
			>
				<group ref={smallMacbookRef}>
					<MacbookModel14 scale={isMobile ? 0.04 : 0.07} />
				</group>
			</PresentationControls>
		</>
	);
}
