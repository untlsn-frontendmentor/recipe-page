import * as u from 'unocss';
import { presetAio } from 'untlsn-unocss';


export default u.defineConfig({
	shortcuts: {
		'c-dot': 'content-["•"]',
	},
	theme: {
		colors: {
			purple: {
				text: '#762E4C',
				bg:   '#FFF7FC',
			},
			text: {
				gray:  '#5A514E',
				brown: '#824A2E',
			},
			bg: {
				primary: '#F3E5D7',
			},
		},
	},
	presets: [
		u.presetUno(),
		u.presetWind(),
		u.presetIcons(),
		u.presetTypography(),
		u.presetWebFonts({
			fonts: {
				serif: 'Young Serif',
			},
		}),
		presetAio(),
	],
	transformers: [
		u.transformerDirectives(),
		u.transformerCompileClass(),
		u.transformerVariantGroup(),
	],
});
