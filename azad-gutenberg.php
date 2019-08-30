<?php
/* 
Plugin Name: Azad Gutenberg
Description: A very simple gutenberg practice.
Plugin URi: gittechs.com/plugin/azad-gutenberg 
Author: Md. Abul Kalam Azad
Author URI: gittechs.com/author
Author Email: webdevazad@gmail.com
Version: 0.0.0.1
Text Domain: azad-gutenberg
*/
if(! defined('ABSPATH')) exit;
class Azad_Gutenberg{
    public function __construct(){
        add_action('enqueue_block_editor_assets',array($this,'azad_enqueue_scripts'),1);
    }
    public function azad_enqueue_scripts(){
        wp_enqueue_script('azad-gutenberg',plugin_dir_url(__FILE__).'azad-gutenberg.js',array('wp-blocks','wp-i18n','wp-editor'),true);
    }
    public function includes(){
        //
    }
    public function admin(){
        //
    }
    public function __destruct(){}
}
new Azad_Gutenberg();