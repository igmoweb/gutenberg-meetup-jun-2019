const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

// Register the click to tweet block
registerBlockType( 'meetup/simple-es6', {
	title: 'Simple Block ES6',
	icon: 'carrot',
	category: 'meetup',
	attributes: {},
	edit: () => {
		return <div>A Simple Block</div>
	},
	save: () => {
		return <div className="simple-block">Simple Block render</div>;
	},
} );
