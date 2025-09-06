// src/data/siteDetails.ts

export const siteDetails = {
  siteName: 'Kellgreat',
  siteUrl: 'https://finwise-saas-landing-page-xi-dun.vercel.app/',

  metadata: {
    title: 'Kellgreat – Plataforma para freelancers bloqueados',
    description: 'Kellgreat conecta freelancers bloqueados con clientes sin comisiones ocultas.',
  },

  language: 'es-ES',
  locale: 'es-ES',

  // Apunta al logo blanco que pusiste en public/
  siteLogo: `${process.env.BASE_PATH || ''}/logo-kellgreat-white.svg`,
  googleAnalyticsId: '', // pon aquí tu ID si tienes uno
};
