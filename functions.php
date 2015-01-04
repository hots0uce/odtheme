<?php

add_theme_support( 'post-thumbnails' ); 


function loadMyScripts()
{

    wp_enqueue_script('odScript',get_template_directory_uri() . '/js/dist/od.js', array(), '1.0.0', true);
}

add_action( 'wp_enqueue_scripts','loadMyScripts' );

?>