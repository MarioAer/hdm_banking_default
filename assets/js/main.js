/*
	Alpha by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'right'
			});

		// Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
			if (!skel.vars.mobile
			&&	$header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		0.5,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

				});

			}

	});

})(jQuery);


// some content
var app = angular.module('hdmBankingApp', [
    'ngRoute',
	'pascalprecht.translate',
    'ngCookies'
]);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	// Home
	.when("/", {templateUrl: "partials/overview.html", controller: "PageCtrl"})
	// Transfer Form
	.when("/form", {templateUrl: "partials/transfer_form.html", controller: "PageCtrl"})
	// Transfer Confirm
	.when("/confirm", {templateUrl: "partials/transfer_confirm.html", controller: "PageCtrl"})
	// Transactions
	.when("/transactions", {templateUrl: "partials/transactions.html", controller: "PageCtrl"})
    // Account Settings
    .when("/accontrol", {templateUrl: "partials/account_control.html", controller: "PageCtrl"})
    // Logout
    .when("/logout", {templateUrl: "partials/logout.html", controller: "PageCtrl"})
	// Pages
    .otherwise({redirectTo: '/'});
}]);

app.controller('PageCtrl', function ( $scope, $location, $http) {
    console.log("Page Controller reporting for duty.");
});

app.config(function ($translateProvider) {
	$translateProvider.translations('en', {
		'UNIVERSITY_NAME' : 'Stuttgart Media University',
		'HOME' : 'Home',
		'DOCUMENTATION' : 'Documentation',
        'WELCOME':'Welcome',
        'LOGOUT' : 'Log Out',
        'NAV_OVERVIEW' : 'Overview',
        'NAV_AMOUNTS' : 'Amounts',
        'NAV_TRANSFER' : 'Money Transfer',
        'NAV_ACCOUNT_CONTROL' : 'Account Settings',
        'LAST_LOGIN' : 'Last login :',
        'LEGAL_NOTICE_TITLE' : 'Legal Notice',
		'LEGAL_NOTICE_CONTENT' : 'Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.',
    // Overview
        'OVERVIEW_BANK_SERVICE':'Bank Service',
        'OVERVIEW_SALDO':'Saldo',
        'OVERVIEW_SALDO':'Currency',
        'OVERVIEW_NORMAL_ACCOUNT':'Personal Account',
        'OVERVIEW_SAVINGS_ACCOUNT':'Savings Account',
        'OVERVIEW_CREDIT_CARD':'Credit Card',
    // Transactions
        'ACCOUNT_DETAILS':'Account Overview',
        'ACCOUNT_CASH':'Cash',
        'ACCOUNT_DEBT':'Debt',
        'ACCOUNT_CURRENCY':'Currency',
     //  Logout
        'LOGOUT_MESSAGE_1' : 'Thank you for your visit',
        'LOGOUT_MESSAGE_2' : 'You Logout successfully',
     // Transfer
        'TRANSFER_OWNER':'Transfer Owner',
        'NAME' : 'Name',
        'ACCOUNT' : 'Account',
        'IBAN' : 'IBAN',
        'CURRENT_ACCOUNT_AMMOUNT' : 'Current Account',
        'RECIPIENT' : 'Recipient',
        'FORM_NAME' : 'Name, Lastname / Company',
        'FORM_ACCOUNT_NUMBER' : 'Account Number',
        'FORM_BLZ' : 'Bank Code',
        'FORM_AMMOUNT' : 'Ammount (EUR, Ct.)',
        'FORM_DATE' : '',
        'FORM_REASON' : 'Transaction Description (Optional)',
        'BUTTON_NEXT' : 'Next',
        'BUTTON_RESET' : 'Reset',
    // Account Control
        'ACCONTROL_DESC' : 'Here kann you manage your account settings.',
        'ACCONTROL_NORMAL_ACCOUNT' : 'Personal Account',
        'ACCONTROL_SAVINGS_ACCOUNT' : 'Savings Account',
        'ACCONTROL_BLOCKED' : 'Blocked',
        'ACCONTROL_UNBLOCKED' : 'Unblocked',
        'ACCONTROL_BTN_CONFIRM' : 'Save'
	});
	$translateProvider.translations('de', {
        'UNIVERSITY_NAME' : 'Hochschule der Medien',
        'HOME' : 'Home',
        'DOCUMENTATION' : 'Dokumentation',
        'WELCOME':'Willkommen',
        'LOGOUT' : 'Ausloggen',
        'NAV_OVERVIEW' : 'Übersicht',
        'NAV_AMOUNTS' : 'Umsätze',
        'NAV_TRANSFER' : 'Überweisung',
		'NAV_ACCOUNT_CONTROL' : 'Konto Verwaltung',
        'LAST_LOGIN' : 'Letztes Einloggen :',
        'LEGAL_NOTICE_TITLE' : 'Impressum',
        'LEGAL_NOTICE_CONTENT' : 'Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.',
        // Overview
        'OVERVIEW_BANK_SERVICE':'Bankleistungen',
        'OVERVIEW_SALDO':'Saldo',
        'OVERVIEW_CURRENCY':'Währung',
        'OVERVIEW_NORMAL_ACCOUNT':'Persönliches Konto',
        'OVERVIEW_SAVINGS_ACCOUNT':'Sparkonto',
        'OVERVIEW_CREDIT_CARD':'Kreditkarte',
        // Transactions
        'ACCOUNT_DETAILS':'Umsatzdetails',
        'ACCOUNT_CASH':'Soll',
        'ACCOUNT_DEBT':'Haben',
        'ACCOUNT_CURRENCY':'Währung',
        //  Logout
        'LOGOUT_MESSAGE_1' : 'Vielen Dank für Ihren Besuch',
        'LOGOUT_MESSAGE_2' : 'Sie wurden erfolgreich ausgeloggt.',
        // Transfer
        'TRANSFER_OWNER':'Auftraggeber',
        'NAME' : 'Name',
        'ACCOUNT' : 'Konto',
        'IBAN' : 'IBAN',
        'CURRENT_ACCOUNT_AMMOUNT' : 'Aktueller Kontostand:',
        'RECIPIENT' : 'Empfänger',
        'FORM_NAME' : 'Name, Vorname / Firma',
        'FORM_ACCOUNT_NUMBER' : 'Konto Nr. des Empfängers',
        'FORM_BLZ' : 'Bankleitzahl',
        'FORM_AMMOUNT' : 'Betrag (EUR, Ct.)',
        'FORM_DATE' : '',
        'FORM_REASON' : 'Verwendungszweck',
        'BUTTON_NEXT' : 'Weiter',
        'BUTTON_RESET' : 'Abbrechen',
        // Account Control
        'ACCONTROL_DESC' : 'Hier können Sie verschiedene Aspekte Ihres Kontos verwalten.',
        'ACCONTROL_NORMAL_ACCOUNT' : 'Persönliches Konto',
        'ACCONTROL_SAVINGS_ACCOUNT' : 'Sparkonto',
        'ACCONTROL_BLOCKED' : 'Gesperrt',
        'ACCONTROL_UNBLOCKED' : 'Entsperrt',
        'ACCONTROL_BTN_CONFIRM' : 'Speichern'
    });

	$translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
});

app.controller('bankMainCtrl', function($scope, $location, $cookies, $translate){
    $scope.isActive = function (path) {
        return path === $location.path();
    };
    angular.element(document).ready(function () {
        var prefLangKey = $cookies.get('HdMBankLang');
        if (prefLangKey != null) {
            $translate.use(prefLangKey);
        }
    });

});