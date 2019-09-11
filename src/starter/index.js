//import classnames from 'classnames';
import icon from './icon';
//import './style.scss';
//import './editor.scss';
//const { Component } = wp.element;
const { registerBlockType } = wp.blocks;
//const { Button, CheckboxControl, RadioControl, RangeControl, TextControll, TextareaControll, ToggleCOntrol, SelectControl } = wp.components;
const { RichText, BlockControls, AlignmentToolbar } = wp.editor;
const { __ } = wp.i18n;
//const { something } = wp.data;

// Background Image
export default registerBlockType('azad/azad-starter',{
	title: __('Azad Starter','azad-gutenberg'),
    description: __('Azad starter is a ','azad-gutenberg'),
    icon: {
		background: 'rgba(254, 243, 224, 0.52)',
		src: icon,
	}, 
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
					placeholder={ __( 'Write here for heading...' ) }
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
