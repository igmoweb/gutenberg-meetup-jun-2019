(function() {
	var createElement = wp.element.createElement;

	// Edit component
	var Edit = function() {
		return createElement(
			'div',
			{},
			'A Simple Block',
		);
	};

	// Triggered when saving the block
	var save = function() {
		return createElement(
			'div',
			{
				className: 'simple-block',
			},
			'Simple block render'
		);
	};

	// Register the click to tweet block
	wp.blocks.registerBlockType( 'meetup/simple-es5', {
		title: 'Simple Block ES5',
		icon: 'carrot',
		category: 'meetup',
		attributes: {},
		edit: Edit,
		save: save
	} );
}());

wp.blocks.registerBlockType( 'meetup/simple-es5', {
	title: 'Título del bloque',
	icon: 'icono dashicon',
	category: 'categoría (debe existir)',
	attributes: {},
	edit: Componente Edit,
	save: Componente Save
} );
