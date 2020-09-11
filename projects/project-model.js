const db = require("../data/db-config.js");

module.exports = {
	getProjects,
	getTasks,
	getResources,
	getProjectByID,
	getProjectTasks,
	addProject,
	addTask,
	addResource,
};

// GET REQUESTS
function getProjects() {
	return db("projects");
}
function getTasks() {
	return db("tasks");
}
function getResources() {
	return db("resources");
}

// GET PROJECT BY ID
function getProjectByID(id) {
	return db("projects").where("id", "=", id).first();
}

// ADDING A PROJECT TO THE LIST OF PROJECTS
function addProject(project) {
	return db("projects")
		.insert(project)
		.returning("id")
		.then((ids) => {
			const id = ids[0];

			return getProjectByID(id);
		});
}

// ADDING A TASK TO THE LIST OF TASKS
function addTask(task) {
	return db("tasks")
		.insert(task)
		.returning("id")
		.then((ids) => {
			const id = ids[0];

			return getTasks;
		});
}

// ADDING A RESOURCE TO THE LIST OF THE RESOURCES
function addResource(resource) {
	return db("resources")
		.insert(resource)
		.returning("id")
		.then((ids) => {
			const id = ids[0];

			return getResources;
		});
}

// not sure yet
function getProjectByID(projects_id) {
	return db("projects")
		.where({ projects_id })
		.join("tasks", "projects.id", "=", "tasks.projects_id")
		.select(
			"tasks.id",
			"tasks.task_description",
			"tasks.projects_id",
			"projects.name",
			"projects.project_description"
		);
}
