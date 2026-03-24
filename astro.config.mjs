// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    // --- ESTAS DOS LÍNEAS SON LA CLAVE ---
    site: 'https://CarlosObleaS.github.io',
    base: '/guias-matematica-discreta/',
    // -------------------------------------
    integrations: [
        starlight({
            title: 'Guías de Matemática Discreta', // Le cambié el título para que se vea más profesional
            social: {
                github: 'https://github.com/CarlosObleaS/guias-matematica-discreta',
            },
            sidebar: [
                {
                    label: 'Guías Rápidas',
                    autogenerate: { directory: 'guides' },
                },
                {
                    label: 'Referencia',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});