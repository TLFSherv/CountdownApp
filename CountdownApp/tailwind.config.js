/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./Pages/**/*.cshtml",     // Important: scan your Razor files
        "./Pages/Shared/*.cshtml",
        "./Views/**/*.cshtml",     // If using any MVC views
        "./**/*.cshtml"
    ],
    theme: { extend: {} },
    plugins: [],
}