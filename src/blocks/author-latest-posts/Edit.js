const { Component, Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, RangeControl, Spinner } = wp.components;
const { withSelect } = wp.data;
const { apiFetch } = wp;
const { __ } = wp.i18n;

class Edit extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			fetching: false,
			posts: [],
		}
	}

	fetchAuthorPosts() {
		this.setState( { fetching: true } );
		apiFetch( {
			path: `/wp/v2/posts?author=${ this.props.getCurrentPost().author }&per_page=${ this.props.attributes.perPage }`,
		} ).then( ( newPosts ) => {
			this.setState( {
				posts: newPosts,
				fetching: false
			} );
		} );
	}

	componentDidUpdate( prevProps ) {
		if ( prevProps.attributes.perPage !== this.props.attributes.perPage ) {
			this.fetchAuthorPosts();
		}
	}

	componentWillMount() {
		this.fetchAuthorPosts();
	}

	/**
	 * Renderiza un control en las opciones del bloque dentro del sidebar.
	 * @return {*}
	 */
	renderInspector() {
		return (
			<InspectorControls>
				<PanelBody
					title={ __( 'Options', 'meetup' ) }
				>
					<RangeControl
						min={1}
						max={10}
						label={ __( 'Number of posts to display', 'meetup' ) }
						value={ this.props.attributes.perPage }
						onChange={ ( newValue ) => {
							this.props.setAttributes( {
								perPage: Number( newValue ),
							} );
						} }
					/>
				</PanelBody>
			</InspectorControls>
		);
	}

	render() {
		if ( this.state.fetching ) {
			return (
				<Fragment>
					{ this.renderInspector() }
					<Spinner />
				</Fragment>
			);
		}

		return (
			<Fragment>
				{ this.renderInspector() }
				<ul>
					{ this.state.posts.map( ( post ) => {
						return <li>{ post.title.rendered }</li>;
					} ) }
				</ul>
			</Fragment>
		);
	}
}


const mapSelectToProps = ( select ) => {
	return {
		getCurrentPost: select( 'core/editor' ).getCurrentPost,
	};
};

export default withSelect( mapSelectToProps )( Edit );
