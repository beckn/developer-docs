<?php
/**
 * Template Name: Document Page
 */

get_header();

$opt = get_option('docly_opt');

$doc_container = Docly_helper()->doc_width() == 'full-width' ? 'container-fluid pl-60 pr-60' : 'container custom_container';
$content_wrapper = Docly_helper()->doc_width() == 'full-width' ? "doc_documentation_full_area" : '';

$doc_footer = isset($opt['doc_footer']) ? $opt['doc_footer'] : 'simple';
?>

<section class="doc_documentation_area <?php echo esc_attr($content_wrapper) ?>" id="sticky_doc">
    <div class="overlay_bg"></div>
    <div class="<?php echo esc_attr($doc_container) ?>">
        <div class="row">
            <?php
            while ( have_posts() ) : the_post();

                wedocs_get_template_part( 'docs-sidebar' );

                wedocs_get_template_part( 'single-doc-content' );

                if ( Docly_helper()->doc_layout() == 'both_sidebar' ) {
                    wedocs_get_template_part('docs-right-sidebar');
                }

            endwhile;
            ?>
        </div>
    </div>
</section>

<?php
get_footer();