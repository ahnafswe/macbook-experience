"use client";

import useMacbookStore from "@/store";
import { Canvas } from "@react-three/fiber";
import { StudioLights } from "./three/StudioLights";
import { useMediaQuery } from "react-responsive";
import { ModelSwitcher } from "./three/ModelSwitcher";

export function ProductViewer() {
	const { color, scale, setColor, setScale } = useMacbookStore();

	const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

	return (
		<section id="product-viewer">
			<div className="header flex-between">
				<h2>Take a closer look.</h2>
				<p>Drag to interact</p>
			</div>

			<div className="controls">
				<p className="info">
					MacBook Pro {scale === 0.08 ? "16" : "14"}-inch in{" "}
					{color === "#b3bbbe" ? "Silver" : "Space Black"}
				</p>

				<div className="flex-center gap-5 mt-5">
					<div className="color-control">
						<div
							onClick={() => setColor("#b3bbbe")}
							className={`bg-[#b3bbbe] ${color === "#b3bbbe" && "active"}`}
						/>
						<div
							onClick={() => setColor("#3e3e40")}
							className={`bg-dark-200 ${color === "#3e3e40" && "active"}`}
						/>
					</div>
					<div className="size-control">
						<div
							onClick={() => setScale(0.07)}
							className={
								scale === 0.07
									? "bg-white text-black"
									: "bg-transparent text-white"
							}
						>
							<p>14"</p>
						</div>
						<div
							onClick={() => setScale(0.08)}
							className={
								scale === 0.08
									? "bg-white text-black"
									: "bg-transparent text-white"
							}
						>
							<p>16"</p>
						</div>
					</div>
				</div>
			</div>

			<Canvas
				id="canvas"
				camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
			>
				<StudioLights />
				<ambientLight intensity={1} />
				<ModelSwitcher
					isMobile={isMobile}
					scale={isMobile ? scale - 0.04 : scale}
				/>
			</Canvas>
		</section>
	);
}
