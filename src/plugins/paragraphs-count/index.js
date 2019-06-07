const { PluginBlockSettingsMenuItem } = wp.editPost;
const { registerPlugin } = wp.plugins;
const { withSelect } = wp.data;

const ParagraphsCountBlockSettingsMenuItem = ( props ) => {
	return <PluginBlockSettingsMenuItem
		allowedBlocks={ [ 'core/paragraph' ] }
		icon="welcome-view-site"
		label="Count paragraphs"
		onClick={ () => alert( props.paragraphBlocks ) }
	/>;
};

const mapSelectToProps = ( select ) => {
	const paragraphBlocks = select( 'core/editor' )
		.getBlocks()
		.filter( ( block ) => {
			return block.name === 'core/paragraph';
		} )
		.length;

	return {
		paragraphBlocks: paragraphBlocks,
	};
};

registerPlugin( 'meetup-count-paragraphs', {
	render: withSelect( mapSelectToProps )( ParagraphsCountBlockSettingsMenuItem ),
} );
