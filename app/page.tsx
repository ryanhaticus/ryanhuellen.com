"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	const fadeIn = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	const statItem = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<main className="min-h-screen bg-[#f0f0ee] overflow-x-hidden">
			{/* Hero Section */}
			<div className="container mx-auto px-4 py-12 md:py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
					{/* Left Column - Intro */}
					<motion.div
						className="space-y-6"
						initial="hidden"
						animate={isLoaded ? "visible" : "hidden"}
						variants={fadeIn}
					>
						<h2 className="text-2xl font-serif">Hey. I&apos;m Ryan Huellen,</h2>
						<div>
							<h1 className="text-5xl xl:text-6xl font-black leading-tightest">
								Software
							</h1>
							<div className="flex items-baseline">
								<span className="text-5xl xl:text-6xl font-serif italic leading-tightest">
									&amp; Efficiency
								</span>
							</div>
							<h1 className="text-5xl xl:text-6xl font-black leading-tightest">
								EXPERT
							</h1>
						</div>
						<p className="text-lg md:text-xl font-serif">
							Transforming manual processes into automated solutions—software
							engineering and business efficiency that streamlines, optimizes,
							and delivers results.
						</p>
						<a
							href="mailto:inquire@ryanhuellen.com"
							className="bg-black text-white rounded-full px-6 py-3 inline-flex items-center gap-2 font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-300 w-auto"
						>
							CONTACT ME
							<span className="bg-white text-black rounded-full p-1">
								<ArrowRight size={16} />
							</span>
						</a>
					</motion.div>

					{/* Middle Column - Image */}
					<div className="rounded-full overflow-hidden hidden md:block w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] shadow-2xl">
						<Image
							src="/profile.png?height=400&width=400"
							alt="Ryan Huellen portrait"
							width={400}
							height={400}
							className="object-cover w-full h-full"
							priority
						/>
					</div>

					{/* Right Column - Stats */}
					<motion.div
						className="col-span-1	lg:space-y-12 flex flex-col sm:flex-row space-y-8 sm:space-y-0 md:col-span-2 justify-around items-center w-full justify-self-center lg:block lg:col-span-1 lg:justify-self-end"
						initial="hidden"
						animate={isLoaded ? "visible" : "hidden"}
					>
						<motion.div
							className="text-center lg:text-right"
							variants={statItem}
						>
							<h3 className="text-4xl md:text-5xl font-bold">10+</h3>
							<p className="text-sm md:text-base font-serif">
								Years Experience
							</p>
						</motion.div>
						<motion.div
							className="text-center lg:text-right"
							variants={statItem}
						>
							<h3 className="text-4xl lg:text-5xl font-bold">150+</h3>
							<p className="text-sm lg:text-base font-serif">
								Projects Delivered
							</p>
						</motion.div>
						<motion.div
							className="text-center lg:text-right"
							variants={statItem}
						>
							<h3 className="text-4xl lg:text-5xl font-bold">99%</h3>
							<p className="text-sm lg:text-base font-serif">
								Client Satisfaction
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Services Section */}
			<motion.div
				className="container mx-auto px-4 py-12 md:py-20"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.4 }}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-300 pt-12">
					<motion.div
						className="space-y-4"
						whileHover={{ y: -5 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<h3 className="text-xl font-bold uppercase">
							Custom Software Development
						</h3>
						<p className="text-sm text-gray-700 font-serif">
							Tailored software solutions designed to solve your specific
							business challenges.
						</p>
					</motion.div>
					<motion.div
						className="space-y-4"
						whileHover={{ y: -5 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<h3 className="text-xl font-bold uppercase">
							Process Automation & Optimization
						</h3>
						<p className="text-sm text-gray-700 font-serif">
							Identifying and automating manual processes to save time and
							reduce errors.
						</p>
					</motion.div>
					<motion.div
						className="space-y-4"
						whileHover={{ y: -5 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<h3 className="text-xl font-bold uppercase">
							Data Analysis & Integration
						</h3>
						<p className="text-sm text-gray-700 font-serif">
							Connecting systems and analyzing data to provide actionable
							business insights.
						</p>
					</motion.div>
					<motion.div
						className="space-y-4"
						whileHover={{ y: -5 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<h3 className="text-xl font-bold uppercase">
							Efficiency Consulting
						</h3>
						<p className="text-sm text-gray-700 font-serif">
							Strategic advice to streamline operations and maximize
							productivity.
						</p>
					</motion.div>
				</div>
			</motion.div>
		</main>
	);
}
