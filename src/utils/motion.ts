export const fadeInVariant = (direction: string, value: number) => {
	return {
		initial: {
			opacity: 0,
			[direction]: value,
		},
		animate: {
			opacity: 1,
			[direction]: 0,
			transiton: { duration: 1 }
		}
	};
};