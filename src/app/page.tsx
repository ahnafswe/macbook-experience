import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductViewer } from "@/components/ProductViewer";
import gsap from "gsap";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<ProductViewer />
		</>
	);
}
