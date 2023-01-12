import Joi from "joi"
import { OBJECT_ID_PATTERN } from "./utils"

const productIdSchema = Joi.string().pattern(OBJECT_ID_PATTERN).required()

export default productIdSchema
