exports.seed = function (knex, Promise) {
	return knex("resources").insert([
		{
			id: "1",
			name: "computer",
			description:
				"a magical piece of technology that can be used for unimaginable productivity or procrastination",
		},
		{
			id: "2",
			name: "desk",
			description: "a dedicated location for responsibilities to exist and multiply",
		},
		{
			id: "3",
			name: "typing",
			description: "being able to effectively type without looking at the keys",
		},
		{
			id: "4",
			name: "full-concentration",
			description: "not allowing distractions to lead to procrastination",
		},
		{
			id: "5",
			name: "coffee",
			description:
				"pedestrian stimulant popular among people who need to perform important tasks at unreasonable times.",
		},
		{
			id: "6",
			name: "lofi",
			description: "the best background music ever",
		},
		{
			id: "7",
			name: "anxiety",
			description: "the driving force",
		},
	]);
};
