window.TermsAndConditionsCheckbox = function(event) {
    if (event !== undefined)
        event.preventDefault();

    if (document.getElementById('effectiveAppsAgreeCB') !== null)
        return;

    if (window.EFFECTIVE_APPS_TAC_FUNCTIONALITY === "1") {
        if (window.EFFECTIVE_APPS_CCP === undefined && 'False' === 'False') {
            jQuery('body').on(window.EFFECTIVE_APPS_TAC_EVENT_TYPE, window.EFFECTIVE_APPS_JQUERY_CHECKOUT_BUTTON_SELECTORS, function(element) {
                window.EFFECTIVE_APPS_CCP = true;
                if (jQuery('#effectiveAppsAgreeCB').is(':checked')) {
                    jQuery(this).submit();
                } else {
                    alert(window.EFFECTIVE_APPS_TAC_ALERT);
                    if (element.target !== undefined) {
                        clearLoadingStateFromElement(element.target);
                    }
                    else {
                        clearLoadingStateFromElement(null);
                    }
                    return false;
                }
            });
        }
    }
    let checkboxElement = document.createElement('p');
    checkboxElement.innerHTML = '<input  style="-webkit-appearance: checkbox; float:none; vertical-align: middle;" type="checkbox" id="effectiveAppsAgreeCB" onchange="termsAndConditionsCheckboxChanged(this);"/>&nbsp;<label style="display:inline; float:none" for="agree">' + window.EFFECTIVE_APPS_TAC_TEXT + '</label>';
    jQuery(window.EFFECTIVE_APPS_JQUERY_CHECKOUT_BUTTON_SELECTORS).each( function( i, element ) {
        if (element !== undefined) {
            let style = element.getAttribute('style');
            let insertionType = "regular";
            if (element.classList.contains('qbk-hide-button')) {
                return true;
            }

            if (style !== null) {
                if (style.indexOf('display: none') > -1) {
                    return true;
                }
            }

            if (element.getAttribute("type") === "hidden" || element.getAttribute("tac-ignore") === "true") {
                return true;
            }

            let coContainer = element.parentElement;
            if (window.TAC_THEME_NAME.indexOf('debut') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('express') > -1) {
                coContainer = element.parentElement.parentElement;
                checkboxElement.style.textAlign = "right";
            }

            if (window.TAC_THEME_NAME.indexOf('grid') > -1) {
                if (element.getAttribute('class') !== null && element.getAttribute('class').indexOf("checkout-link") > -1) {
                    return true;
                }

                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('maker') > -1) {
                coContainer = element;
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('pacific') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('mavon') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('frame') > -1) {
                coContainer = element.parentElement.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('shrine') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('shapes') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('broadcast') > -1) {
                coContainer = element.parentElement.parentElement;
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('venue') > -1) {
                coContainer = element.parentElement.parentElement;
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('kalles') > -1) {
                coContainer = element.parentElement.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('be yours') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('split') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('supps') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('ascent') > -1) {
                insertionType = "insertbeforecontainer";
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('fkxpremium') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('origin') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('inspired - indie') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('beyond') > -1) {
                coContainer = element.parentElement.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('colorblock') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('esencia') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('betheme') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('soulmate creative') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('colorblock') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('startup') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('trade') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('vanilla') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('dawn') > -1 || window.TAC_THEME_NAME.indexOf('taste') > -1 || window.TAC_THEME_NAME.indexOf('studio') > -1 || window.TAC_THEME_NAME.indexOf('craft') > -1 || window.TAC_THEME_NAME.indexOf('crave') > -1 || window.TAC_THEME_NAME.indexOf('sense') > -1 || window.TAC_THEME_NAME.indexOf('ride') > -1 || window.TAC_THEME_NAME.indexOf('refresh') > -1) {
                coContainer = element.parentElement.parentElement;
                checkboxElement.style.textAlign = "right";
            }

            if (window.TAC_THEME_NAME.indexOf('emerge') > -1) {
                coContainer = element.parentElement.parentElement;
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('blockshop') > -1) {
                coContainer = element;
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('symmetry') > -1) {
                coContainer = element.parentElement.parentElement;
                insertionType = "insertbeforecontainer";
            }

            if ((window.TAC_THEME_NAME.indexOf('ella') > -1 && window.TAC_THEME_NAME.indexOf('shella') === -1 && window.TAC_THEME_NAME.indexOf('cellar') === -1) || window.TAC_THEME_NAME.indexOf('cospora') > -1 || window.TAC_THEME_NAME.indexOf('goodwin') > -1 || window.TAC_THEME_NAME.indexOf('jewel') > -1 || window.TAC_THEME_NAME.indexOf('shopbe') > -1 || window.TAC_THEME_NAME.indexOf('new look 2023') > -1 || window.TAC_THEME_NAME === 'boom') {
                checkboxElement.setAttribute('on' + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, 'document.getElementById("effectiveAppsAgreeCB").checked = !document.getElementById("effectiveAppsAgreeCB").checked; termsAndConditionsCheckboxChanged(document.getElementById("effectiveAppsAgreeCB"))');
            }

            if (window.TAC_THEME_NAME.indexOf('capital') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('boho dream') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('charlotte') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('moodring') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('envy') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('lorenza') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('kingdom') > -1) {
                coContainer = element.parentElement.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('spark') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('mr parker') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('akif banners') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('kalles') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('vela framework') > -1) {
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('colors') > -1) {
                insertionType = "insertbeforecontainer";
                coContainer = element.parentElement.parentElement;
            }

            if (window.TAC_THEME_NAME.indexOf('providence') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('athens') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('xclusive') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('eclipse') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('manhattan') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('swdev') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('spotlight') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('architect') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('e-com.express') > -1) {
                coContainer = element;
                checkboxElement.style.textAlign = "left";
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('peach sunset') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('empire') > -1) {
                insertionType = "insertbeforecontainer";
            }

            if (window.TAC_THEME_NAME.indexOf('warehouse') > -1) {
                coContainer = element;
                insertionType = "insertbeforecontainer";
            }

            if (window.EFFECTIVE_APPS_TAC_FUNCTIONALITY === "1") {
                if (insertionType === "insertbeforecontainer") {
                    coContainer.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
                }
                else {
                    coContainer.insertBefore(checkboxElement.cloneNode(true), coContainer.firstChild);
                }
            }
            else {
                if (document.getElementById('effectiveAppsAgreeCB') === null) {
                    if (jQuery(window.EFFECTIVE_APPS_JQUERY_CHECKOUT_BUTTON_SELECTORS).length > 1) {
                        if (jQuery('[tac-co-override="true"]').length > 0) {
                            jQuery('[tac-co-override="true"]')[0].insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
                        }
                        else if (i > 0) {
                            if (insertionType === "insertbeforecontainer") {
                                coContainer.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
                            }
                            else {
                                coContainer.insertBefore(checkboxElement.cloneNode(true), coContainer.firstChild);
                            }
                        }
                    }
                    else {
                        if (insertionType === "insertbeforecontainer") {
                            coContainer.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
                        }
                        else {
                            coContainer.insertBefore(checkboxElement.cloneNode(true), coContainer.firstChild);
                        }
                    }
                }

                TAC_cloneCheckoutButton(element);
            }
        }
    });
    jQuery(this).unbind(window.EFFECTIVE_APPS_TAC_EVENT_TYPE).submit();

    try {
        if ('False' === 'True') {
            addTermsAndConditionsAgreementDateTimeToCart();
        }
        else {
            disableAdditionalPaymentButtons();
        }
    }
    catch (err) {

    }
}

function TAC_getShopifyRootRoute() {
        try {
            if (window.hasOwnProperty('Shopify') && window.Shopify.hasOwnProperty('routes') && window.Shopify.routes.hasOwnProperty('root') && window.Shopify.routes.root !== undefined && window.Shopify.routes.root.startsWith('/') && window.Shopify.routes.root.endsWith('/') && (window.Shopify.routes.root.length === 1 || window.Shopify.routes.root.length === 4)) {
                return window.Shopify.routes.root;
            }
            else {
                return "/";
            }
        }
        catch(err) {
            return "/";
        }
    }

function clearLoadingStateFromElement(elementToClear) {
    setTimeout(function() {
        try {
            if (elementToClear === null) {
                elementToClear = TAC_detectCheckoutButton(false);
            }

            if (elementToClear.classList.contains('btn--loading')) {
                elementToClear.classList.remove('btn--loading');
            }

            if (elementToClear.classList.contains('pending')) {
                elementToClear.classList.remove('pending');
            }

            if (elementToClear.hasAttribute('disabled')) {
                elementToClear.removeAttribute('disabled');
            }

            if (elementToClear.children.length > 0 && elementToClear.children[0].hasAttribute('data-loading')) {
                elementToClear.children[0].removeAttribute('data-loading');
            }

            if (elementToClear.hasAttribute('data-loading')) {
                elementToClear.removeAttribute('data-loading');
            }

            if (elementToClear.hasAttribute('aria-busy')) {
                elementToClear.removeAttribute('aria-busy');
            }

            if (elementToClear.parentElement.hasAttribute('aria-busy')) {
                elementToClear.parentElement.removeAttribute('aria-busy');
            }

            if (elementToClear.parentElement.parentElement.hasAttribute('aria-busy')) {
                elementToClear.parentElement.parentElement.removeAttribute('aria-busy');
            }
        }
        catch(err) {

        }
    }, 500);
}

function wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

function openTermsAndConditionsCheckboxBINModal() {
    window.EFFECTIVE_APPS_BIN_TAC_MODAL = new tingle.modal({
		footer: true,
		stickyFooter: false,
		closeMethods: ['overlay', 'button', 'escape'],
		closeLabel: `Close`,
		cssClass: ['effective-apps-tac-modal'],
	});
	window.EFFECTIVE_APPS_BIN_TAC_MODAL.setContent("<h1 style='text-align: center'>" + window.EFFECTIVE_APPS_TAC_ALERT + "</h1>" + '<p style="text-align: center"><input style="-webkit-appearance: checkbox; float:none; vertical-align: middle;" type="checkbox" id="effectiveAppsAgreeCBModal" onchange="termsAndConditionsCheckboxChanged(this, true);"/>&nbsp;<label style="display:inline; float:none" for="agree">' + window.EFFECTIVE_APPS_TAC_TEXT + '</label></p>');
	window.EFFECTIVE_APPS_BIN_TAC_MODAL.open();
    if ((window.TAC_THEME_NAME.indexOf('ella') > -1 && window.TAC_THEME_NAME.indexOf('shella') === -1 && window.TAC_THEME_NAME.indexOf('cellar') === -1) || window.TAC_THEME_NAME.indexOf('cospora') > -1 || window.TAC_THEME_NAME.indexOf('goodwin') > -1 || window.TAC_THEME_NAME.indexOf('jewel') > -1 || window.TAC_THEME_NAME.indexOf('shopbe') > -1 || window.TAC_THEME_NAME.indexOf('new look 2023') > -1) {
        document.getElementById("effectiveAppsAgreeCBModal").parentElement.setAttribute('on' + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, 'document.getElementById("effectiveAppsAgreeCBModal").checked = !document.getElementById("effectiveAppsAgreeCBModal").checked; termsAndConditionsCheckboxChanged(document.getElementById("effectiveAppsAgreeCBModal"), true);');
    }
}

function detectBuyItNowButton() {
    var resultElement = null;
	var accountButtonsSelectors = [
        '[tac-bin-override="true"]',
        '[class*="buy-with-pay-button-new"]',
        '[class*="ecom-product-single__buy_it_now_btn--checkout"]',
        '[id*="custom-buy-now-button"]',
        '[data-shopify="payment-button"]',
        'shopify-buy-it-now-button',
        '[class*="shopify-payment-button"]',
        'gp-product-button[gp-data*="buy-now"]',
        '[class*="quick-purchase-bar__purchase-button"]',
	];

	for (var selector of accountButtonsSelectors) {
		var elementSearchResult = document.querySelector(selector);
		if (elementSearchResult === null) {
		    continue;
		}

		if (elementSearchResult.getAttribute('tac-bin-ignore') === "true") {
            continue;
        }

        return elementSearchResult;
	}

	return null;
}

function clickOnDynamicBuyItNowButton() {
    try {
        if (document.querySelector('button[class*="shopify-payment-button"]') !== null) {
            document.querySelector('button[class*="shopify-payment-button"]').click();
            return true;
        }
        else if (document.querySelector('shop-pay-wallet-button') !== null) {
            document.querySelector('shop-pay-wallet-button').getOrCreateShadowRoot().children[1].click();
            return true;
        }
        else if (document.querySelector('shopify-google-pay-button') !== null) {
            document.querySelector('shopify-google-pay-button').getOrCreateShadowRoot().children[1].click();
            return true;
        }
        else if (document.querySelector('a[id="more-payment-options-link"]') !== null) {
            document.querySelector('a[id="more-payment-options-link"]').click();
            return true;
        }

        return false;
    }
    catch (err) {
        if (document.querySelector('a[id="more-payment-options-link"]') !== null) {
            document.querySelector('a[id="more-payment-options-link"]').click();
            return true;
        }

        return false
    }
}

function handleBuyItNowButton() {
    if ('False' === 'False') {
        try {
            var buyItNowButtonContainer = detectBuyItNowButton();
            if (buyItNowButtonContainer === null) {
                return;
            }
            var buyInNowAWrapper = document.createElement('a');
            buyInNowAWrapper.id = 'effectiveAppsBINWrapper';
            buyInNowAWrapper.style.textDecoration = 'none';
            buyInNowAWrapper.style.cursor = 'pointer';
            buyInNowAWrapper.setAttribute('on' + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, 'openTermsAndConditionsCheckboxBINModal();');
            wrap(buyItNowButtonContainer, buyInNowAWrapper);
            buyItNowButtonContainer.style.pointerEvents = 'none';
        }
        catch (err)
        {

        }
    }
}

function unHandleBuyItNowButton() {
    try {
        var buyInNowAWrapper = document.getElementById('effectiveAppsBINWrapper');
        if (buyInNowAWrapper === null) {
            return;
        }

        buyInNowAWrapper.removeAttribute('on' + window.EFFECTIVE_APPS_TAC_EVENT_TYPE);
        var buyItNowButtonContainer = detectBuyItNowButton();
        buyItNowButtonContainer.style.pointerEvents = 'auto';
    }
    catch (err) {

    }
}

function TAC_handleiCartCheckoutButton(iCartCheckoutButtonElement) {
    var iCartCheckoutButtonElementWrapper = document.createElement('div');
    iCartCheckoutButtonElementWrapper.style.cursor = 'pointer';
    iCartCheckoutButtonElement.style.pointerEvents = 'none';
    iCartCheckoutButtonElementWrapper.setAttribute('on' + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, 'if (!document.getElementById("effectiveAppsAgreeCB").checked && \'False\' === \'False\') { alert(window.EFFECTIVE_APPS_TAC_ALERT); clearLoadingStateFromElement(this); return false;} document.querySelector(\'[name="icartCheckout"]\').style.pointerEvents = \'auto\'; document.querySelector(\'[name="icartCheckout"]\').click(); return true;');
    wrap(iCartCheckoutButtonElement, iCartCheckoutButtonElementWrapper);
}

function TAC_attachToCartDrawer() {
    if (document.getElementById('effectiveAppsAgreeCB') !== null) {
        return;
    }

    if (document.getElementById('upCart') !== null && document.getElementById('upCart').shadowRoot !== null && document.getElementById('upCart').shadowRoot !== undefined && document.getElementById('upCart').shadowRoot.getElementById('effectiveAppsAgreeCB') !== null) {
        return;
    }

    if (document.getElementById('opus-shadow-container') !== null && document.getElementById('opus-shadow-container').shadowRoot !== null && document.getElementById('opus-shadow-container').shadowRoot !== undefined && document.getElementById('opus-shadow-container').shadowRoot.getElementById('effectiveAppsAgreeCB') !== null) {
        return;
    }

    let insertionType = "insertbefore";
    let checkboxElement = document.createElement('p');
    checkboxElement.innerHTML = '<input  style="-webkit-appearance: checkbox; float:none; vertical-align: middle;" type="checkbox" id="effectiveAppsAgreeCB" onchange="termsAndConditionsCheckboxChanged(this);"/>&nbsp;<label style="display:inline; float:none" for="agree">' + window.EFFECTIVE_APPS_TAC_TEXT + '</label>';
	var checkoutButtonElement = TAC_detectCheckoutButton();
    if (document.getElementById('unicorn-global') !== null) {
        insertionType = "insertbeforeparent2";
    }

	if (checkoutButtonElement !== null && 'False' === 'False' && window.EFFECTIVE_APPS_TAC_FUNCTIONALITY === "1" && checkoutButtonElement.getAttribute('id') !== 'upCart' && checkoutButtonElement.getAttribute('id') !== 'opus-shadow-container') {
	    checkoutButtonElement.setAttribute('on' + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, "if (!document.getElementById('effectiveAppsAgreeCB').checked) { alert(window.EFFECTIVE_APPS_TAC_ALERT); clearLoadingStateFromElement(this); return false;} return true;");
    }
	if (null === checkoutButtonElement) {
		return;
	}

	let elementContainer = checkoutButtonElement.parentElement;
	if (window.TAC_THEME_NAME.indexOf('meka') > -1) {
        insertionType = "insertbeforeparent1";
    }

	if (window.TAC_THEME_NAME.indexOf('testament') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('frame') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('blockshop') > -1) {
        insertionType = "insertbeforeelementbegins";
    }

    if ((window.TAC_THEME_NAME.indexOf('ella') > -1 && window.TAC_THEME_NAME.indexOf('shella') === -1 && window.TAC_THEME_NAME.indexOf('cellar') === -1) || window.TAC_THEME_NAME.indexOf('cospora') > -1 || window.TAC_THEME_NAME.indexOf('goodwin') > -1 || window.TAC_THEME_NAME.indexOf('jewel') > -1 || window.TAC_THEME_NAME.indexOf('shopbe') > -1 || window.TAC_THEME_NAME.indexOf('new look 2023') > -1 || window.TAC_THEME_NAME.indexOf('athens') > -1) {
        checkboxElement.setAttribute('on' + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, 'document.getElementById("effectiveAppsAgreeCB").checked = !document.getElementById("effectiveAppsAgreeCB").checked; termsAndConditionsCheckboxChanged(document.getElementById("effectiveAppsAgreeCB"))');
    }

    if (window.TAC_THEME_NAME.indexOf('dawn') > -1 || window.TAC_THEME_NAME.indexOf('taste') > -1 || window.TAC_THEME_NAME.indexOf('studio') > -1 || window.TAC_THEME_NAME.indexOf('craft') > -1 || window.TAC_THEME_NAME.indexOf('crave') > -1 || window.TAC_THEME_NAME.indexOf('sense') > -1 || window.TAC_THEME_NAME.indexOf('ride') > -1 || window.TAC_THEME_NAME.indexOf('refresh') > -1) {
        elementContainer = checkoutButtonElement.parentElement.parentElement;
    }

    if (window.TAC_THEME_NAME.indexOf('maker') > -1) {
        insertionType = "insertbeforeelementbegins";
        checkboxElement.style.textAlign = 'center';
    }

    if (window.TAC_THEME_NAME.indexOf('avante') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('electro') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('xclusive') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('eclipse') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('maranello') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('ignite') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('vanilla') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('charge') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('ascent') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('barcelona') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('sahara') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('woodstock') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('emerge') > -1) {
        elementContainer = checkoutButtonElement;
        insertionType = "insertbeforeelementbegins";
    }

    if (window.TAC_THEME_NAME.indexOf('empire') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('purity') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('spotlight') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('esencia') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('stiletto') > -1) {
        insertionType = "insertbeforeelementbegins";
    }

    if (window.TAC_THEME_NAME.indexOf('mavon') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('trade') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('shapes') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('vela framework') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('peach sunset') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('swdev') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('envy') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (checkoutButtonElement.getAttribute('class') !== null && checkoutButtonElement.getAttribute('class').indexOf('qsc2-checkout-button') > -1) {
        insertionType = "insertbeforeelementbegins";
    }

    if (checkoutButtonElement.getAttribute('data-servicify') !== null && checkoutButtonElement.getAttribute('data-servicify') === 'checkout') {
        insertionType = "insertbeforeparent1";
    }

    if (checkoutButtonElement.parentElement !== null && checkoutButtonElement.parentElement.getAttribute('id') !== null && checkoutButtonElement.parentElement.getAttribute('id') === 'slidecart-checkout-form') {
        insertionType = "insertbeforeparent1";
    }

    if (checkoutButtonElement.getAttribute('onclick') !== null && checkoutButtonElement.getAttribute('onclick').indexOf('initCheckout') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (checkoutButtonElement.getAttribute('name') === 'icartCheckout') {
        insertionType = "insertbeforeparent2";
        TAC_handleiCartCheckoutButton(checkoutButtonElement);
    }

    if (checkoutButtonElement.getAttribute('id') === 'mu-checkout-button') {
        insertionType = "insertbeforeelementbegins";
    }

    if (checkoutButtonElement.getAttribute('class') !== null && checkoutButtonElement.getAttribute('class').indexOf('mp-checkout-btn-mode') > -1) {
        insertionType = "insertbeforeelementbegins";
    }

    if (checkoutButtonElement.getAttribute('onclick') === 'onCheckoutClick(this)') {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('shrine') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('concept') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('glamelee') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('mr parker') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('akif banners') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('ella') > -1 && window.TAC_THEME_NAME.indexOf('shella') === -1 && window.TAC_THEME_NAME.indexOf('cellar') === -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('athens') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('aurora') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf("spark") > -1) {
        insertionType = "insertbeforeparentelementprevioussibling";
    }

    if (window.TAC_THEME_NAME.indexOf('north') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('oneiro') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('origin') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('vetro') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('vision') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('north') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('grid') > -1) {
        checkboxElement.setAttribute('class', 'cart-subtotal');
        checkboxElement.setAttribute('style', 'margin: 0 30px;');
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('be yours') > -1) {
        insertionType = "insertbeforeparent1";
        elementContainer = checkoutButtonElement.parentElement.parentElement;
    }

    if (window.TAC_THEME_NAME.indexOf('venue') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('flux') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('parallax') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('vantage') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('crave') > -1) {
        elementContainer = checkoutButtonElement.parentElement.parentElement;
    }

    if (window.TAC_THEME_NAME.indexOf('hyper') > -1) {
        elementContainer = checkoutButtonElement.parentElement.parentElement;
    }

    if (window.TAC_THEME_NAME.indexOf('mojave') > -1) {
        insertionType = "insertbeforeparent3";
    }

    if (window.TAC_THEME_NAME.indexOf('noxian') > -1) {
        insertionType = "insertbeforeparent3";
    }

    if (window.TAC_THEME_NAME.indexOf('atlantic') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('impact') > -1) {
        insertionType = "insertbeforeparent1";
    }

    if (window.TAC_THEME_NAME.indexOf('beyond') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (window.TAC_THEME_NAME.indexOf('grid') > -1) {
        insertionType = "insertbeforeparent2";
    }

    if (checkoutButtonElement.getAttribute('id') !== null && checkoutButtonElement.getAttribute('id').indexOf('kaching-cart__checkout-button') > -1) {
        insertionType = "insertbeforeelementbegins";
        window.EFFECTIVE_APPS_CHECKOUT_BUTTON_VALUE_LISTENER = setInterval(function() {
            if (document.querySelector('[id="kaching-cart__checkout-button"]') !== null && document.getElementById("effectiveAppsAgreeCB") !== null) {
                if (!document.getElementById("effectiveAppsAgreeCB").checked && 'False' === 'False') {
                    document.querySelector('[id="kaching-cart__checkout-button"]').setAttribute("disabled", "disabled");
                }
                else {
                    document.querySelector('[id="kaching-cart__checkout-button"]').removeAttribute("disabled");
                }
            }
        }, 500);
    }

    if (window.TAC_THEME_NAME.indexOf('pipeline') > -1 && window.EFFECTIVE_APPS_TAC_FUNCTIONALITY === "2") {
        window.EFFECTIVE_APPS_CHECKOUT_BUTTON_VALUE_LISTENER = setInterval(function() {
            const originalButton = document.querySelector('[tac-co-original="true"] [data-cart-final]');
            const clonedButton = document.querySelector('[tac-co-cloned="true"] [data-cart-final]');
            if (originalButton !== null && clonedButton !== null) {
                clonedButton.innerText = originalButton.innerText;
            }
        }, 500);
    }

    if (checkoutButtonElement.classList.contains("picky-bundle-add-to-cart-button")) {
        insertionType = "insertbeforeparent1";
    }

    if (checkoutButtonElement.classList.contains("picky-cart__button")) {
        insertionType = "insertbeforeparent2";
    }

    if (checkoutButtonElement.getAttribute('class') !== null && checkoutButtonElement.getAttribute('class').indexOf("styles_Footer__checkoutButton") > -1 && window.EFFECTIVE_APPS_TAC_FUNCTIONALITY === "2") {
        window.EFFECTIVE_APPS_CHECKOUT_BUTTON_VALUE_LISTENER = setInterval(function() {
            const originalButton = document.querySelector('[tac-co-original="true"] a[class*="upcart-checkout-button"]');
            const clonedButton = document.querySelector('[tac-co-cloned="true"] a[class*="upcart-checkout-button"]');
            if (originalButton !== null && clonedButton !== null) {
                clonedButton.innerText = originalButton.innerText;
            }
        }, 500);
    }

    if (checkoutButtonElement.getAttribute('id') === 'unicorn_checkout_submit') {
        insertionType = "insertbeforeparent4";
    }

    if (window.TAC_THEME_NAME.indexOf('supply') > -1) {
        checkboxElement.style.position = 'relative';
        checkboxElement.style.marginBottom = '-1%';
    }
    else if (window.TAC_THEME_NAME.indexOf('brooklyn') > -1) {
        checkboxElement.style.position = 'absolute';
        checkboxElement.style.marginBottom = '-25%';
        checkboxElement.style.top = '-20%';
    }
    else if (window.TAC_THEME_NAME.indexOf('boundless') > -1) {
        checkboxElement.style.position = 'absolute';
        checkboxElement.style.marginBottom = '-13%';
        checkboxElement.style.top = '-25%';
    }
    else if (window.TAC_THEME_NAME.indexOf('debutify') > -1) {
        checkboxElement.style.position = 'absolute';
        checkboxElement.style.marginBottom = '-13%';
        checkboxElement.style.top = '-25%';
    }
    else if (window.TAC_THEME_NAME.indexOf('barberry') > -1) {
        elementContainer = checkoutButtonElement.parentElement.parentElement;
    }
    else if (window.TAC_THEME_NAME.indexOf('warehouse') > -1) {
        elementContainer = checkoutButtonElement.parentElement.parentElement;
    }
    else if (window.TAC_THEME_NAME.indexOf('showtime') > -1) {
        insertionType = "insertbeforeelementbegins";
    }

    if (document.getElementById('opus-shadow-container') !== null) {
        const opusShadowContainer = document.getElementById('opus-shadow-container');
        if (opusShadowContainer.shadowRoot !== null && opusShadowContainer.shadowRoot !== undefined && opusShadowContainer.shadowRoot.querySelector('button[class*="checkout"]') !== null) {
            let opusShadowRoot = opusShadowContainer.shadowRoot;
            let opusShadowRootCheckoutButtonElement = opusShadowRoot.querySelector('button[class*="checkout"]');
            opusShadowRootCheckoutButtonElement.parentElement.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
            opusShadowRootCheckoutButtonElement.setAttribute('on' + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, "if (!document.getElementById('opus-shadow-container').shadowRoot.getElementById('effectiveAppsAgreeCB').checked) { alert(window.EFFECTIVE_APPS_TAC_ALERT); clearLoadingStateFromElement(this); return false;} return true;");
        }
    }
    else if (checkoutButtonElement.getAttribute('id') === 'upCart') {
        if (checkoutButtonElement.shadowRoot !== null && checkoutButtonElement.shadowRoot !== undefined && checkoutButtonElement.shadowRoot.querySelector('a[class*="upcart-checkout-button"]') !== null) {
            let upCartShadowRoot = checkoutButtonElement.shadowRoot;
            let shadowRootCheckoutButtonElement = upCartShadowRoot.querySelector('a[class*="upcart-checkout-button"]');
            shadowRootCheckoutButtonElement.parentElement.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
            setInterval(function(){
                if (upCartShadowRoot.querySelector('[tac-co-cloned]') === null) {
                    shadowRootCheckoutButtonElement = upCartShadowRoot.querySelector('a[class*="upcart-checkout-button"]');
                    TAC_cloneCheckoutButton(shadowRootCheckoutButtonElement, true);
                }
            }, 1000);
        }
    }
    else if (insertionType === "insertbeforeelementbegins") {
        checkoutButtonElement.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
    }
    else if (insertionType === "insertbeforeparentelementprevioussibling") {
        checkoutButtonElement.parentElement.previousElementSibling.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
    }
    else if (insertionType === "insertbeforeparent1") {
        checkoutButtonElement.parentElement.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
    }
    else if (insertionType === "insertbeforeparent2") {
        checkoutButtonElement.parentElement.parentElement.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
    }
    else if (insertionType === "insertbeforeparent3") {
        checkoutButtonElement.parentElement.parentElement.parentElement.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
    }
    else if (insertionType === "insertbeforeparent4") {
        checkoutButtonElement.parentElement.parentElement.parentElement.parentElement.insertAdjacentElement('beforebegin', checkboxElement.cloneNode(true));
    }
    else {
        elementContainer.insertBefore(checkboxElement.cloneNode(true), elementContainer.firstChild);
    }

    if (window.EFFECTIVE_APPS_TAC_FUNCTIONALITY === "2" && checkoutButtonElement.getAttribute('id') !== 'upCart' && checkoutButtonElement.getAttribute('id') !== 'opus-shadow-container') {
        if (checkoutButtonElement.getAttribute('id') === 'mu-checkout-button') {
            setTimeout(function() {
                TAC_cloneCheckoutButton(checkoutButtonElement);
            }, 1000);
        }
        else {
            TAC_cloneCheckoutButton(checkoutButtonElement);
        }
    }

    try {
        if ('False' === 'True') {
            addTermsAndConditionsAgreementDateTimeToCart();
        }
        else {
            disableAdditionalPaymentButtons();
        }
    }
    catch (err) {

    }
}

function TAC_cloneCheckoutButton(checkoutButtonElement, isFromShadowRoot=false) {
    var clonedCheckoutButton = checkoutButtonElement.cloneNode(true);
    var originalCheckoutButtonWrapper = document.createElement('span');
    originalCheckoutButtonWrapper.style.display = "none";
    originalCheckoutButtonWrapper.style.width = "0";
    originalCheckoutButtonWrapper.style.height = "0";
    checkoutButtonElement.setAttribute("tac-co-original", "true");
    clonedCheckoutButton.setAttribute("type", "button");
    clonedCheckoutButton.style.cursor = "pointer";
    if (checkoutButtonElement.getAttribute('name') !== 'icartCheckout') {
        clonedCheckoutButton.style.pointerEvents = "auto";
    }

    if (clonedCheckoutButton.classList.contains('wcp_checkout_btn')) {
        clonedCheckoutButton.classList.remove('wcp_checkout_btn');
    }

    if (clonedCheckoutButton.classList.contains('cart__buttons--disabled')) {
        clonedCheckoutButton.classList.remove('cart__buttons--disabled');
    }

    clonedCheckoutButton.removeAttribute("name");
    clonedCheckoutButton.removeAttribute("data-cart-checkout-button");
    clonedCheckoutButton.removeAttribute("data-samples-widget-checkout");
    clonedCheckoutButton.removeAttribute("id");
    clonedCheckoutButton.removeAttribute("sc");
    clonedCheckoutButton.removeAttribute("href");
    clonedCheckoutButton.removeAttribute("data-checkout-button");
    clonedCheckoutButton.removeAttribute("data-ocu-checkout");
    clonedCheckoutButton.removeAttribute("disabled");
    clonedCheckoutButton.setAttribute("tac-co-cloned", "true");
    if (isFromShadowRoot === true) {
        clonedCheckoutButton.setAttribute("on" + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, "if (!document.getElementById('upCart').shadowRoot.getElementById('effectiveAppsAgreeCB').checked && 'False' === 'False') { alert(window.EFFECTIVE_APPS_TAC_ALERT); clearLoadingStateFromElement(this); return false;} document.getElementById('upCart').shadowRoot.querySelector('[tac-co-original]').click(); return true;");
    }
    else {
        clonedCheckoutButton.setAttribute("on" + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, "if (!document.getElementById('effectiveAppsAgreeCB').checked && 'False' === 'False') { alert(window.EFFECTIVE_APPS_TAC_ALERT); clearLoadingStateFromElement(this); return false;} if (document.getElementById('depo-checkout') !== null) { document.getElementById('depo-checkout').click(); } else if (document.querySelector('[name=waio_addToCart]') !== null) { document.querySelector('[name=waio_addToCart]').click(); } else if (document.querySelector('[id=kaching-cart__checkout-button]') !== null) { document.querySelector('[id=kaching-cart__checkout-button]').click(); } else if (document.getElementById('mu-checkout-button') !== null) { location.href = '/checkout'; } else if (document.querySelector('[tac-co-original=\"true\"]') !== null && document.querySelector('[tac-co-original=\"true\"]').querySelector('a[class*=\"upcart-checkout-button\"]') !== null) { document.querySelector('[tac-co-original=\"true\"]').querySelector('a[class*=\"upcart-checkout-button\"]').click(); } else { document.querySelector('[tac-co-original=\"true\"]').click(); } return true;");
    }

    checkoutButtonElement.insertAdjacentElement('beforebegin', clonedCheckoutButton);
    wrap(checkoutButtonElement, originalCheckoutButtonWrapper);
}

function TAC_detectCheckoutButton(ignoreDisabled=true) {
	var resultElement = null;
	var disabledCssSelector = ':not([disabled])';
	var additionalThemeCss = "";
	if (document.getElementById('upCart') !== null && document.getElementById('upCart').shadowRoot !== null && document.getElementById('upCart').shadowRoot !== undefined) {
	    return document.getElementById('upCart');
	}

	if (window.TAC_THEME_NAME.indexOf('grid') > -1) {
	    additionalThemeCss = ':not([class*="checkout-link"]):not([form="checkout_form"]):not([class*="cart-count"])';
	}

	if (ignoreDisabled === false) {
	    disabledCssSelector = '';
	}

	var checkoutButtonSelectors = [
        '[tac-co-override="true"]',
        '*[id*="unicorn_checkout_submit"]' + disabledCssSelector,
        '#mu-checkout-container [class="bss-checkout"]' + disabledCssSelector,
        'button[class*="asc-checkout-button"]' + disabledCssSelector,
        '*[class*="js-checkout-button"]' + disabledCssSelector,
        '#slidecart-checkout-form [name="checkout"]' + disabledCssSelector,
        '*[name*="wsgCheckoutOne"]' + disabledCssSelector,
        '*[id="kaching-cart__checkout-button"]',
        '*[data-samples-widget-checkout]' + disabledCssSelector,
        '*[class*="amtCartDrawer__footer__btnCheckout"]' + disabledCssSelector,
        '*[class*="easc-checkoutBtn"]' + disabledCssSelector,
        '*[id="opus-shadow-container"]' + disabledCssSelector,
        '*[class*="cart-drawer__checkout-btn"]' + disabledCssSelector,
        'div[class*="-checkout"] *[onclick*="initCheckout"]' + disabledCssSelector,
        'button[class*="cd-checkout-section-button"]' + disabledCssSelector,
        '#monster-upsell-cart *[class="mp-checkout-btn-mode"]' + disabledCssSelector,
        '*[data-servicify="checkout"]' + disabledCssSelector,
        '*[onclick*="/checkout"]' + disabledCssSelector,
        '*[onclick="onCheckoutClick(this)"]' + disabledCssSelector,
        '*[class="fcsb-checkout"]' + disabledCssSelector,
		'*[class*="satcb-cs-checkout-btn"]',
		'*[id="nvd-with-checkout-btn"]',
		'*[id="checkout-button"]' + disabledCssSelector,
		'#cart-notification-form *[name*="button-route-"]' + disabledCssSelector,
        '*[data-route-href]' + disabledCssSelector,
        '*[sca_handle_checkout]' + disabledCssSelector,
        '.tt-cart-btn *[onclick="goToCheckout()"]:not([data-cloned="true"]):not([style="display: none;"])' + disabledCssSelector,
        '*[class*="giftbox-checkout-cloned"]' + disabledCssSelector,
        'button[class*="qsc2-checkout-button"]',
        '#cart-form button.cart-drawer--submit' + disabledCssSelector,
        'cart-popup [name="checkout"]' + disabledCssSelector,
        '*[class*="styles_Footer__checkoutButton"]' + disabledCssSelector,
        '*[class*="picky-widget"] *[class*="footer"] *[class*="_buttonsWrapper_"] *[class*="picky-bundle-add-to-cart-button"]' + disabledCssSelector,
        '*[class*="picky-widget"] *[class*="footer"] *[class*="_buttonsWrapper_"] *[class*="picky-cart__button"]' + disabledCssSelector,
        '*[id="depo-checkout"]' + disabledCssSelector,
        '*[class*="#cart-drawer-checkout"] [name="checkout"]' + disabledCssSelector,
        '*[sc="checkout"]' + disabledCssSelector,
        '*[aria-label="checkout-call-to-action-button"]' + disabledCssSelector,
        '*[lb-upsell-listener="true"]' + disabledCssSelector,
        '*[id="mu-checkout-button"]' + disabledCssSelector,
        '*[id="ctm-checkout_jtpl"]' + disabledCssSelector,
        '*[class*="wcp_checkout_btn"]' + disabledCssSelector,
        '*[class*="CustomCartRoot_button-checkout"]' + disabledCssSelector,
        '*[class*="w-commerce-commercecartcheckoutbutton checkout-button-2"]' + disabledCssSelector,
        '*[class*="fs-checkout-btn-custom"]' + disabledCssSelector,
        '*[class*="ymq-fake-checkout-btn"]' + disabledCssSelector,
        'div[class="cart--checkout-button"]' + disabledCssSelector,
        '*[name="icartCheckout"]' + disabledCssSelector,
        '*[class*="rebuy-cart__checkout-button"]:not([style*="display: none"])' + disabledCssSelector,
        '*[id="checkout-submit-button"]' + disabledCssSelector,
		'*[name="checkout"]' + disabledCssSelector + additionalThemeCss,
		'*[name="goto_pp"]' + disabledCssSelector,
		'*[name="goto_gc"]' + disabledCssSelector,
		'*[data-mc="checkout"]' + disabledCssSelector,
		'*[class*="checkout__button"]' + disabledCssSelector,
		'*[value*="Checkout"]',
		'*[value*="Check out"]',
		'*[href*="/checkout"]:not([href*="front_end/login"]):not([href*="/manage/subscription/"]):not([href*="/settings"]):not([href*="checkout-sandbox"]):not(link):not([class="foot-link"]):not([href*="teachable"])' + additionalThemeCss,
        '*[onclick*="/checkout"]',
        '*[name="checkout-exemptify"]' + disabledCssSelector,
        '*[id="checkout"]' + disabledCssSelector,
        '*[id="unifyCheckout"]' + disabledCssSelector,
        '*[data-cart-checkout-button]:not(fieldset)',
        '*[class*="cart-button-checkout"]',
        '*[class*="Cart__Checkout"]:not([name="cart"])',
        '*[class*="cart__checkout"]:not([name="cart"])',
        '*[class*="checkout__fbtn"]',
        '*[name="ddcheckout"]' + disabledCssSelector,
        '*[class*="btnCheckout"]' + disabledCssSelector,
        '*[name="tac-checkout"]' + disabledCssSelector,
        '*[class*="evm_upsell_checkout"]',
        '*[class*="widget__checkout"]',
        'form[action="/checkout"] button[type="submit"]' + disabledCssSelector,
        '*[name="qbk-checkout"]',
        '*[id="cart-checkout"]' + disabledCssSelector,
        '*[class*="cart-checkout-button"]:not([class="cart-checkout-buttons-wrapper"]):not([class*="cart-checkout-buttons p-"]):not(div)' + disabledCssSelector,
        '*[data-layout="checkout"]' + disabledCssSelector,
        '*[onclick*="down_payment_function"]' + disabledCssSelector,
        '.under-cart [for="checkout"]' + disabledCssSelector
	];
	var cartFormSelectors = [
		'input[type="submit"]:not([disabled])',
		'input[type="button"]:not([disabled])'
	];

	for (var selector of checkoutButtonSelectors) {
		var elementSearchResult = document.querySelectorAll(selector);
		if (elementSearchResult.length > 1 && (window.TAC_THEME_NAME.indexOf('dawn') === -1 && window.TAC_THEME_NAME.indexOf('moodring') === -1 && window.TAC_THEME_NAME.indexOf('turbo') === -1 && window.TAC_THEME_NAME.indexOf('empire') === -1 && window.TAC_THEME_NAME.indexOf('showtime') === -1 && window.TAC_THEME_NAME.indexOf('praise') === -1 && window.TAC_THEME_NAME.indexOf('keystone') === -1 && window.TAC_THEME_NAME.indexOf('booster') === -1 && selector !== '*[class*="ymq-fake-checkout-btn"]:not([disabled])')) {
		    if (elementSearchResult[1].getAttribute('tac-ignore') === "true" || elementSearchResult[1]?.style?.display?.toLowerCase()?.indexOf('none') > -1) {
		        continue;
		    }
			return elementSearchResult[1];
		} else if (elementSearchResult.length === 2 && (window.TAC_THEME_NAME.indexOf('turbo') > -1 || window.TAC_THEME_NAME.indexOf('praise') > -1)) {
		    if (elementSearchResult[0].getAttribute('tac-ignore') === "true" || elementSearchResult[0]?.style?.display?.toLowerCase()?.indexOf('none') > -1) {
		        continue;
		    }
			return elementSearchResult[0];
		} else if (elementSearchResult.length === 3 && window.TAC_THEME_NAME.indexOf('turbo') > -1) {
		    if (elementSearchResult[2].getAttribute('tac-ignore') === "true" || elementSearchResult[2]?.style?.display?.toLowerCase()?.indexOf('none') > -1) {
		        continue;
		    }
			return elementSearchResult[2];
		} else if (elementSearchResult.length > 0) {
		    if (elementSearchResult[0].getAttribute('tac-ignore') === "true" || elementSearchResult[0]?.style?.display?.toLowerCase()?.indexOf('none') > -1) {
		        continue;
		    }
			return elementSearchResult[0];
		} else if (elementSearchResult.length === 2 && window.TAC_THEME_NAME.indexOf('keystone') > -1) {
		    if (elementSearchResult[0].getAttribute('tac-ignore') === "true" || elementSearchResult[0]?.style?.display?.toLowerCase()?.indexOf('none') > -1) {
		        continue;
		    }
			return elementSearchResult[0];
		} else if (elementSearchResult.length === 2 && window.TAC_THEME_NAME.indexOf('booster') > -1) {
		    if (elementSearchResult[0].getAttribute('tac-ignore') === "true" || elementSearchResult[0]?.style?.display?.toLowerCase()?.indexOf('none') > -1) {
		        continue;
		    }
			return elementSearchResult[0];
		}
	}

	var cartFormElement = document.querySelector('form[action="/cart"]');
	if (cartFormElement !== null) {
		for (var selector of cartFormSelectors) {
			var element = cartFormElement.querySelector(selector);
			if (element !== null) {
				return element;
			}
		}
	}

	return null;
}

function TAC_waitForCartDrawer() {
	if (document.getElementById('effectiveAppsAgreeCB') !== null) {
		return;
	}

	var checkoutButtonElement = TAC_detectCheckoutButton();
	if (checkoutButtonElement === null) {
		return;
	}

	if (TAC_isElementVisible(checkoutButtonElement) === true) {
		if (window.effectiveAppsTacSp.length > 0) {
            jQuery.getJSON('/cart.js').done(function(data) {
                for (var item of data['items']) {
                    if (window.effectiveAppsTacAllowedProducts.indexOf(item["product_id"].toString()) > -1) {
                        TAC_attachToCartDrawer();
                        break;
                    }
                }
            });
        }
        else {
		    TAC_attachToCartDrawer();
	    }
	}
}

function TAC_isElementVisible(element) {
    if (element.getAttribute('tac-override') === 'true' || element.getAttribute('tac-co-override') === 'true' || element.getAttribute('id') === 'upCart' || element.getAttribute('id') === 'unicorn_checkout_submit') {
        return true;
    }

    if (element.hasAttribute('data-route-href')) {
        return true;
    }

    if (['galleria', 'emerge', 'prestige', 'impact', 'glamelee', 'symmetry', 'aurora', 'refresh', 'pipeline', 'blockshop', 'beyond', 'origin', 'ascent', 'turbo', 'booster'].some(theme => window.TAC_THEME_NAME.indexOf(theme) > -1) && location.pathname.indexOf('/cart') === -1) {
        return true;
    }

    if (window.TAC_THEME_NAME.indexOf('monaco') > -1) {
        return true;
    }

    if (element.getAttribute('id') === 'ctm-checkout_jtpl') {
        return true;
    }

    if (element.getAttribute('id') === 'opus-shadow-container') {
        return true;
    }

    if (element.getAttribute('class') !== null && element.getAttribute('class').indexOf('mp-checkout-btn-mode') > -1) {
        return true;
    }

    if (element.getAttribute('class') !== null && element.getAttribute('class').indexOf('kaching-cart') > -1) {
        return true;
    }

    if (element.getAttribute('class') !== null && element.getAttribute('class').indexOf('cd-checkout') > -1) {
        return true;
    }

    if (element.getAttribute('onclick') !== null && element.getAttribute('onclick').indexOf('initCheckout') > -1) {
        return true;
    }

    if (element.getAttribute('id') === 'corner-cowi-cart-summary-card-cta-button') {
        return true;
    }

    if (element.getAttribute('class') !== null && element.getAttribute('class').indexOf('satcb-cs-checkout-btn') > -1) {
        return true;
    }

    if (element.getAttribute('class') !== null && element.getAttribute('class').indexOf('CustomCartRoot_button-checkout') > -1) {
        return true;
    }

    if (element.getAttribute('onclick') !== null && element.getAttribute('onclick').indexOf('onCheckoutClick(this)') > -1) {
        return true;
    }

    if (element.getAttribute('class') !== null && element.getAttribute('class').indexOf('fcsb-checkout') > -1) {
        return true;
    }

    if (element.getAttribute('class') !== null && element.getAttribute('class').indexOf('picky') > -1) {
        return true;
    }

    if (element.getAttribute('class') !== null && element.getAttribute('class').indexOf('styles_Footer__checkoutButton') > -1) {
        return true;
    }

	if (element.offsetWidth === 0 || element.offsetHeight === 0) {
	    return false;
	}

	var height = document.documentElement.clientHeight,
		rects = element.getClientRects(),
		on_top = function (r) {
			var x = (r.left + r.right) / 2,
				y = (r.top + r.bottom) / 2;

			return (document.elementFromPoint(x, y) === element) || (document.elementFromPoint(x, y) !== null && document.elementFromPoint(x, y).parentElement === element);
		};

	for (var i = 0, l = rects.length; i < l; i++) {
		var r = rects[i],
			in_viewport = r.top > 0 ? r.top <= height : (r.bottom > 0 && r.bottom <= height);
		if (in_viewport && on_top(r)) return true;
	}
	return false;
}

function addTermsAndConditionsAgreementDateTimeToCart() {
    if (window.EFFECTIVE_APPS_TAC_ORDER_CONSENT_ATTRIBUTE.length < 1) {
        return;
    }

    var nowTime = new Date();
    jQuery.post('/cart/update.js', "attributes[" + window.EFFECTIVE_APPS_TAC_ORDER_CONSENT_ATTRIBUTE + "]=" + nowTime).always(function() {
        var isAdded = false;
        jQuery.getJSON('/cart.js').done(function(data) {
            for (var attribute in data['attributes']) {
                if (attribute === window.EFFECTIVE_APPS_TAC_ORDER_CONSENT_ATTRIBUTE) {
                    isAdded = true;
                }
            }
            if (isAdded === false) {
                addTermsAndConditionsAgreementDateTimeToCart();
            }
        });
    });
}

function removeTermsAndConditionsAgreementDateTimeFromCart() {
    if (window.EFFECTIVE_APPS_TAC_ORDER_CONSENT_ATTRIBUTE.length < 1) {
        return;
    }

    jQuery.post('/cart/update.js', "attributes[" + window.EFFECTIVE_APPS_TAC_ORDER_CONSENT_ATTRIBUTE + "]=null").always(function() {
        var isRemoved = false;
        jQuery.getJSON('/cart.js').done(function(data) {
            for (var attribute in data['attributes']) {
                if (attribute === window.EFFECTIVE_APPS_TAC_ORDER_CONSENT_ATTRIBUTE) {
                    if (data['attributes'][attribute] === 'null') {
                        isRemoved = true;
                    }
                }
            }
            if (isRemoved === false) {
                removeTermsAndConditionsAgreementDateTimeFromCart();
            }
        });
    });
}

function termsAndConditionsCheckboxChanged(targetElement, isFromModal = false) {
    try {
        if (targetElement.checked) {
            addTermsAndConditionsAgreementDateTimeToCart();
            if (isFromModal === false) {
                enableAdditionalPaymentButtons();
            }
        }
        else {
            removeTermsAndConditionsAgreementDateTimeFromCart();
            if (isFromModal === false) {
                disableAdditionalPaymentButtons();
            }
        }
    }
    catch(err) {

    }
    if (isFromModal === false) {
        if (jQuery('*[id="effectiveAppsAgreeCB"]').length > 1) {
            jQuery('*[id="effectiveAppsAgreeCB"]').prop( "checked", (targetElement.checked) );
        }
    }

    if (isFromModal === true) {
        unHandleBuyItNowButton();
        try {
            localStorage.setItem('effectiveAppsTacBinConsent', '{"key": "' + window.EFFECTIVE_APPS_TAC_ORDER_CONSENT_ATTRIBUTE + '", "value": "' + new Date().toString() + '"}');
        }
        catch (err) {

        }
        window.EFFECTIVE_APPS_BIN_TAC_MODAL.close();
        const binClickResult = clickOnDynamicBuyItNowButton();
        if (binClickResult === false) {
            const rootRoute = TAC_getShopifyRootRoute();
            let quantity = 1;
            let quantityElement = TAC_detectQuantityElement();
            if (quantityElement !== null) {
                quantity = quantityElement.value;
            }

            let selectedProductVariantId = TAC_getCurrentShopifySelectedProductVariantId();
            if (selectedProductVariantId !== null) {
                location.href = rootRoute + 'cart/' + selectedProductVariantId + ':' + quantity + '';
            }
        }
    }
}

function TAC_spLogic() {
    if (window.location.href.indexOf("/cart") > -1 && window.location.href.indexOf("/products/") === -1 && window.location.href.indexOf("/collections/") === -1) {
        if (window.effectiveAppsTacSp.length > 0) {
            jQuery.getJSON('/cart.js').done(function(data) {
                for (var item of data['items']) {
                    if (window.effectiveAppsTacAllowedProducts.indexOf(item["product_id"].toString()) > -1) {
                        window.TermsAndConditionsCheckbox();
                        break;
                    }
                }
            });
        }
        else {
            window.TermsAndConditionsCheckbox();
        }
    }
    else {
        if ('1' === '1') {
            try {
                if (window.effectiveAppsTacSp.length > 0) {
                    if (window.effectiveAppsTacAllowedProducts.indexOf(ShopifyAnalytics.meta.product.id.toString()) > -1) {
                        setTimeout(function() {
                            handleBuyItNowButton();
                        }, 500);
                    }
                }
                else {
                    setTimeout(function() {
                        handleBuyItNowButton();
                    }, 500);
                }
            }
            catch(err) {

            }
        }

        window.EFFECTIVE_APPS_TAC_CART_LISTENER = setInterval(TAC_waitForCartDrawer, 500);
    }
}

function detectNewsletterElements() {
    let resultElements = [];
	let accountButtonsSelectors = [
        '[tac-nl-override="true"]',
		'[name="commit"]:not([class*="password"]):not([class*="button-reset"]):not([value="Accedi"]):not([value="Accept"])',
		'[class*="subscribe-form__submit"]',
		'[class*="newsletter__input"]',
		'[class*="newsletter__email"]',
		'[id="subscribe"]',
		'[name="subscribe"]',
		'[name="contact[email]"]:not([class*="password"]):not([type="email"]):not([type="text"]):not([class*="product-unavailable"])',
		'[action*="/contact#newsletter-form"] button[type="submit"]',
		'[action*="/contact#newsletter-form"] input[type="submit"]',
		'#footer-newsletter [type="submit"]',
		'button[class="subscribe-form--submit"]',
	];

	for (let selector of accountButtonsSelectors) {
		let elementSearchResults = document.querySelectorAll(selector);
		for (let elementSearchResult of elementSearchResults) {
            if (elementSearchResult.getAttribute('tac-nl-ignore') === "true" || elementSearchResult.getAttribute('tac-nl-detected') === "true") {
                continue;
            }

            if (selector === '[name="contact[email]"]') {
                const closestForm = elementSearchResult.closest('form');
                const submitButton = closestForm?.querySelector('[type="submit"]');
                const actionAttribute = closestForm?.getAttribute('action');
                const classAttribute = closestForm?.getAttribute('class');
                if (closestForm !== null && submitButton !== null && submitButton.getAttribute('tac-nl-detected') !== 'true' && submitButton.getAttribute('tac-nl-ignore') !== 'true') {
                  if (actionAttribute !== null && actionAttribute.includes('contact')) {
                    if (actionAttribute.includes('newsletter') || (classAttribute !== null && classAttribute.includes('newsletter')) || closestForm.innerHTML.includes('newsletter')) {
                      submitButton.setAttribute('tac-nl-detected', 'true');
                      resultElements.push(submitButton);
                    }
                  } else {
                    submitButton.setAttribute('tac-nl-detected', 'true');
                    resultElements.push(submitButton);
                  }
                }
            }
            else {
                elementSearchResult.setAttribute('tac-nl-detected', 'true');
                resultElements.push(elementSearchResult);
            }
        }
	}

	return resultElements;
}

function attachToNewsletter() {
    if ('2' === '2') {
        return;
    }

    let checkboxElement = document.createElement('div');
    let newsletterSubmitButtons = detectNewsletterElements();
    let counter = 1;
    const secondParentThemes = ["narrative", "empire", "minimal", "brooklyn", "venture", "simple", "supply", "debut", "exhibit", "concept", "palo alto"];
    const thirdParentThemes = ["impact"];
    for (let newsletterSubmitButton of newsletterSubmitButtons) {
        let cbContainer = newsletterSubmitButton.parentElement;
        checkboxElement.id = "effectiveAppsAgreeCBNewsletterContainer_" + counter.toString();
        checkboxElement.innerHTML = '<label style="display:inline-block; float:none"><input  style="-webkit-appearance: checkbox; float:none; vertical-align: middle; margin: 0; min-width: 5px;" type="checkbox" id="effectiveAppsAgreeCBNewsletter_' + counter.toString() + '" />&nbsp;' + window.EFFECTIVE_APPS_TAC_TEXT + '</label>';
        if (secondParentThemes.some(theme => window.TAC_THEME_NAME.indexOf(theme) > -1)) {
          cbContainer = newsletterSubmitButton.parentElement.parentElement;
        }

        if (thirdParentThemes.some(theme => window.TAC_THEME_NAME.indexOf(theme) > -1)) {
          cbContainer = newsletterSubmitButton.parentElement.parentElement.parentElement;
        }

        cbContainer.insertAdjacentElement('beforebegin', checkboxElement);
        newsletterSubmitButton.setAttribute("on" + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, "if (!document.getElementById('effectiveAppsAgreeCBNewsletter_" + counter.toString() + "').checked && 'False' === 'False') { alert(window.EFFECTIVE_APPS_TAC_ALERT); clearLoadingStateFromElement(this); return false;} return true;");
        counter++;
    }
}

function detectContactFormElements() {
    let resultElements = [];
    const noSubscribeBtnCSS = ':not([class*="news"]):not([class*="ubscribe"]):not([name*="ubscribe"]):not([id*="ubscribe"]):not([class*="password"])';
	let contactFormSubmitButtonSelectors = [
        '[tac-cf-override="true"]',
		'.contact__button button' + noSubscribeBtnCSS,
		'.contact-form button' + noSubscribeBtnCSS,
		'[id*="ContactSubmit-"]' + noSubscribeBtnCSS,
		'.contact__button input[type="button"]' + noSubscribeBtnCSS,
		'#ContactForm:not([class*="news"]) [type="submit"]' + noSubscribeBtnCSS,
		'#ContactForm:not([class*="news"]) button' + noSubscribeBtnCSS,
		'#contact_form:not([class*="news"]) [type="submit"]' + noSubscribeBtnCSS,
		'#contact_form:not([class*="news"]) button' + noSubscribeBtnCSS,
	];

	for (let selector of contactFormSubmitButtonSelectors) {
		let elementSearchResults = document.querySelectorAll(selector);
		for (let elementSearchResult of elementSearchResults) {
            if (elementSearchResult.getAttribute('tac-cf-ignore') === "true" || elementSearchResult.getAttribute('tac-cf-detected') === "true") {
                continue;
            }

            elementSearchResult.setAttribute('tac-cf-detected', 'true');
            resultElements.push(elementSearchResult);
        }
	}

	return resultElements;
}

function attachToContactForm() {
    if ('2' === '2') {
        return;
    }

    let checkboxElement = document.createElement('div');
    let contactFormSubmitButtons = detectContactFormElements();
    let counter = 1;
    const noParentThemes = ["narrative", "minimal", "brooklyn", "venture", "simple", "supply", "debut", "boundless", "express", "warehouse"];
    for (let contactFormSubmitButton of contactFormSubmitButtons) {
        let cbContainer = contactFormSubmitButton.parentElement;
        if (noParentThemes.some(theme => window.TAC_THEME_NAME.indexOf(theme) > -1)) {
            cbContainer = contactFormSubmitButton;
        }

        checkboxElement.id = "effectiveAppsAgreeCBContactFormContainer_" + counter.toString();
        checkboxElement.innerHTML = '<label style="display:inline-block; float:none"><input  style="-webkit-appearance: checkbox; float:none; vertical-align: middle; margin: 0; min-width: 5px;" type="checkbox" id="effectiveAppsAgreeCBContactForm_' + counter.toString() + '" />&nbsp;' + window.EFFECTIVE_APPS_TAC_TEXT + '</label>';
        cbContainer.insertAdjacentElement('beforebegin', checkboxElement);
        contactFormSubmitButton.setAttribute("on" + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, "if (!document.getElementById('effectiveAppsAgreeCBContactForm_" + counter.toString() + "').checked && 'False' === 'False') { alert(window.EFFECTIVE_APPS_TAC_ALERT); clearLoadingStateFromElement(this); return false;} return true;");
        counter++;
    }
}

function detectAccountButton() {
    var resultElement = null;
	var accountButtonsSelectors = [
        '[tac-rl-override="true"]',
        '#create_customer .form-actions input',
        '#main [class*="form__submit button button--primary"]',
		'[class*="Form__Submit Button Button--primary"]',
		'[class*="form__submit button"]',
		'[action*="/account/login"] [type="submit"]',
        '[action*="/account/login"] button',
		'[action*="/account"] [type="submit"]',
		'[action*="/account"] button',
		'[class*="cf-submit-form"]',
		'[class*="form-action--submit"]'
	];

	for (var selector of accountButtonsSelectors) {
		var elementSearchResult = document.querySelector(selector);
		if (elementSearchResult === null) {
		    continue;
		}

		if (elementSearchResult.getAttribute('tac-rl-ignore') === "true") {
            continue;
        }

        return elementSearchResult;
	}

	return null;
}

function attachToAccountPage() {
    var checkboxElement = document.createElement('div');
    var accountButton = detectAccountButton();
    var cbContainer = accountButton;
    if (accountButton === null || document.getElementById('effectiveAppsAgreeCBAccountContainer') !== null) {
        return;
    }

    checkboxElement.id = "effectiveAppsAgreeCBAccountContainer";
    checkboxElement.innerHTML = '<label style="display:inline-block; float:none"><input  style="-webkit-appearance: checkbox; float:none; vertical-align: middle; margin: 0; min-width: 5px;" type="checkbox" id="effectiveAppsAgreeCBAccount" />&nbsp;' + window.EFFECTIVE_APPS_TAC_TEXT + '</label>';
    if (window.TAC_THEME_NAME.indexOf("simple") > -1) {
        cbContainer = accountButton.parentElement;
    }
    else if (window.TAC_THEME_NAME.indexOf("broadcast") > -1) {
        cbContainer = accountButton.parentElement;
    }
    else if (window.TAC_THEME_NAME.indexOf("expression") > -1) {
        cbContainer = accountButton.parentElement;
    }
    else if (window.TAC_THEME_NAME.indexOf("ella") > -1) {
        cbContainer = accountButton.parentElement;
    }
    else if (window.TAC_THEME_NAME.indexOf("emerge") > -1) {
        cbContainer = accountButton.parentElement;
    }
    else if (window.TAC_THEME_NAME.indexOf("maker") > -1) {
        cbContainer = accountButton.parentElement.parentElement;
    }
    else if (window.TAC_THEME_NAME.indexOf("express") > -1) {
        checkboxElement.style.width = "100%";
    }
    else if (window.TAC_THEME_NAME.indexOf("empire") > -1) {
        cbContainer = accountButton.parentElement;
    }
    else if (['dawn', 'sense', 'crave', 'craft', 'studio', 'taste', 'ride', 'refresh'].indexOf(window.TAC_THEME_NAME) > -1) {
        jQuery('head').append('<style type="text/css">#effectiveAppsAgreeCBAccountContainer a { display: inline-block !important;}</style>');
    }

    cbContainer.insertAdjacentElement('beforebegin', checkboxElement);
    accountButton.setAttribute("on" + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, "if (!document.getElementById('effectiveAppsAgreeCBAccount').checked && 'False' === 'False') { alert(window.EFFECTIVE_APPS_TAC_ALERT); clearLoadingStateFromElement(this); return false;} return true;");
}

function TAC_mainLoader() {
    window.TAC_THEME_NAME = TAC_getShopifyThemeName();
    if ('0' !== '0') {
        setTimeout(TAC_main, parseInt('0'));
    }
    else if (window.TAC_THEME_NAME.indexOf('prestige') > -1 || window.TAC_THEME_NAME.indexOf('techmarket') > -1 || window.TAC_THEME_NAME.indexOf('fashionopolism') > -1 || window.TAC_THEME_NAME.indexOf('vantage') > -1 || window.TAC_THEME_NAME.indexOf('mr parker') > -1 || window.TAC_THEME_NAME.indexOf('testament') > -1 || window.TAC_THEME_NAME.indexOf('foodie') > -1 || document.querySelector('script[src*="lb-upsell"]') !== null || document.querySelector('*[id*="kaching-cart"]') !== null) {
        setTimeout(TAC_main, 1200);
    }
    else {
        TAC_main();
    }
}

function TAC_main() {
    console.group("%cTnC: Terms and Conditions Box by Effective Apps", "background: linear-gradient(90deg, #0BA360 0%, #3CB371 100%); color: #ffffff; font-weight: 700; font-size: 14px; padding: 4px 8px; border-radius: 6px;");
    console.log(`%c✅ Add a Terms & Conditions checkbox in one click\r\n📝 Log consent date and time directly in the order details\r\n🎯 Show the checkbox for specific products and countries only\r\n🌍 Multi-language support for global stores\r\n\r\nLearn more at https://apps.shopify.com/terms-and-conditions-checkbox?utm_source=browser-console&utm_medium=console&utm_campaign=tac (Need help? Contact us at support@effectify.io)`, "font-size: 14px;");
    console.groupEnd();
    window.EFFECTIVE_APPS_JQUERY_CHECKOUT_BUTTON_SELECTORS = '[tac-co-override="true"], button[class*="asc-checkout-button"], div[class*="-checkout"] [onclick*="initCheckout"], [onclick="onCheckoutClick(this)"], [sca_handle_checkout], [class*="giftbox-checkout-cloned"], [sc="checkout"], [id="depo-checkout"], [class*="checkout__button"], [aria-label="checkout-call-to-action-button"], [lb-upsell-listener="true"], [id="mu-checkout-button"], [id="ctm-checkout_jtpl"], [onclick="goToCheckout()"], [class*="wcp_checkout_btn"], [class*="CustomCartRoot_button-checkout"], [class*="w-commerce-commercecartcheckoutbutton checkout-button-2"], [id="checkout-submit-button"], #cart-form button.cart-drawer--submit, [name="checkout"]:not([class*="cart-count"]), [name="goto_pp"], [name="goto_gc"], [href="/checkout"]:not([class*="cart-count"]), [value="Checkout"], [value="Check out"], [onclick*="/checkout"], [name="checkout-exemptify"], [id="checkout"], [data-cart-checkout-button]:not(fieldset), [class*="cart-button-checkout"], [class*="Cart__Checkout"]:not([name="cart"]), *[class*="checkout__fbtn"], [name="ddcheckout"], [class*="btnCheckout"], [id="mu-checkout-button"], [name="tac-checkout"], [class*="rebuy-cart__checkout-button"], [class*="ymq-fake-checkout-btn"], [class*="satcb-cs-checkout-btn"], [class*="evm_upsell_checkout"], [name="qbk-checkout"], [href*="/checkout"]:not([href*="front_end/login"]):not(link):not([class*="cart-count"]), [class*="fs-checkout-btn"], [id="cart-checkout"], [class*="cart-checkout-button"]:not([class="cart-checkout-buttons-wrapper"]):not([class*="cart-checkout-buttons p-"]):not(div), [data-layout="checkout"], [data-mc="checkout"], [id="unifyCheckout"], [class*="ymp_check_mainBtn"], [class*="widget__checkout"], [class*="fs-checkout-btn-custom"], [onclick*="down_payment_function"], .under-cart [for="checkout"]';
    window.EFFECTIVE_APPS_TAC_FUNCTIONALITY = window.EFFECTIVE_APPS_TAC_FUNCTIONALITY_OVERRIDE === undefined ? "2" : window.EFFECTIVE_APPS_TAC_FUNCTIONALITY_OVERRIDE;
    window.EFFECTIVE_APPS_TAC_ORDER_CONSENT_ATTRIBUTE = `Agreed to the Terms and Conditions on`;
    window.EFFECTIVE_APPS_TAC_TEXT = window.EFFECTIVE_APPS_TAC_TEXT_OVERRIDE !== undefined ? window.EFFECTIVE_APPS_TAC_TEXT_OVERRIDE : `<a href="https://www.crtz.xyz/policies/terms-of-service" target="_blank">I agree to the terms and conditions</a>`;
    window.EFFECTIVE_APPS_TAC_ALERT = window.EFFECTIVE_APPS_TAC_ALERT_OVERRIDE !== undefined ? window.EFFECTIVE_APPS_TAC_ALERT_OVERRIDE : `Please agree to the terms and conditions before making a purchase!`;
    window.EFFECTIVE_APPS_TAC_CUSTOM_CSS = ``;
    window.EFFECTIVE_APPS_TAC_EVENT_TYPE = 'click';
    window.EFFECTIVE_APPS_TAC_ADDITIONAL_LANGUAGES = [];
    if (window.EFFECTIVE_APPS_TAC_FUNCTIONALITY_OVERRIDE === undefined && (window.TAC_THEME_NAME.indexOf('grid') > -1 || window.TAC_THEME_NAME.indexOf('avante') > -1 || window.TAC_THEME_NAME.indexOf('techmarket') > -1 || window.TAC_THEME_NAME.indexOf('tailor') > -1 || window.TAC_THEME_NAME.indexOf('reformation') > -1 || window.TAC_THEME_NAME.indexOf('sahara') > -1 || window.TAC_THEME_NAME.indexOf('halo') > -1 || window.TAC_THEME_NAME.indexOf('electro') > -1 || window.TAC_THEME_NAME.indexOf('esencia') > -1 || window.TAC_THEME_NAME.indexOf('vantage') > -1 || window.TAC_THEME_NAME.indexOf('north') > -1 || window.TAC_THEME_NAME.indexOf('shrine') > -1 || window.TAC_THEME_NAME.indexOf('blue night') > -1 || window.TAC_THEME_NAME.indexOf('kagami') > -1 || window.TAC_THEME_NAME.indexOf('testament') > -1 || window.TAC_THEME_NAME.indexOf('athens') > -1 || window.TAC_THEME_NAME.indexOf('fashionopolism') > -1 || window.TAC_THEME_NAME.indexOf('maker') > -1 || window.TAC_THEME_NAME.indexOf('mr parker') > -1 || window.TAC_THEME_NAME.indexOf('blockshop') > -1 || window.TAC_THEME_NAME.indexOf('icon') > -1 || window.TAC_THEME_NAME.indexOf('winscale.io') > -1 || window.TAC_THEME_NAME.indexOf('shapes') > -1 || window.TAC_THEME_NAME.indexOf('avone') > -1 || window.TAC_THEME_NAME.indexOf('vision') > -1 || window.TAC_THEME_NAME.indexOf('vinova vapas') > -1 || window.TAC_THEME_NAME.indexOf('foodie') > -1 || window.TAC_THEME_NAME.indexOf('monaco') > -1 || window.TAC_THEME_NAME.indexOf('testament') > -1 || window.TAC_THEME_NAME.indexOf('xclusive') > -1 || window.TAC_THEME_NAME.indexOf('cospora') > -1 || document.querySelector('script[src*="pickeasy"]') !== null || document.getElementById("icartCommonScriptJs") !== null || (location.pathname.indexOf('/cart') > -1 && document.querySelector('[class*="styles_Footer__checkoutButton"]') !== null) || (location.pathname.indexOf('/cart') > -1 && document.querySelector('[class*="qbk-hide-button"]') !== null) || (location.pathname.indexOf('/cart') > -1 && document.querySelector('[class*="fcsb-checkout"]') !== null) || document.querySelector('*[id*="kaching-cart"]') !== null || document.querySelector('*[id="opus-shadow-container"]') !== null)) {
        window.EFFECTIVE_APPS_TAC_FUNCTIONALITY = "1";
    }

    if (document.querySelector('shopify-accelerated-checkout') !== null && document.querySelector('shopify-accelerated-checkout').children.length > 0 && '1' === '1') {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += "#effectiveAppsBINWrapper { position: relative; } #effectiveAppsBINWrapper::after { content: ''; position: absolute; inset: 0; z-index: 99999; background: transparent; pointer-events: auto; }";
    }

    if (document.querySelector('[class*="styles_Footer__checkoutButton"]') !== null) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '[tac-co-cloned="true"] a[class*="upcart-checkout-button"] { pointer-events: none; }';
    }

    if (window.TAC_THEME_NAME.indexOf('reformation') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsBINWrapper { width: 100%; }';
    }

    if (window.TAC_THEME_NAME.indexOf('flux') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsBINWrapper { width: 100%; }';
    }

    if (window.TAC_THEME_NAME.indexOf('madrid') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '.cart__ctas p { z-index: 11111111!important; }';
    }

    if (window.TAC_THEME_NAME.indexOf('frame') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsBINWrapper { width: 100%; } #effectiveAppsAgreeCB, #effectiveAppsAgreeCBModal { display: inline !important; margin-right: 0px; margin-top: -10px; border: unset !important; clip: unset !important; height: unset !important; overflow: unset !important; padding: unset !important; position: unset !important; width: unset !important; box-sizing: unset !important; } #effectiveAppsAgreeCB { margin-bottom: -9px!important; } .tingle-modal-box * { color: black!important;} .cart__blocks p { text-align: left!important;}';
    }

    if (window.TAC_THEME_NAME.indexOf('techmarket') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB{margin-top: -5px;max-width: 20px;} [for="effectiveAppsAgreeCB"] a {text-transform: unset!important; font-weight: unset!important; color: unset!important; width: unset!important; text-align: unset!important; line-height:unset!important; padding: unset!important}';
    }

    if (window.TAC_THEME_NAME.indexOf('multi') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '[class*="#cart-drawer-checkout"] p { background: var(--color-g-bg); z-index: 1111111; position: relative; }';
    }

    if (window.TAC_THEME_NAME.indexOf('sleek') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsBINWrapper { width: 100%; }';
    }

    if (window.TAC_THEME_NAME.indexOf('wonder') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB { display: inline!important; }';
    }

    if (window.TAC_THEME_NAME.indexOf('pinnacle') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsBINWrapper { width: 100%; } #effectiveAppsAgreeCB, #effectiveAppsAgreeCBModal { display: inline !important; margin-right: 0px; margin-top: -10px; border: unset !important; clip: unset !important; height: unset !important; overflow: unset !important; padding: unset !important; position: unset !important; width: unset !important; box-sizing: unset !important; } #effectiveAppsAgreeCB { margin-right: -10px!important; }';
    }

    if (window.TAC_THEME_NAME.indexOf('turbo') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsBINWrapper { min-width: 100%; } .purchase-details__buttons { flex-wrap: unset!important; } .tingle-modal { z-index: 99999; }';
    }

    if (window.TAC_THEME_NAME.indexOf('vanilla') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#cart-form{margin-top:5px!important;}.cart-drawer--body p:not([class]){padding-left: 24px;padding-right: 24px;padding-top:15px;}';
    }

    if (window.TAC_THEME_NAME.indexOf('xclusive') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '[for="effectiveAppsAgreeCB"] a:before {content: unset!important;display: unset!important;position: unset!important;left: unset!important;right: unset!important; top: unset!important;bottom: unset!important;z-index: unset!important;box-shadow: unset!important;border-radius: unset!important;border: unset!important;background: unset!important;}[for="agree"] a:before {content: unset!important;display: unset!important;position: unset!important;left: unset!important;right: unset!important; top: unset!important;bottom: unset!important;z-index: unset!important;box-shadow: unset!important;border-radius: unset!important;border: unset!important;background: unset!important;} [for="effectiveAppsAgreeCB"] a:after {content: unset!important;display: unset!important;position: unset!important;left: unset!important;right: unset!important; top: unset!important;bottom: unset!important;z-index: unset!important;box-shadow: unset!important;border-radius: unset!important;border: unset!important;background: unset!important;}[for="agree"] a:after {content: unset!important;display: unset!important;position: unset!important;left: unset!important;right: unset!important; top: unset!important;bottom: unset!important;z-index: unset!important;box-shadow: unset!important;border-radius: unset!important;border: unset!important;background: unset!important;}';
    }

    if (window.TAC_THEME_NAME.indexOf('eclipse') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB:after {content: unset!important;}#effectiveAppsAgreeCB:before {content: unset!important;}';
    }

    if (window.TAC_THEME_NAME.indexOf('ignite') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '.drawer__footer p { padding-left: 19px !important; padding-right: 19px !important; }';
    }

    if (window.TAC_THEME_NAME.indexOf('vision') > -1) {
        window.EFFECTIVE_APPS_TAC_EVENT_TYPE = 'pointerdown';
    }

    if (window.TAC_THEME_NAME.indexOf('charge') > -1) {
        window.EFFECTIVE_APPS_TAC_EVENT_TYPE = 'pointerdown';
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '.cart-sidebar__items .message-wrapper { display: none!important; }';
    }

    if (document.querySelector('button[class*="cd-checkout"]') !== null) {
        window.EFFECTIVE_APPS_TAC_EVENT_TYPE = 'pointerdown';
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '.opus-container-content .bottom-section p { padding-bottom:10px; text-align: left!important; }';
    }

    if (document.querySelector('[src*="rebuy"]') !== null) {
        window.EFFECTIVE_APPS_TAC_EVENT_TYPE = 'pointerdown';
    }

    if (document.querySelector('*[id*="kaching-cart"]') !== null) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB { display: inline!important; } [tac-co-cloned="true"] .kaching-cart__loading-spinner { display: none!important; }';
    }

    if (document.querySelector('div[class*="-checkout"] *[onclick*="initCheckout"]') !== null) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += 'div[class*="-checkout"] p:first-child {display: none;}';
        window.EFFECTIVE_APPS_TAC_EVENT_TYPE = 'pointerdown';
    }

    if (document.getElementById('upCart') !== null && document.getElementById('upCart').shadowRoot !== null && document.getElementById('upCart').shadowRoot !== undefined) {
        window.EFFECTIVE_APPS_TAC_EVENT_TYPE = 'pointerdown';
    }

    if (document.getElementById('opus-shadow-container') !== null && document.getElementById('opus-shadow-container').shadowRoot !== null && document.getElementById('opus-shadow-container').shadowRoot !== undefined) {
        window.EFFECTIVE_APPS_TAC_EVENT_TYPE = 'pointerdown';
    }

    if (window.TAC_THEME_NAME.indexOf('showtime') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '[class*="#cart-drawer-checkout"] p:first-of-type { position: relative !important; z-index: 111111; }';
    }

    if (window.TAC_THEME_NAME.indexOf('icon') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '.product-add{float: unset !important;}';
    }

    if (window.TAC_THEME_NAME.indexOf('honey') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB { max-width: 15px; width: 15px; display: inline !important; }';
    }

    if (window.TAC_THEME_NAME.indexOf('showtime') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += 'div[class*="#cart-drawer-checkout"]{background: linear-gradient(0deg, var(--color-g-bg) 100%, rgba(0, 0, 0, 0) 100%);}';
    }

    if (window.TAC_THEME_NAME.indexOf('avante') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCBAccount { height: unset !important; display: inline !important; max-width: 20px !important; } [id*="effectiveAppsAgreeCBContactForm_"] { height: unset !important; display: inline !important; max-width: 20px !important; } [id*="effectiveAppsAgreeCBNewsletter_"] { height: unset !important; display: inline !important; max-width: 20px !important; } #effectiveAppsAgreeCBModal { height: unset !important; display: inline !important; max-width: 20px !important; } #effectiveAppsAgreeCB { height: unset !important; display: inline !important; max-width: 20px !important; } .cart-notification__links{margin-top: 20px !important;} #cart-notification-wrapper {margin-bottom: 15px !important;} .cart__checkout p:first-child{margin-bottom: 15px !important;} #effectiveAppsAgreeCB:checked:after{display:none;} #effectiveAppsAgreeCBAccount:checked:after{display:none;} [id*="effectiveAppsAgreeCBContactForm_"]:checked:after{display:none;} [id*="effectiveAppsAgreeCBNewsletter_"]:checked:after{display:none;} #effectiveAppsAgreeCBModal:checked:after{display:none;}';
    }

    if (window.TAC_THEME_NAME.indexOf('spark') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += "input[id='effectiveAppsAgreeCB']:checked:before{ content: unset !important; position: unset !important; top: unset !important; right: unset !important; bottom: unset !important; left: unset !important; background-color: unset !important; } input[id='effectiveAppsAgreeCB'] { transform: scale(0.75) !important; }";
    }

    if (window.TAC_THEME_NAME.indexOf('lorenza') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB { max-width: 15px; } .quick-cart__footer p:first-child {margin: 0 !important; }';
    }

    if (document.querySelector('*[src*="upcart-cart-drawer"]') !== null) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#upCart #UpcartPopup .Stack { margin-top: unset !important; }';
    }

    if (window.TAC_THEME_NAME.indexOf('plain jane') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB { -webkit-appearance: checkbox !important; }';
    }

    if (window.TAC_THEME_NAME.indexOf('venue') > -1 && location.href.indexOf('/cart') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '.cart__button p:first-child {text-align:right!important;}';
    }

    if (document.getElementById('ctm-checkout_jtpl') !== null) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '[tac-co-cloned="true"] { width: 100%; }';
    }

    if (window.TAC_THEME_NAME.indexOf('halo') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB { margin-top: -8px; display: unset !important; border: unset !important; clip: unset !important; height: unset !important; overflow: unset !important; padding: unset !important; position: unset !important; width: unset !important; box-sizing: unset !important; }';
    }

    if (window.TAC_THEME_NAME === "mt") {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB, #effectiveAppsAgreeCBModal { display: inline !important; margin-top: -2px; border: unset !important; clip: unset !important; height: unset !important; overflow: unset !important; padding: unset !important; position: unset !important; width: unset !important; box-sizing: unset !important; }';
    }

    if (window.TAC_THEME_NAME.indexOf('athens') > -1 || (window.TAC_THEME_NAME.indexOf('ella') > -1 && window.TAC_THEME_NAME.indexOf('shella') === -1 && window.TAC_THEME_NAME.indexOf('cellar') === -1)) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB+label:before{display: none!important;} #effectiveAppsAgreeCB+label:after{display: none!important;} #effectiveAppsAgreeCB{padding-left: 0!important;} .button-continue { margin-top: 15px; } #effectiveAppsAgreeCBAccount { display: unset !important; border: unset !important; clip: unset !important; height: unset !important; overflow: unset !important; padding: unset !important; position: unset !important; width: unset !important; box-sizing: unset !important; } [id*="effectiveAppsAgreeCBNewsletter_"] { display: unset !important; border: unset !important; clip: unset !important; height: unset !important; overflow: unset !important; padding: unset !important; position: unset !important; width: unset !important; box-sizing: unset !important; } [id*="effectiveAppsAgreeCBContactForm_"] { display: unset !important; border: unset !important; clip: unset !important; height: unset !important; overflow: unset !important; padding: unset !important; position: unset !important; width: unset !important; box-sizing: unset !important; } #effectiveAppsAgreeCBModal { pointer-events: none; display: unset !important; border: unset !important; clip: unset !important; height: unset !important; overflow: unset !important; padding: unset !important; position: unset !important; width: unset !important; box-sizing: unset !important; } #effectiveAppsAgreeCB { pointer-events: none; display: unset !important; border: unset !important; clip: unset !important; height: unset !important; overflow: unset !important; padding: unset !important; position: unset !important; width: unset !important; box-sizing: unset !important; }';
    }

    if (window.TAC_THEME_NAME.indexOf('cospora') > -1) {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += '#effectiveAppsAgreeCB+label:before { margin-top: -3px !important; } #effectiveAppsAgreeCB+label:after { top: 3px !important; }';
    }

    if ('1' === '1') {
        window.EFFECTIVE_APPS_TAC_CUSTOM_CSS += "#effectiveAppsBINWrapper shopify-buy-it-now-button:nth-child(2) { display: none !important; }";
    }

    if (window.EFFECTIVE_APPS_TAC_CUSTOM_CSS.length > 0) {
        jQuery('head').append('<style type="text/css">' + window.EFFECTIVE_APPS_TAC_CUSTOM_CSS + '</style>');
    }

    for (let additionalLanguage of window.EFFECTIVE_APPS_TAC_ADDITIONAL_LANGUAGES) {
        const code = additionalLanguage.languageCode.toLowerCase();

        // Extract the first segment of the path: "/nl-nl/page" → "nl"
        const pathSegment = location.pathname.split('/')[1]?.split('-')[0].toLowerCase();

        // Extract the subdomain: "nl-nl.example.com" → "nl"
        const hostSegment = location.hostname.replace(/^www\./, '').split('.')[0].split('-')[0].toLowerCase();

        if (pathSegment === code || hostSegment === code) {
            window.EFFECTIVE_APPS_TAC_TEXT = additionalLanguage.termsText;
            window.EFFECTIVE_APPS_TAC_ALERT = additionalLanguage.alertText;
            break;
        }
    }

    if (window.TAC_SCRIPT_INJECTED === undefined) {
	    window.TAC_SCRIPT_INJECTED = true;
        try {
            if (document.getElementById('satcb_sticky_cart') !== null) {
                document.getElementById('satcb_sticky_cart').children[0].setAttribute('tac-ignore', 'true');
            }
        }
        catch(err) {

        }

        window.effectiveAppsTacSp = '';
        window.effectiveAppsTacAllowedProducts = window.effectiveAppsTacSp.split(',');
        var tacCountriesStr = '';
        if (tacCountriesStr !== '') {
            var tacCountries = tacCountriesStr.split(',');
            TAC_getGeolocationCountry(function(resultCountry) {
                if (tacCountries.indexOf(resultCountry) > -1) {
                    TAC_spLogic();
                    TAC_accountPageLogic();
                    attachToNewsletter();
                    attachToContactForm();
                }
            });
        }
        else {
            TAC_spLogic();
            TAC_accountPageLogic();
            attachToNewsletter();
            attachToContactForm();
        }
    }
}

function TAC_accountPageLogic() {
    if (['2','4'].indexOf('1') > -1 && location.pathname.indexOf('/account/register') > -1) {
        attachToAccountPage();
    }
    else if (['3','4'].indexOf('1') > -1 && location.pathname.indexOf('/account/login') > -1) {
        attachToAccountPage();
    }
}

function TAC_loadjQuery(url, success){
     var script = document.createElement('script');
     script.src = url;
     var head = document.getElementsByTagName('head')[0],
     done = false;
     head.appendChild(script);
     script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
             done = true;
             success();
             script.onload = script.onreadystatechange = null;
             head.removeChild(script);
        }
    };
}

function disableAdditionalPaymentButtons() {
    if ('False' === 'False') {
        if (document.getElementById('dynamic-checkout-cart') !== null) {
            document.getElementById('dynamic-checkout-cart').setAttribute("style", "pointer-events: none");
            jQuery("[class=additional-checkout-buttons], [class=additional_checkout_buttons], [class=cart__additional_checkout], [class*=additional]:not(section)").bind("click", additionalPaymentButtonsClick);
        }

        sezzleElements = document.querySelectorAll(".sezzle-checkout-button");
        sezzleElements.forEach(function (element) {
            var wrapper = document.createElement('span');
            wrapper.classList.add("tac-sezzle-wrapper")
            wrap(element, wrapper);
            element.style.pointerEvents = "none";
            jQuery('[class="tac-sezzle-wrapper"]').bind("click", additionalPaymentButtonsClick);
        });

        if (document.getElementById('bss-b2b-net-term-button') !== null) {
            document.getElementById('bss-b2b-net-term-button').setAttribute("on" + window.EFFECTIVE_APPS_TAC_EVENT_TYPE, "if (!document.getElementById('effectiveAppsAgreeCB').checked && 'False' === 'False') { alert(window.EFFECTIVE_APPS_TAC_ALERT); clearLoadingStateFromElement(this); return false;} return true;");
        }

        if (document.querySelector('[class*="rebuy-cart__shop-pay-button"]') !== null) {
            document.querySelector('[class*="rebuy-cart__shop-pay-button"]').disabled = true;
        }

        if (document.getElementById('upCart') !== null) {
            upCartElement = document.getElementById('upCart').shadowRoot.getElementById("upcart-express-pay-buttons-container");
            if (upCartElement !== null) {
                var wrapper = document.createElement('span');
                wrapper.classList.add("tac-upcart-wrapper")
                wrap(upCartElement, wrapper);
                upCartElement.style.pointerEvents = "none";
                jQuery('[class="tac-upcart-wrapper"]').bind("click", additionalPaymentButtonsClick);
            }
        }


    }
}

function enableAdditionalPaymentButtons() {
    if (document.getElementById('dynamic-checkout-cart') !== null) {
        document.getElementById('dynamic-checkout-cart').setAttribute("style", "pointer-events: auto");
        jQuery("[class=additional-checkout-buttons], [class=additional_checkout_buttons], [class=cart__additional_checkout], [class*=additional]:not(section)").unbind("click", additionalPaymentButtonsClick);
    }

    sezzleElements = document.querySelectorAll(".sezzle-checkout-button");
    sezzleElements.forEach(function (element) {
        element.style.pointerEvents = "auto";
        jQuery('[class="tac-sezzle-wrapper"]').unbind("click", additionalPaymentButtonsClick);
    });

    if (document.getElementById('bss-b2b-net-term-button') !== null) {
        document.getElementById('bss-b2b-net-term-button').removeAttribute("on" + window.EFFECTIVE_APPS_TAC_EVENT_TYPE);
    }

    if (document.querySelector('[class*="rebuy-cart__shop-pay-button"]') !== null) {
        document.querySelector('[class*="rebuy-cart__shop-pay-button"]').disabled = false;
    }

    if (document.getElementById('upCart') !== null) {
        upCartElement = document.getElementById('upCart').shadowRoot.getElementById("upcart-express-pay-buttons-container");
        if (upCartElement !== null) {
            upCartElement.style.pointerEvents = "auto";
            jQuery('[class="tac-upcart-wrapper"]').unbind("click", additionalPaymentButtonsClick);
        }
    }
}

function additionalPaymentButtonsClick() {
    if (false === jQuery('#effectiveAppsAgreeCB').is(':checked')) {
        alert(window.EFFECTIVE_APPS_TAC_ALERT);
        return false;
    }
}

function TAC_detectQuantityElement() {
    let quantityElementSelectors = [
        '*[tac-qty-override="true"]',
        '[class*="VolumeDiscountRadio"] [name*="variant-selector"]:checked',
        '.product__quantity--radios [name="quantity"]:checked',
        '[name="quantity"]',
    ];

    for (let selector of quantityElementSelectors) {
        let elementSearchResult = document.querySelector(selector);
        if (elementSearchResult !== null && elementSearchResult.getAttribute('cau-ignore') === "true") {
            continue;
        }

        if (elementSearchResult !== null) {
            return elementSearchResult;
        }
    }

    return null;
}

function TAC_getCurrentShopifySelectedProductVariantId() {
    try {
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.get('variant') !== null) {
            return queryParams.get('variant').toString();
        }

        if (window.hasOwnProperty('ShopifyAnalytics') && window.ShopifyAnalytics.hasOwnProperty('meta') && window.ShopifyAnalytics.meta.hasOwnProperty('selectedVariantId') && ShopifyAnalytics.meta.selectedVariantId !== undefined && ShopifyAnalytics.meta.selectedVariantId.length > 0) {
            return ShopifyAnalytics.meta.selectedVariantId;
        }

        let selectedProductVariantIdSelectors = ['[class="product-variant-id"]'];
        for (let selector of selectedProductVariantIdSelectors) {
            if (document.querySelector(selector) !== null) {
                return document.querySelector(selector).value.toString();
            }
        }

        if (window.hasOwnProperty('ShopifyAnalytics') && window.ShopifyAnalytics.hasOwnProperty('meta') && window.ShopifyAnalytics.meta.hasOwnProperty('product') && window.ShopifyAnalytics.meta.product.hasOwnProperty('variants') && window.ShopifyAnalytics.meta.product.variants.length > 0) {
            return ShopifyAnalytics.meta.product.variants[0].id;
        }

        return null;
    }
    catch(err) {
        return null;
    }
}

function TAC_getGeolocationCountry(callback) {
    jQuery.getJSON('https://get.geojs.io/v1/ip/geo.json', function(result) {
        callback(result.country_code);
    });
}

function TAC_getShopifyThemeName() {
    try {
        if (window.TAC_THEME_NAME_OVERRIDE !== undefined) {
            return window.TAC_THEME_NAME_OVERRIDE;
        }
        else if (window.BOOMR !== undefined && window.BOOMR.themeName !== undefined && window.BOOMR.themeName.length > 0) {
            return window.BOOMR.themeName.toLowerCase();
        }
        else if (window.Shopify !== undefined && window.Shopify.theme !== undefined && window.Shopify.theme !== null && window.Shopify.theme.schema_name !== undefined && window.Shopify.theme.schema_name !== null && window.Shopify.theme.schema_name.length > 0) {
            return window.Shopify.theme.schema_name.toLowerCase();
        }
        else if (window.Shopify !== undefined && window.Shopify.theme !== undefined && window.Shopify.theme !== null && window.Shopify.theme.name !== undefined && window.Shopify.theme.name !== null && window.Shopify.theme.name.length > 0){
            return Shopify.theme.name.toLowerCase();
        }
        else {
            return "";
        }
    }
    catch (err) {
        return "";
    }
}

function TAC_openPopup(url) {
    var w = 600;
    var h = 850;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    return window.open(url, "", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
}

if (typeof jQuery === 'undefined') {
    TAC_loadjQuery('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        function () {
            jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/tingle/0.15.1/tingle.min.css">');
            TAC_loadjQuery("https://cdnjs.cloudflare.com/ajax/libs/tingle/0.15.1/tingle.min.js", TAC_mainLoader);
    });
} else {
    TAC_loadjQuery('https://cdnjs.cloudflare.com/ajax/libs/tingle/0.15.1/tingle.min.js',
        function () {
            jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/tingle/0.15.1/tingle.min.css">');
            TAC_mainLoader();
    });
}

var _0x2245f3 = termsAndConditionsCheckboxChanged;
var _0x2277f3 = clearLoadingStateFromElement;
var _0x113d2f = openTermsAndConditionsCheckboxBINModal;

