//import classnames from 'classnames';
import icons from './icons';
//import './style.scss';
//import './editor.scss';
//const { Component } = wp.element;
const { registerBlockType } = wp.blocks;
const { Dashicon, Toolbar, Button, Tooltip, PanelBody, PanelRow, FormToggle } = wp.components;
const { RichText, BlockControls, AlignmentToolbar, BlockAlignmentToolbar,InspectorControls, MediaUpload } = wp.editor;
const { __ } = wp.i18n;
//const { something } = wp.data;

export default registerBlockType('azad/azad-media-upload',{
	title: __('Azad Media Upload','azad-gutenberg'),
    description: __('Azad media upload...','azad-gutenberg'),
	icon: {
		background: 'rgba(254, 243, 224, 0.52)',
		src: icons.upload,
	}, 
	keywords: [
		__( 'Meta', 'azad-gutenberg' ),
		__( 'Custom field', 'azad-gutenberg' ),
		__( 'Box', 'azad-gutenberg' ),
	],
    category: 'azad-gutenberg',
    attributes: {
        content:{
			type:'array',
			source:'children',
			selector:'div'
		},
		textAlignment:{
			type:'string'
		}
    },
    edit: (props) => {
		const {attributes:{content, textAlignment, highContrast}, setAttributes, className} = props;
		const toggleHighContrast = () => setAttributes( { highContrast: ! highContrast } );
		const onChangeContent = (newContent) => {
			setAttributes({content: newContent})
		}
		const {attributes: { imgID, imgURL, imgAlt }, isSelected } = props;
		const onSelectImage = img => {
			setAttributes( {
				imgID: img.id,
				imgURL: img.url,
				imgAlt: img.alt,
			} );
		};
		return (
			<div className={className}>
				<InspectorControls>
                    <PanelBody
                        title={ __( 'High Contrast', 'jsforwpblocks' ) }
                    >
                        <PanelRow>
                            <label
                                htmlFor="high-contrast-form-toggle"
                            >
                                { __( 'High Contrast', 'jsforwpblocks' ) }
                            </label>
                            <FormToggle
                                id="high-contrast-form-toggle"
                                label={ __( 'High Contrast', 'jsforwpblocks' ) }
                                checked={ highContrast }
                                onChange={ toggleHighContrast }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>          
				<BlockControls>
					<AlignmentToolbar
						value={textAlignment}
						onChange={textAlignment=>setAttributes({textAlignment})}
					/>
					<Toolbar>
						<Tooltip text={ __( 'High Contrast', 'jsforwpblocks' )  }>
							<Button 
								className={ { 'is-active': highContrast }}
								onClick={ () => setAttributes( { highContrast: ! highContrast } ) }>
								{icons.upload}
							</Button>
						</Tooltip>
					</Toolbar>
				</BlockControls>
				<MediaUpload
					onSelect={ onSelectImage }
					type="image"
					value={ imgID }
					render={ ( { open } ) => (
						<Button
							className={ "button button-large" }
							onClick={ open }
						>
							{ icons.upload }
							{ __( ' Upload Image', 'jsforwpblocks' ) }
						</Button>
					) }
				>
				</MediaUpload>
			</div>
		)
	},
    save: (props) => {
		const {attributes, setAttributes, className} = props;
		return (
		<div className={className}>
			<RichText.Content 
				tagName="div"
				value={props.attributes.content}
			/>
			</div>
		)
	}
});
