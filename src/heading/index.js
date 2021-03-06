import icon from './icon';
const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar } = wp.editor;
const { __ } = wp.i18n;

export default registerBlockType('azad/azad-heading',{
	title: __('Azad Heading','azad-gutenberg'),
    description: __('Azad heading is a ','azad-gutenberg'),
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
		const {attributes:{content, textAlignment}, setAttributes, className} = props;
		const onChangeContent = (newContent) => {
			setAttributes({content: newContent})
		}
		return (
			<div className={className}>
				<BlockControls>
					<AlignmentToolbar
						value={textAlignment}
						onChange={textAlignment=>setAttributes({textAlignment})}
					/>
				</BlockControls>
				<RichText 
					tagName="div"
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
