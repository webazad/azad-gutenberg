const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { __ } = wp.i18n;

registerBlockType('azad/azad-heading',{
	title: __('Azad Heading'),
    description: __('Azad heading is a '),
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
// Background Image
registerBlockType('azad/azad-background',{
	title: __('Azad Background'),
    description: __('Azad background is a '),
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
// Background Image
registerBlockType('azad/azad-accordion',{
	title: __('Azad Accordion'),
    description: __('Azad accordion is a '),
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
// Background Image
registerBlockType('azad/azad-slider',{
	title: __('Azad Slider'),
    description: __('Azad slider is a '),
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
// Background Image
registerBlockType('azad/azad-button',{
	title: __('Azad Button'),
    description: __('Azad background is a '),
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