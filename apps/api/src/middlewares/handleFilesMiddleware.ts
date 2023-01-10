import multer from "multer"

const handleFiles = (options: multer.Options, fieldName: string) => {
	return multer(options).single(fieldName)
}

export default handleFiles
