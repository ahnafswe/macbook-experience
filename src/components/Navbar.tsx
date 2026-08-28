import { navLinks } from "@/constants";

export function Navbar() {
	return (
		<header>
			<nav>
				<img
					src="/logo.png"
					alt="Apple Logo"
				/>
				<ul>
					{navLinks.map((item) => (
						<li key={item.label}>
							<a href={item.link}>{item.label}</a>
						</li>
					))}
				</ul>
				<div className="flex-center gap-3">
					<button type="button">
						<img
							src="/search.svg"
							alt="Search"
						/>
					</button>
					<button type="button">
						<img
							src="/cart.svg"
							alt="Cart"
						/>
					</button>
				</div>
			</nav>
		</header>
	);
}
