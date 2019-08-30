//wp.blocks.registerBlockType('azad/azad-gutenberg',{
//    title: 'Azad Gutenberg',
//    icon: 'smiley',
//    category: 'common',
//    attributes: {
//        content:{type:'string'},
//        color:{type:'string'}
//    },
//    edit: function(props){
//        return wp.element.createElement(
//            'h3',
//            null,
//            'asdf'
//        );
//    },
//    save: function(props){
//        return null;
//    }
//});

wp.blocks.registerBlockType('azad/azad-blocks',{
    title: 'Azad Gutenberg',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content:{type:'string'},
        color:{type:'string'}
    },
    edit: function(props){
        return wp.element.createElement(
            'h3',
            null,
            'asdf'
        );
    },
    save: function(props){
        return null;
    }
});