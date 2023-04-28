/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className='relative w-full h-screen mx-auto'>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-[#39cccc]' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I'm <span className='text-[#39cccc]'>Graciliana</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						Challenged to develop a 3D visual application, <br className="sm:block hidden"/> interface and web applications
					</p>
				</div>
				<ComputersCanvas />
			</div>
		</section>
	);
};
export default Hero;
