exports.up = function (knex) {
	return (
		knex.schema
			// TABLE ONE - PROJECTS -------------------------------------------------
			.createTable("projects", (tbl) => {
				tbl.increments("id");

				tbl.string("name").notNullable().unique();
				tbl.string("project_description");
				tbl.boolean("completed").notNullable();
			})
			// TABLE TWO - TASKS -------------------------------------------------
			.createTable("tasks", (tbl) => {
				tbl.increments("id");

				tbl.string("task_description").notNullable();
				tbl.string("notes");
				tbl.boolean("completed").notNullable();

				tbl
					.integer("projects_id")
					.unsigned()
					.notNullable()
					.references("id")
					.inTable("projects")
					.onDelete("CASCADE")
					.onUpdate("CASCADE");
				tbl
					.integer("resources_id")
					.unsigned()
					.notNullable()
					.references("id")
					.inTable("resources")
					.onDelete("CASCADE")
					.onUpdate("CASCADE");
			})
			// TABLE THREE - RESOURCESS -------------------------------------------------
			.createTable("resources", (tbl) => {
				tbl.increments("id");

				tbl.string("name").notNullable();
				tbl.string("description");
			})
	);
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("resources")
		.dropTableIfExists("tasks")
		.dropTableIfExists("projects");
};
