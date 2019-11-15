module.exports = {
	get1: async (req, res) => {
		res.send('Hello World!');
	},
	get2: async (req, res) => {
		res.send('GET request to the homepage');
	},
	get3: async (req, res) => {
		res.json({ name: 'luis' });
	}
};
