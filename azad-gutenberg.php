<?php
/* 
Plugin Name: Azad Gutenberg
Description: A very simple gutenberg practice.
Plugin URi: gittechs.com/plugin/azad-gutenberg 
Author: Md. Abul Kalam Azad
Author URI: gittechs.com/author
Author Email: webdevazad@gmail.com
Version: 0.0.0.1
License: GPL2
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: azad-gutenberg
Domain Path: /languages
*/
//if(! defined('ABSPATH')) exit;
//function azad_gutenberg_one(){
//    wp_enqueue_script('azad-gutenberg',
//        plugins_dir_url(__FILES__).'azad-gutenberg.js',
//            array('wp-blocks','wp-i18n','wp-editor'),true);
//}
//add_action('enqueue_block_editor_assets','azad_gutenberg_one');

// Check for gutenberg
if(function_exists('the_gutenberg_project')){
    if(! function_exists('azad_gutenberg')){
        function azad_gutenberg(){
            wp_register_script(
                'azad-gutenberg-one',
                plugins_url('azad-gutenberg.js',__FILES__),
                array('wp-blocks','wp-element'),
                true
            );
            wp_register_style(
                'azad-gutenberg-two',
                plugins_url('azad-gutenberg.css',__FILES__),
                array('wp-edit-blocks','wp-element'),
                '1234',
                'all'
            );
            wp_register_style(
                'azad-gutenberg-three',
                plugins_url('azad-gutenberg.css',__FILES__),
                array('wp-edit-blocks','wp-element'),
                '1234',
                'all'
            );
            register_block_type('azad/azad-block',array(
                    'editor_script' => 'azad-gutenberg-one',
                    'editor_style' => 'azad-gutenberg-two',
                    'style' => 'azad-gutenberg-three'
                )             
            );
        }
    }
}
add_action('init','azad_gutenberg');
/*
if(! class_exists('Azad_Gutenberg')){
    class Azad_Gutenberg{
        public function __construct(){
            add_action('plugins_loaded',array($this,'constants'),1);
        }
        public function admin(){
            if(is_admin()){
                require_once(ADMIN.'admin/admin.php');            
            }
        }
        public function __destruct(){}
    }
}
new Azad_Gutenberg();
*/