import { projects } from '$lib/constants/projects';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const project = projects.find((p) => p.id === params.id);

	if (!project) {
		throw error(404, 'Project not found!');
	}

	return {
		project: project.raw()
	};
}
