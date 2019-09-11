const {__} = wp.i18n;
const {Component} = wp.element;
const {InspectorControls, ColorPalette, PanelColorSettings} = wp.editor;
const {PanelBody, PanelRow, CheckboxControl, RangeControl} = wp.components;
export default class Inspector extends Component{
	constructor(){
		super(...arguments);
	}
	render(){
		const {
			attributes:{
				checkboxControl,
				colorPaletteControl,
				colorPaletteControl2,
				rangeControl
			},
			setAttributes
		} = this.props;
		return(
			<InspectorControls>
				<PanelBody title={__("Demo Panel Title", "azad-gutenberg")} >
					<p>{__("Demo Panel Body", "azad-gutenberg")}</p>
				</PanelBody>
				<PanelBody title={__("Demo Panel Title", "jsforwpblocks")} initialOpen={false} >
					<PanelRow>
						<p>{__("Demo Panel Body", "jsforwpblocks")}</p>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__("Demo Checkbox", "azad-gutenberg")} initialOpen={false} >
					<PanelRow>
						<CheckboxControl
							heading={__("Checkbox Control", "azad-gutenberg")}
							label={__("Check here", "azad-gutenberg")}
							help={__("Checkbox control help text", "azad-gutenberg")}
							checked={checkboxControl}
							onChange={checkboxControl => setAttributes({ checkboxControl })}
						/>
					</PanelRow>
				</PanelBody>
				<PanelColorSettings title={__("Text Color Settings", "azad-gutenberg")} initialOpen={false} 
					colorSettings={[
						{
							value: colorPaletteControl,
							onChange: colorPaletteControl => {
								setAttributes({ colorPaletteControl });
							},
							label: __("Text Color...")
						}
					]}
				/>
				<PanelBody title={__("Background Color Settings", "azad-gutenberg")} initialOpen={false} >
					<h3>{__("Background Color...", "azad-gutenberg")}</h3>
					<ColorPalette
						value={colorPaletteControl2}
						onChange={colorPaletteControl2 => { setAttributes({ colorPaletteControl2 });
					}}
					/>
				</PanelBody>
				<PanelBody>
					<RangeControl
						beforeIcon="arrow-left-alt2"
						afterIcon="arrow-right-alt2"
						label={__("Range Control", "jsforwpblocks")}
						value={rangeControl}
						onChange={rangeControl => setAttributes({ rangeControl })}
						min={1}
						max={10}
					/>
				</PanelBody>
			</InspectorControls> 
		);
	}
}