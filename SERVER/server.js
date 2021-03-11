const express = require ('express');
const app = express();
const { cloudinary } = require('./utils/cloudinary');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get("/api/images", async (req, res) => {
	const { resources } = await cloudinary.search
		.expression('folder:site_paul')
		.sort_by('public_id', 'desc')
		.max_results(30)
		.execute();

	const publicIds = resources.map((file) => file.public_id);
	res.send(publicIds);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});