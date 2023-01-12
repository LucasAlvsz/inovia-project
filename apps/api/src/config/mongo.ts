import mongoose from "mongoose"

const mongoUrl = process.env.MONGO_URL

mongoose.set("strictQuery", false)
const mongoDb = mongoose.connect(mongoUrl)

const main = async () => {
	await mongoDb
		.then(() => console.log("Connected to MongoDB"))
		.catch(err => {
			console.log(err)
			process.exit(1)
		})
}

main()

export default mongoDb
