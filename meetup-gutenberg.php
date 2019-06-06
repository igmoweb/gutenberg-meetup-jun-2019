<?php
/**
 * Plugin Name: WP Madrid Gutenberg Meetup Junio 2019
 */

/**
 * Assets only enqueued in the editor
 */
add_action( 'enqueue_block_editor_assets', function() {
	$deps = [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'jquery', 'wp-edit-post' ];

	// ES5 Blocks
	wp_enqueue_script(
		'es5-gutenberg-patreon',
		plugin_dir_url( __FILE__ ) . '/src/js/es5/simple-block.js',
		$deps
	);

	// Global editor styles
	wp_enqueue_style(
		'gutenberg-editor',
		plugin_dir_url( __FILE__ ) . '/css/editor.css'
	);
} );

/**
 * Assets enqueued in both: Editor and Frontend
 */
add_action( 'enqueue_block_assets', function () {
	// Blocks styles
	wp_enqueue_style(
		'gutenberg-blocks',
		plugin_dir_url( __FILE__ ) . '/css/style.css'
	);
} );

/**
 * Add new block categories in Gutenberg
 */
add_filter( 'block_categories', function ( $categories, $post ) {
	return array_merge(
		$categories,
		[
			[
				'slug'  => 'meetup',
				'title' => __( 'Meetup Blocks', 'meetup-gutenberg' ),
			],
		]
	);
}, 10, 2 );
