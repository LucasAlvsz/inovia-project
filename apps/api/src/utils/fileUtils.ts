const getPictureUrl = (pictureKey: string) => {
	return `${process.env.BASE_URL}/files/${pictureKey}`
}

export default {
	getPictureUrl,
}
