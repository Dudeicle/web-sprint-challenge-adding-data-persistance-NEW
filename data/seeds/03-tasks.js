exports.seed = function (knex, Promise) {
	return knex("tasks").insert([
		{
			id: "1",
			task_description: "sit at computer for essay",
			notes: "",
			completed: false,
			resources_id: 1,
			projects_id: 1,
		},
		{
			id: "2",
			task_description: "drink coffee for essay",
			notes: "",
			completed: false,
			resources_id: 5,
			projects_id: 1,
		},
		{
			id: "3",
			task_description: "concentrate on essay",
			notes: "",
			completed: false,
			resources_id: 4,
			projects_id: 1,
		},
		{
			id: "4",
			task_description: "type essay frantically",
			notes: "",
			completed: false,
			resources_id: 3,
			projects_id: 1,
		},
		// PROJECT 2 BELOW HERE
		{
			id: "5",
			task_description: "sit at computer to code",
			notes: "",
			completed: false,
			resources_id: 1,
			projects_id: 2,
		},
		{
			id: "6",
			task_description: "be anxious about coding",
			notes: "",
			completed: false,
			resources_id: 7,
			projects_id: 2,
		},
		{
			id: "7",
			task_description: "play lofi music",
			notes: "",
			completed: false,
			resources_id: 6,
			projects_id: 2,
		},
		{
			id: "8",
			task_description: "drink coffe for coding",
			notes: "",
			completed: false,
			resources_id: 1,
			projects_id: 2,
		},
		{
			id: "9",
			task_description: "concentrate on code",
			notes: "",
			completed: false,
			resources_id: 4,
			projects_id: 2,
		},
	]);
};

// PROJECTS ARE
// 1. WRITE AN ESSAY - sit at computer / drink coffe / concentrate / type frantically
// 2. NODE SPRINT  - sit at computer / be anxious / play lofi / drink coffe / concentrate

// PROJECT - can have multiple tasks, of course(this is like steps from previous work) - One-Many
// PROJECT - can use multiple resources, see it says use, not have. I think it means it is using the resources through the having of tasks, if the project has 3 tasks those tasks will be using multiple resources

// TASK - have only ONE project! One-One

// RESOURCES - can be used in multiple project(again used through tasks)
