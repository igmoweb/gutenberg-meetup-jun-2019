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
		'es5-gutenberg-simple-block',
		plugin_dir_url( __FILE__ ) . '/src/es5/simple-block.js',
		$deps
	);

	// ES6 Scripts
	wp_enqueue_script(
		'es6-meetup',
		plugin_dir_url( __FILE__ ) . '/build/index.js',
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

add_action( 'init', function () {
	register_meta( 'post', 'subheadline', [
		'object_subtype' => 'post',
		'show_in_rest'   => true,
		'type'           => 'string',
		'single'         => true,
	] );

	register_block_type( 'meetup/author-latest-posts', [
			'render_callback' => 'meetup_latest_posts_render',
		]
	);
} );

function meetup_latest_posts_render( $attributes ) {
	$per_page     = isset( $attributes['perPage'] ) ? absint( $attributes['perPage'] ) : 3;
	$current_post = get_post( get_the_ID() );
	$posts        = get_posts( [
		'author'         => $current_post->post_author,
		'posts_per_page' => $per_page,
		'post_type'      => 'post'
	] );

	ob_start();
	?>
	<ul>
		<?php foreach ( $posts as $post ): ?>
			<li><a href="<?php echo esc_url( get_permalink( $post->ID ) ); ?>">
					<?php echo get_the_title( $post->ID ); ?>
				</a>
			</li>
		<?php endforeach; ?>
	</ul>
	<?php
	return ob_get_clean();
}
