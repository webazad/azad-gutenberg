const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { __ } = wp.i18n;

registerBlockType('azad/azad-block',{
	title: __('Azad Gutenberg'),
    description: __('Azad Description'),
    icon: 'smiley',
    category: 'azad-gutenberg',
    attributes: {
        content:{
			type:'array',
			source:'children',
			selector:'div'
		}
    },
    edit: (props) => {
		const {attributes, setAttributes, className} = props;
		const onChangeContent = (newContent) => {
			setAttributes({content: newContent})
		}
		return (
			<div className={className}>
				<RichText 
					tagName="div"
					//className={className}
					onChange={onChangeContent}
					value={attributes.content}
					placeholder={ __( 'Write here please...' ) }
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



// const { registerBlockType } = wp.blocks;
// const { RichText } = wp.editor;

// registerBlockType('azad/azad-block',{
	// title: wp.i18n.__('Azad Gutenberg'),
    // description: wp.i18n.__('Azad Description'),
    // icon: 'smiley',
    // category: 'layout',
    // attributes: {
        // content:{
			// type:'array',
			// source:'children',
			// selector:'div'
		// }
    // },
    // edit: (props) => {
		// const {attributes, setAttributes} = props;
		// const onChangeContent = (newContent) => {
			// setAttributes({content: newContent})
		// }
		// return (
			// <RichText 
				// tagName="div"
				// onChange={onChangeContent}
				// value={attributes.content}
			// />
		// )
	// },
    // save: (props) => {
		// return (
			// <RichText.Content 
				// tagName="div"
				// className="azad-container"
				// value={props.attributes.content}
			// />
		// )
	// }
// });