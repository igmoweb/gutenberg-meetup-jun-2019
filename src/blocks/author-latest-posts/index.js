import textDomain from '../../../../meetup-gutenberg-final/src/utils/text-domain';
import Edit from './Edit';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

// Register the AUthor latest posts block
registerBlockType( 'meetup/author-latest-posts', {
	title: __( 'Author Latest Posts', textDomain ),
	icon: 'admin-users',
	category: 'meetup',
	attributes: {
		perPage: {
			type: 'number',
			default: 3,
		},
	},
	edit: Edit,
	save() {
		// Rendered in PHP
		return null;
	},
} );
