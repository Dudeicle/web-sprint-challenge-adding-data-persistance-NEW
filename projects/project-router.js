const express = require("express");

const Project = require("./project-model.js");

const router = express.Router();

// GET REQUESTS -------------------------//

// GET PROJECTS --- WORKING
router.get("/", (req, res) => {
	Project.getProjects()
		.then((projects) => {
			res.json(projects);
		})
		.catch((error) => {
			res.status(500).json({ message: "Failed to get list of projects" });
		});
}); // WORKING

// GET TASKS --- WORKING
router.get("/tasks", (req, res) => {
	Project.getTasks()
		.then((tasks) => {
			res.json(tasks);
		})
		.catch((error) => {
			res.status(500).json({ message: "Failed to get list of tasks" });
		});
});

// GET RESOURCES --- WORKING
router.get("/resources", (req, res) => {
	Project.getResources()
		.then((resources) => {
			res.json(resources);
		})
		.catch((error) => {
			res.status(500).json({ message: "Failed to get list of resources" });
		});
});

// GET PROJECT BY ID --- WORKING
router.get("/:id", (req, res) => {
	const { id } = req.params;

	Project.getProjectByID(id)
		.then((project) => {
			if (project) {
				res.json(project);
			} else {
				res.status(404).json({ message: "Could not find single project of that ID" });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: "Failed to get single project" });
		});
});

// POST REQUESTS ----------------------------//

// POST PROJECT --- WORKING
router.post("/", (req, res) => {
	const projectData = req.body;

	Project.addProject(projectData)
		.then((project) => {
			res.status(201).json(project);
		})
		.catch((error) => {
			res.status(500).json({ message: "Failed to create new project!" });
		});
});

// POST TASK --- WORKING
router.post("/tasks", (req, res) => {
	const taskData = req.body;

	Project.addTask(taskData)
		.then((newTask) => {
			res.status(201).json(newTask);
		})
		.catch((error) => {
			res.status(500).json({ message: "Failed to create new task!" });
		});
});

// POST RESOURCE --- WORKING
router.post("/resources", (req, res) => {
	const resourceData = req.body;

	Project.addResource(resourceData)
		.then((resource) => {
			res.status(201).json(resource);
		})
		.catch((error) => {
			res.status(500).json({ message: "Failed to create new resource!" });
		});
});

// STRETCH REQUESTS ------------------------ //

// GET PROJECT RESOURCES
router.get("/:id/resources", (req, res) => {
	const { id } = req.params;

	Project.getProjectResources(id)
		.then((projectResources) => {
			if (projectResources) {
				res.json(projectResources);
			} else {
				res
					.status(404)
					.json({ message: "Could not find the list of resources for the project with given ID" });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: "Failed to get response from database" });
		});
});

// GET PROJECT TASKS!
router.get("/:id/tasks", (req, res) => {
	const { id } = req.params;

	Project.getProjectTasks(id)
		.then((projectTasks) => {
			if (projectTasks) {
				res.json(projectTasks);
			} else {
				res
					.status(404)
					.json({ message: "Could not find the list of tasks for the project of that ID" });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: "Failed to get response from database" });
		});
});

// GET PROJECTS USING A PARTICULAR RESOURCE
// DOES NOT WORK, CANNOT UNDERSTAND WHY IT DOESN'T WORK
router.get("/resources/:id", (req, res) => {
	const id = req.body;

	Project.getProjectsUsingResource(id)
		.then((projectResourcesUsed) => {
			if (projectResourcesUsed) {
				res.status(201).json(projectResourcesUsed);
			} else {
				res.status(404).json({ message: "Cannot find project with given ID!" });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: "Failed to access data in database!" });
		});
});

module.exports = router;
