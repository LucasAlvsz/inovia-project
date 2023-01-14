import path from "path"
import { Request } from "express"
import multer, { FileFilterCallback } from "multer"

import { UnprocessableEntityError } from "@/errors"

/** MAGIC NUMBERS */

const IMAGE_MAXFILESIZE = 1024 * 1024 // 1MB

/** ************* */

const storageTypes = {
	local: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"))
		},
		filename: (req, file, cb) => {
			cb(null, `${Date.now()}-${file.originalname.replace(/\s/g, "")}`)
		},
	}),
}

const imageOptions = {
	dest: path.resolve(__dirname, "..", "..", "tmp", "uploads"),
	storage: storageTypes[process.env.STORAGE_TYPE],
	fileFilter: (
		req: Request,
		file: Express.Multer.File,
		cb: FileFilterCallback
	) => {
		const allowedMimes = ["image/jpeg", "image/png", "image/jpg"]
		if (!allowedMimes.includes(file.mimetype)) {
			cb(new UnprocessableEntityError("Invalid file type"))
			return
		}
		cb(null, true)
	},

	limits: {
		fileSize: IMAGE_MAXFILESIZE,
	},
}

export default { imageOptions }
