import Render from './Render';

const { registerPlugin } = wp.plugins;

registerPlugin(
	'meetup-post-options',
	{
		icon: 'text',
		render: Render,
	},
);
