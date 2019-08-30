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
if(! defined('ABSPATH')) exit;
class Azad_Gutenberg{
    public function __construct(){
        add_action('plugins_loaded',array($this,'constants'),1);
    }
    public function constants(){
        //echo 'Constants';
    }
    public function i18n(){
        //echo 'i18n';
    }
    public function includes(){
        define('ADMIN',plugin_dir_path(__FILE__));
        require_once(ADMIN.'inc/functions.php');
    }
    public function admin(){
        if(is_admin()){
            require_once(ADMIN.'admin/admin.php');            
        }
    }
    public function __destruct(){}
}
new Azad_Scroll_Top();