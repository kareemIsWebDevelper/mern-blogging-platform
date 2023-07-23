import {motion, useInView, useAnimation} from "framer-motion";
import {useEffect, useRef} from "react";

interface ScrollAnimationProps {
	children: React.ReactNode;
}

export const ScrollAnimate = ({children}: ScrollAnimationProps) => {
	const animateRef = useRef(null);
	const isInView = useInView(animateRef, { once: false });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		} else {
			mainControls.start("hidden");
		}
	}, [isInView, mainControls])


	return (
		<motion.div
			ref={animateRef}
			variants={{
				hidden: { opacity: 0, y: 75 },
				visible: { opacity: 1, y: 0 }
			}}
			initial="hidden"
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5, delay: 0.25 }}
			animate={mainControls}
		>
			{children}
		</motion.div>
	)
}