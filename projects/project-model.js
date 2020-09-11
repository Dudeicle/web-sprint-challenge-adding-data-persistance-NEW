const db = require("../data/db-config.js");

module.exports = {
	getProjects,
	getTasks,
	getResources,
	getProjectByID,
	getProjectTasks,
	getProjectResources,
	getProjectsUsingResource,
	addProject,
	addTask,
	addResource,
};

// GET REQUESTS
function getProjects() {
	return db("projects");
} // WORKING
function getTasks() {
	return db("tasks");
} // WORKING
function getResources() {
	return db("resources");
} // WORKING

// GET PROJECT BY ID
function getProjectByID(id) {
	return db("projects").where("id", "=", id).first();
} // WORKING

// ADDING A PROJECT TO THE LIST OF PROJECTS
function addProject(project) {
	return db("projects")
		.insert(project)
		.returning("id")
		.then((ids) => {
			const id = ids[0];

			return getProjectByID(id);
		});
} // WORKING

// ADDING A TASK TO THE LIST OF TASKS
function addTask(task) {
	return db("tasks")
		.insert(task)
		.returning("id")
		.then((ids) => {
			const id = ids[0];

			return getTasks;
		});
} // WORKING

// ADDING A RESOURCE TO THE LIST OF THE RESOURCES
function addResource(resource) {
	return db("resources")
		.insert(resource)
		.returning("id")
		.then((ids) => {
			const id = ids[0];

			return getResources;
		});
} // WORKING

// STRETCH //

// GET LIST OF PROJECT RESOURCES
function getProjectResources(id) {
	return db
		.select("projects.id", "tasks.resources_id", "resources.name")
		.from("projects")
		.where("projects.id", "=", id)
		.join("tasks", "projects.id", "=", "tasks.projects_id")
		.join("resources", "tasks.resources_id", "=", "resources.id");
} // WORKING

// GET LIST OF PROJECT TASKS!
function getProjectTasks(projects_id) {
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
} // WORKING

// GET LIST OF PROJECTS USING A PARTICULAR RESOURCE
function getProjectsUsingResource(id) {
	return db
		.select("resources.id", "resources.name")
		.from("projects")
		.where("projects.id", "=", id)
		.join("tasks", "projects.id", "=", "tasks.projects_id")
		.join("resources", "tasks.resources_id", "=", "resources.id");
} // I CANNOT UNDERSTAND WHY THIS WONT WORK, WILL NOT RETURN A SINGLE RESOURCE BY ID! RETURN NOT RETURN ANYTHING AT ALL! ALL I GET IS AN EMPTY ARRAY HOWEVER I WRITE THIS!
