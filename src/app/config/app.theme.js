export default function themeConfig ($mdThemingProvider) {
    $mdThemingProvider.alwaysWatchTheme(true);
    $mdThemingProvider.theme('default')
        .primaryPalette('blue');
}

themeConfig.$inject = ['$mdThemingProvider'];