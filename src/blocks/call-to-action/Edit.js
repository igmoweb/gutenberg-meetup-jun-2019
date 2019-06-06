import { generateTwitterURL } from './utils';

const { RichText } = wp.editor;
const { __ } = wp.i18n;
const { withSelect } = wp.data;

const Edit = ( props ) => {
	const { className, attributes, getPermalink, setAttributes } = props;

	const handleChange = ( nextValue ) => {
		const permalink = getPermalink();
		setAttributes( {
			content: nextValue,
			twitterURL: generateTwitterURL( nextValue, permalink ),
		} );
	};

	return (
		<div className={ className }>
			<RichText
				placeholder={ __( 'Tuitea algo', 'meetup' ) }
				formattingControls={ [] }
				identifier="value"
				value={ attributes.content }
				multiline
				onChange={ handleChange }
			/>
			<div className="click-to-tweet">
				<span className="dashicons dashicons-twitter" />
				<span>{ __( 'Tuitea esto', 'meetup' ) }</span>
			</div>
		</div>
	);
};


const mapSelectToProps = ( select ) => {
	return {
		getPermalink: select( 'core/editor' ).getPermalink,
	};
};

export default withSelect( mapSelectToProps )( Edit );

