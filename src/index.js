const { registerBlockType } = wp.block;

registerBlockType('azad/azad-block',{
	title: wp.i18n.__('Azad Gutenberg'),
    description: wp.i18n.__('Azad Description'),
    icon: 'smiley',
    category: 'layout',
    attributes: {
        content:{type:'string'},
        color:{type:'string'}
    },
    edit: ({className}) => <div className={className}>Hello world!</div>,
    save: () => <div>Hello world</div>
});