//import classnames from 'classnames';
import Inspector from './inspector';
import icon from './icon';
//import './style.scss';
//import './editor.scss';
//const { Component } = wp.element;
const { registerBlockType } = wp.blocks;
const { Dashicon, Toolbar, Button, Tooltip, PanelBody, PanelRow, FormToggle } = wp.components;
const { RichText, BlockControls, AlignmentToolbar, BlockAlignmentToolbar,InspectorControls } = wp.editor;
const { __ } = wp.i18n;
//const { something } = wp.data;

export default registerBlockType('azad/azad-ins-control-fields',{
	title: __('Azad Inspector Control Fields','azad-gutenberg'),
    description: __('Azad inspector conrol fields is a common  ','azad-gutenberg'),
	icon: {
		background: 'rgba(254, 243, 224, 0.52)',
        src: icon,
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
		return (
			<div className={className}>
				<Inspector {...{ setAttributes, ...props }} />
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
								{icon}
							</Button>
						</Tooltip>
					</Toolbar>
				</BlockControls>
				<RichText 
					tagName="div"
					className={ { 'high-contrast': highContrast } }
					onChange={onChangeContent}
					style={{textAlign:textAlignment}}
					value={content}
					placeholder={ __( 'Write here please ...' ) }
				/>
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
