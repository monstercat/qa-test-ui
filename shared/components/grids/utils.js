
// size is a space delimited string
export const getSizes = size => {
	if (!size)
		return;

	if( !size.split ) size = "" + size

	const arrSizes = size.split(" ");
	let sizes = [];

	arrSizes.map((size) => {
		const hasOffset = size.includes("offset")
		!hasOffset ? sizes.push(`col-${size}`) : sizes.push(`${size}`)
	});

	return sizes.join(" ");
}
