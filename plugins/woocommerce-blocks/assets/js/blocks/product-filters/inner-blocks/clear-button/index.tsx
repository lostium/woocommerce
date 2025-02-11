/**
 * External dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { button as icon } from '@wordpress/icons';
import { isExperimentalBlocksEnabled } from '@woocommerce/block-settings';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import Edit from './edit';
import save from './save';
import { blockVariations } from './block-variations';

if ( isExperimentalBlocksEnabled() ) {
	registerBlockType( metadata, {
		icon,
		edit: Edit,
		save,
		variations: blockVariations,
	} );
}
