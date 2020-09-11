exports.seed = function (knex, Promise) {
	return knex("projects").insert([
		{
			id: 1,
			name: "Write An Essay",
			project_description:
				"A person will sit in front of a computer and type a lengthy essay about the importance of learning to write essays. Will require a computer, desk, typing, concentration, and coffee.",
			completed: false,
		},
		{
			id: 2,
			name: "Node Sprint 2",
			project_description:
				"A person will complete the second Sprint within the Node Unit without going insane. Will require a computer, concentration, coffee, lofi, anxiety.",
			completed: false,
		},
	]);
};
