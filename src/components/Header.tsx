type Props = {
	progressPercentage: number;
};

import logo from "../assets/images/logo.png"

const Header = ({ progressPercentage }: Props) => {
	return (
		<header className="container flex items-center flex-col justify-center gap-3 mt-3">
			<section id="logoSection" className="mt-2">
				<img src={logo} alt="Logo" />
			</section>

			<div className="w-3/4 bg-gray-300 rounded-full h-3 overflow-hidden">
				<div
					className="bg-red-600 h-full text-center text-white rounded-full"
					style={{ width: `${progressPercentage}%`, transition: '0.5s ease-in-out' }}
				></div>
			</div>
		</header>
	);
};

export default Header;
