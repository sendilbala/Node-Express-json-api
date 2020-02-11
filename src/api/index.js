import { version } from '../../package.json';
import { Router } from 'express';
import conditions from './conditions';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/conditions', conditions({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
