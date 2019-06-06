const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { RichText } = wp.editor;
const { TextControl } = wp.components;

// Register the click to tweet block
registerBlockType( 'meetup/call-to-action', {
	title: __( 'Call To Action', 'meetup' ),
	icon: 'megaphone',
	category: 'meetup',
	attributes: {
		content: {
			type: 'string',
			default: '',
			source: 'html',
			selector: '.wp-block-meetup-call-to-action__content'
		},
		title: {
			type: 'string',
			default: '',
			source: 'text',
			selector: 'h3'
		},
		url: {
			type: 'string',
			default: '',
			source: 'attribute',
			attribute: 'href',
			selector: 'a'
		}
	},
	edit: ( props ) => {
		return <div className={ props.className }>
			<RichText
				placeholder={ __( 'Título', 'meetup' ) }
				value={ props.attributes.title }
				multiline={ false }
				formattingControls={ [] }
				tagName="h3"
				onChange={ ( newTitle ) => { props.setAttributes( { title: newTitle } ) } }
			/>
			<div className={ `${props.className}__content`}>
				<RichText
					placeholder={ __( 'Di algo', 'meetup' ) }
					value={ props.attributes.content }
					multiline={ true }
					onChange={ ( newContent ) => { props.setAttributes( { content: newContent } ) } }
				/>
			</div>
			<a className={ `${props.className}__link`} href="" onClick={ ( e ) => e.preventDefault() }>
				Apply Now
			</a>
			{ props.isSelected && (
				<TextControl
					type="url"
					placeholder={ __( 'Pon una URL' ) }
					value={ props.attributes.url }
					onChange={ ( newUrl ) => props.setAttributes( { url: newUrl } ) }
				/>
			) }
		</div>
	},
	save: ( props ) => {
		const className = 'wp-block-meetup-call-to-action';
		return <div>
			<h3>{ props.attributes.title }</h3>
			<div className={ `${className}__content` }>
				<RichText.Content multiline={ true } value={ props.attributes.content } />
			</div>
			<a className={ `${className}__link`} href={ props.attributes.url }>
				Apply Now
			</a>
		</div>;
	}
} );
