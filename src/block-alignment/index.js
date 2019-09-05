//import classnames from 'classnames';
//import icon from './icon';
//import './style.scss';
//import './editor.scss';
//const { Component } = wp.element;
const { registerBlockType } = wp.blocks;
//const { Button, CheckboxControl, RadioControl, RangeControl, TextControll, TextareaControll, ToggleCOntrol, SelectControl } = wp.components;
const { RichText, BlockControls, AlignmentToolbar, BlockAlignmentToolbar } = wp.editor;
const { __ } = wp.i18n;
//const { something } = wp.data;

export default registerBlockType('azad/azad-block-alignment',{
	title: __('Azad Block Alignment'),
    description: __('Azad block alignment is a '),
	keywords: __('Block '),
    icon: 'smiley',
    category: 'azad-gutenberg',
    attributes: {
        content:{
			type:'array',
			source:'children',
			selector:'div'
		},
		textAlignment:{
			type:'string'
		},
		blockAlignment: {
			type: 'string',
			default: 'wide',
		}
    },
	getEditWrapperProps( { blockAlignment } ) {
            if ( 'left' === blockAlignment || 'right' === blockAlignment || 'full' === blockAlignment ) {
                return { 'data-align': blockAlignment };
            }
        },
    edit: (props) => {
		const {attributes:{content, textAlignment, blockAlignment}, setAttributes, className} = props;
		const onChangeContent = (newContent) => {
			setAttributes({content: newContent})
		}
		return (
			<div className={className}>
				<BlockControls>
				<BlockAlignmentToolbar
                        value={ blockAlignment }
                        onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
                    />
					<AlignmentToolbar
						value={textAlignment}
						onChange={textAlignment=>setAttributes({textAlignment})}
					/>
				</BlockControls>
				<RichText 
					tagName="div"
					//className={className}
					onChange={onChangeContent}
					style={{textAlign:textAlignment}}
					value={content}
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
