import { Environment, Lightformer } from "@react-three/drei";

export function StudioLights() {
	return (
		<group name="lights">
			<Environment resolution={256}>
				<group>
					<Lightformer
						form="rect"
						intensity={8}
						position={[-10, 5, -5]}
						scale={10}
					/>
					<Lightformer
						form="rect"
						intensity={8}
						position={[10, 0, 1]}
						scale={10}
					/>
				</group>
			</Environment>
		</group>
	);
}
