const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.sass("src/styles/styles.scss","assets")
   .options({
        postCssUrls: false,
        postCss: [tailwindcss("tailwind.config.js")],
   }) 