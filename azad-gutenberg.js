wp.blocks.registerBlockType('azad/azad-block',{
    title: wp.i18n.__('Azad Gutenberg'),
    description: wp.i18n.__('Azad Description'),
    icon: 'smiley',
    category: 'common',
    attributes: {
        content:{type:'string'},
        color:{type:'string'}
    },
    edit: function(props){
        return wp.element.createElement('p',{className:'azad'},'Hello world');
    },
    save: function(props){
        return wp.element.createElement('p',{className:'azad'},'Hello Bangladesh');
    }
});
