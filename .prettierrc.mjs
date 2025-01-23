export default {
    plugins: [
		"prettier-plugin-astro",
		"prettier-plugin-astro-organize-imports",
        "prettier-plugin-svelte"
	],
	overrides: [
		{
			files: ["*.json", "*.md", "*.toml", "*.yml"],
			options: {
				useTabs: false,
			},
		},
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
        {   files: "*.svelte", 
            options: { 
                parser: "svelte" 
            } 
        }
	],
};