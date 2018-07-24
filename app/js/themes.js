var themes = angular.module('themesModule', []);

themes.config(function($mdThemingProvider) {
    // In the future, you'd configure theming based on login information to set
    // appropriate colors
    var loungeGreen = $mdThemingProvider.extendPalette('green', {
        'default': '#36c298',
        'contrastDefaultColor': 'light'
    });

    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('loungeGreen', loungeGreen);

    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
        .primaryPalette('loungeGreen')
        .accentPalette('blue')
})
