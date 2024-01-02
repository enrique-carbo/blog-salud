interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Enrique Carbó', // Site author
	title: 'Blog de Salud', // Site title.
	description: 'Blog dedicado a noticias de salud. No es consejo médico', // Description to display in the meta tags
	lang: 'es-AR',
	ogLocale: 'es_AR',
	shareMessage: 'Comparte este post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
