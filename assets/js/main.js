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
    'ngCookies',
    'ngAria'
]);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	// Home
	.when("/", {templateUrl: "partials/overview.html", controller: "PageCtrl"})
     // Transfer Start
	.when("/newTransaction", {templateUrl: "partials/transfer_start.html", controller: "PageCtrl"})
	// Transfer Form
	.when("/form", {templateUrl: "partials/transfer_form.html", controller: "PageCtrl"})
	// Transfer Confirm
	.when("/confirm", {templateUrl: "partials/transfer_confirm.html", controller: "PageCtrl"})
	// Transfer sucess
	.when("/finish", {templateUrl: "partials/transfer_finish.html", controller: "PageCtrl"})
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
    angular.element( document.querySelector( '#transStart') ).focus();
    angular.element( document.querySelector( '#acc_type') ).focus();
    angular.element( document.querySelector( '#transConfirmBtn') ).focus();
    angular.element( document.querySelector( '#transConfirmBtn') ).focus();
});

app.config(function ($translateProvider) {
	$translateProvider.translations('en', {
		'UNIVERSITY_NAME' : 'Stuttgart Media University',
		'HOME' : 'Home',
		'DOCUMENTATION' : 'Documentation',
        'WELCOME':'Welcome',
        'LOGOUT' : 'Log out',
        'NAV_OVERVIEW' : 'My accounts',
        'NAV_AMOUNTS' : 'Latest transactions',
        'NAV_TRANSFER' : 'Money transfer',
        'NAV_ACCOUNT_CONTROL' : 'Account settings',
        'LAST_LOGIN' : 'Last login :',
        'LEGAL_NOTICE_TITLE' : 'Legal Notice',
		'LEGAL_NOTICE_CONTENT' : 'Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.',
    // Overview
        'OVERVIEW_BANK_SERVICE':'Bank Service',
        'OVERVIEW_SALDO':'Account Balance',
        'OVERVIEW_CURRENCY':'Currency',
        'OVERVIEW_NORMAL_ACCOUNT':'Checking Account',
        'OVERVIEW_SAVINGS_ACCOUNT':'Savings Account',
        'OVERVIEW_CREDIT_CARD':'Credit Card',
    // Transactions
        'ACCOUNT_DETAILS':'Account Overview',
        'ACCOUNT_CASH':'Cash',
        'ACCOUNT_DEBT':'Debt',
        'ACCOUNT_CURRENCY':'Currency',
     //  Logout
        'LOGOUT_MESSAGE_1' : 'Thank you for your visit.',
        'LOGOUT_MESSAGE_2' : 'You have successfully logged out.',
     // Transfer
        'ACCOUNT_A':'Checking account',
        'ACCOUNT_B':'Savings account', // Strictly speaking, this should only appear when the customer transfers money between their own accounts.
        'TRANSFER_OWNER':'Transfer Owner', // @@still needs a better name. Same for "Transfer Owner Account", which would better be labelled "My account".
        'START_TRANSFER_TXT':'Transfer money to another account.',
        'TRANS_START_BTN':'Start a new money transfer',
        'END_TRANSFER_TXT':'Thank you, your transaction will be processed by our systems.',
        'NAME' : 'Name',
        'ACCOUNT' : 'Account',
        'IBAN' : 'IBAN',
        'CURRENT_ACCOUNT_AMMOUNT' : 'Current balance',
        'RECIPIENT' : 'Recipient',
        'FORM_NAME' : 'Name, last name / Company',
        'FORM_ACCOUNT_NUMBER' : 'Account number (IBAN)',
        'FORM_BLZ' : 'Bank code (BIC)',
        'FORM_AMMOUNT' : 'Amount (EUR, Ct.)',
        'FORM_DATE' : '',
        'FORM_REASON' : 'Transaction description (optional)',
        'BUTTON_NEXT' : 'Next',
        'BUTTON_RESET' : 'Reset',
        'TRANSFER_ACTION_BTN' : 'Transfer Money',
        'CANCEL_BTN' : 'Cancel',
        // Account Control
        'ACCONTROL_DESC' : 'Manage your account settings.',
        'ACCOUNT_CONTROL_LABEL' : 'Account Control',
        'ACCONTROL_NORMAL_ACCOUNT' : 'Checking Account',
        'ACCONTROL_SAVINGS_ACCOUNT' : 'Savings Account',
        'ACCONTROL_BLOCKED' : 'Blocked',
        'ACCONTROL_UNBLOCKED' : 'Unblocked',
        'ACCONTROL_BTN_CONFIRM' : 'Confirm'
	});
	$translateProvider.translations('de', {
        'UNIVERSITY_NAME' : 'Hochschule der Medien',
        'HOME' : 'Home',
        'DOCUMENTATION' : 'Dokumentation',
        'WELCOME':'Willkommen',
        'LOGOUT' : 'Ausloggen',
        'NAV_OVERVIEW' : 'Meine Konten',
        'NAV_AMOUNTS' : 'Umsätze',
        'NAV_TRANSFER' : 'Überweisung',
		'NAV_ACCOUNT_CONTROL' : 'Kontoverwaltung',
        'LAST_LOGIN' : 'Letztes Einloggen :',
        'LEGAL_NOTICE_TITLE' : 'Impressum',
        'LEGAL_NOTICE_CONTENT' : 'Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.',
        // Overview
        'OVERVIEW_BANK_SERVICE':'Bankleistungen',
        'OVERVIEW_SALDO':'Kontostand',
        'OVERVIEW_CURRENCY':'Währung',
        'OVERVIEW_NORMAL_ACCOUNT':'Girokonto',
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
        'ACCOUNT_A':'Girokonto',
        'ACCOUNT_B':'Sparkonto',
        'TRANSFER_OWNER':'Auftraggeber',
        'START_TRANSFER_TXT':'Überweisung tätigen',
        'TRANS_START_BTN':'Überweisung starten',
        'END_TRANSFER_TXT':'Vielen Dank, Ihre Überweisung wird jetzt bei System verarbeitet.',
        'NAME' : 'Name',
        'ACCOUNT' : 'Konto',
        'IBAN' : 'IBAN',
        'CURRENT_ACCOUNT_AMMOUNT' : 'Aktueller Kontostand:',
        'RECIPIENT' : 'Empfänger',
        'FORM_NAME' : 'Name, Vorname / Firma',
        'FORM_ACCOUNT_NUMBER' : 'Konto Nr. des Empfängers',
        'FORM_BLZ' : 'Bankleitzahl (BIC)',
        'FORM_AMMOUNT' : 'Betrag (EUR, Ct.)',
        'FORM_DATE' : '',
        'FORM_REASON' : 'Verwendungszweck',
        'BUTTON_NEXT' : 'Weiter',
        'BUTTON_RESET' : 'Reset',
        'TRANSFER_ACTION_BTN' : 'Überweisen',
        'CANCEL_BTN' : 'Abbrechen',
        // Account Control
        'ACCONTROL_DESC' : 'Hier können Sie verschiedene Aspekte Ihres Kontos verwalten.',
        'ACCOUNT_CONTROL_LABEL' : 'Kontoverwaltung',
        'ACCONTROL_NORMAL_ACCOUNT' : 'Persönliches Konto',
        'ACCONTROL_SAVINGS_ACCOUNT' : 'Sparkonto',
        'ACCONTROL_BLOCKED' : 'Gesperrt',
        'ACCONTROL_UNBLOCKED' : 'Entsperrt',
        'ACCONTROL_BTN_CONFIRM' : 'Bestätigen'
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
    $scope.go = function (path) {
        $location.path(path);
    }
});