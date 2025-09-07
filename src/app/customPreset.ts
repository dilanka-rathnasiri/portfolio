import { definePreset, palette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const primary = palette('{blue}');

export const CustomPreset = definePreset(Aura, {
    semantic: {
        primary: primary,
    },
});
