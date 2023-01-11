import { Request } from "express"
import { FileFilterCallback } from "multer"

import { UnprocessableEntityError } from "@/errors"

/** MAGIC NUMBERS */

const PROFILEPIC_MAXFILESIZE = 1024 * 1024 // 1MB

/** ************* */

const profilePicOptions = {
	fileFilter: (
		req: Request,
		file: Express.Multer.File,
		cb: FileFilterCallback
	) => {
		if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg")
			cb(new UnprocessableEntityError("Invalid file type"))

		cb(null, true)
	},
	limits: {
		fileSize: PROFILEPIC_MAXFILESIZE,
	},
}

export default { profilePicOptions }
