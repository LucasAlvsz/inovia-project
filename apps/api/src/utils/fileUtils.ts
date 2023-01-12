import path from "path"
import { unlink } from "fs"

import { InternalServerError } from "@/errors"

const getPictureUrl = (pictureKey: string) => {
	return `${process.env.BASE_URL}/files/${pictureKey}`
}

const deleteByFilename = (filename: string) => {
	unlink(
		path.resolve(__dirname, "..", "..", "tmp", "uploads", filename),
		err => {
			if (err) {
				throw new InternalServerError("Error deleting file")
			}
		}
	)
}

export default {
	getPictureUrl,
	deleteByFilename,
}
