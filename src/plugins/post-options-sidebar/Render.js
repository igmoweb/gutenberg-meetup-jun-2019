const { Fragment } = wp.element;
const { PanelBody, TextControl } = wp.components;
const { PluginSidebarMoreMenuItem, PluginSidebar } = wp.editPost;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;
const { __ } = wp.i18n;

const sidebarSlug = 'meetup-post-options';

const Render = ( props ) => {
	const { subheadline, updateSubHeadline } = props;
	return (
		<Fragment>
			<PluginSidebarMoreMenuItem
				target={ sidebarSlug }
			>
				{ __( 'Post Options', 'meetup' ) }
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name={ sidebarSlug }
				title={ __( 'Post Options', 'meetup' ) }
			>
				<PanelBody>
					<TextControl
						type="text"
						label={ __( 'Subheadline', 'meetup' ) }
						value={ subheadline }
						onChange={ updateSubHeadline }
					/>
				</PanelBody>
			</PluginSidebar>
		</Fragment>
	);
};

const mapSelectToProps = ( select ) => {
	return {
		subheadline: select( 'core/editor' ).getEditedPostAttribute( 'meta' ).subheadline,
	};
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		updateSubHeadline: ( newSubheadline ) => {
			dispatch( 'core/editor' ).editPost( {
				meta: {
					subheadline: newSubheadline,
				},
			} );
		},
	};
};

export default compose( [
	withSelect( mapSelectToProps ),
	withDispatch( mapDispatchToProps ),
] )( Render );
