import { RiGithubFill } from "@remixicon/react";

const Footer = () => {
	return (
		<footer className="absolute bottom-0 text-stone-200 lg:text-stone-400 py-6 mb-5 text-sm">
			<div className="flex gap-2 items-end">
				© 2024{" "}
				<a
					className="flex gap-2 items-end"
					href="https://github.com/xoxojw/find-your-champ-lol-mbti"
					target="blank"
				>
					Jiwon{" "}
					<span>
						<RiGithubFill />
					</span>
				</a>{" "}
				All rights reversed.
			</div>
		</footer>
	);
};

export default Footer;
