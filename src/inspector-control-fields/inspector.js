const {__} = wp.i18n;
const {Component} = wp.element;
const {InspectorControls, PanelColorSettings} = wp.editor;
const {PanelBody, PanelRow, CheckboxControl} = wp.components;
export default class Inspector extends Component{
	constructor(){
		super(...arguments);
	}
	render(){
		const {
			attributes:{
				checkboxControl,
				colorPaletteControl,
			},
			setAttributes
		} = this.props;
		return(
			<InspectorControls>
				<PanelBody title={__("Demo Panel Title", "jsforwpblocks")} >
					<p>{__("Demo Panel Body", "jsforwpblocks")}</p>
				</PanelBody>
				<PanelBody title={__("Demo Panel Title", "jsforwpblocks")} initialOpen={false} >
					<PanelRow>
						<p>{__("Demo Panel Body", "jsforwpblocks")}</p>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__("Demo Checkbox", "jsforwpblocks")} initialOpen={false} >
					<PanelRow>
						<CheckboxControl
							heading={__("Checkbox Control", "jsforwpblocks")}
							label={__("Check here", "jsforwpblocks")}
							help={__("Checkbox control help text", "jsforwpblocks")}
							checked={checkboxControl}
							onChange={checkboxControl => setAttributes({ checkboxControl })}
						/>
					</PanelRow>
				</PanelBody>
				<PanelColorSettings 
					title={__("Color Settings", "jsforwpblocks")} 
					colorSettings={[
						{
							value: colorPaletteControl,
							onChange: colorPaletteControl => {
								setAttributes({ colorPaletteControl });
							},
							label: __("Background Color")
						}
					]}
				/>
			</InspectorControls> 
		);
	}
}