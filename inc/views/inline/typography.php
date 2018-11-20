<?php
/**
 * Author:          Andrei Baicus <andrei@themeisle.com>
 * Created on:      29/08/2018
 *
 * @package Typography.php
 */

namespace Neve\Views\Inline;

/**
 * Class Typography
 *
 * @package Neve\Views\Inline
 */
class Typography extends Base_Inline {
	/**
	 * Do all actions necessary.
	 *
	 * @return void
	 */
	public function init() {
		$this->fonts_family();
		$this->add_body_style();
		$this->add_headings_styles();
		$this->add_gutenberg_front_end_font_size();
	}

	/**
	 * Add inline style for font families.
	 */
	private function fonts_family() {
		$headings_font = get_theme_mod( 'neve_headings_font_family', false );
		$body_font     = get_theme_mod( 'neve_body_font_family', false );
		$this->add_style(
			array(
				array(
					'css_prop' => 'font-family',
					'value'    => $headings_font,
				),
			),
			'h1, h2, h3, h4, h5, h6'
		);
		$this->add_style(
			array(
				array(
					'css_prop' => 'font-family',
					'value'    => $body_font,
				),

			),
			'body'
		);
	}

	/**
	 * Body styles.
	 */
	private function add_body_style() {
		$font_size   = get_theme_mod( 'neve_body_font_size' );
		$line_height = get_theme_mod( 'neve_body_line_height' );
		$font_size   = json_decode( $font_size, true );
		$line_height = json_decode( $line_height, true );
		$settings    = array(
			array(
				'css_prop' => 'font-size',
				'value'    => $font_size,
				'suffix'   => 'px',
			),
			array(
				'css_prop' => 'line-height',
				'value'    => $line_height,
			),
		);
		$this->add_responsive_style( $settings, 'body' );
	}

	/**
	 * Headings font style.
	 */
	private function add_headings_styles() {
		$controls = array(
			'h1' => 'h1, .single .entry-title',
			'h2' => 'h2',
			'h3' => 'h3',
			'h4' => 'h4',
			'h5' => 'h5',
			'h6' => 'h6',
		);

		foreach ( $controls as $control => $selector ) {
			$font_size   = get_theme_mod( 'neve_' . $control . '_font_size' );
			$line_height = get_theme_mod( 'neve_' . $control . '_line_height' );
			$font_size   = json_decode( $font_size, true );
			$line_height = json_decode( $line_height, true );
			$settings    = array(
				array(
					'css_prop' => 'font-size',
					'value'    => $font_size,
					'suffix'   => isset( $font_size['suffix'] ) ? $font_size['suffix'] : 'em',
				),
				array(
					'css_prop' => 'line-height',
					'value'    => $line_height,
				),
			);
			$this->add_responsive_style( $settings, $selector );
		}
	}

	/**
	 * Add font sizes from gutenberg.
	 */
	private function add_gutenberg_front_end_font_size() {
		$font_size_controls = array(
			'.has-neve-body-font-size' => 'neve_body_font_size',
			'.has-neve-h-1-font-size'  => 'neve_h1_font_size',
			'.has-neve-h-2-font-size'  => 'neve_h2_font_size',
			'.has-neve-h-3-font-size'  => 'neve_h3_font_size',
			'.has-neve-h-4-font-size'  => 'neve_h4_font_size',
			'.has-neve-h-5-font-size'  => 'neve_h5_font_size',
			'.has-neve-h-6-font-size'  => 'neve_h6_font_size',
		);
		foreach ( $font_size_controls as $selector => $theme_mod ) {
			$value    = get_theme_mod( $theme_mod );
			$value    = json_decode( $value, true );
			$settings = array(
				array(
					'css_prop' => 'font-size',
					'value'    => $value,
					'suffix'   => isset( $value['suffix'] ) ? $value['suffix'] : 'em',
				),
			);
			$this->add_responsive_style( $settings, $selector );
		}
	}
}
