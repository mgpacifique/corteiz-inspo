
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CA1Se9kg.js","/cdn/shopifycloud/checkout-web/assets/c1/app.Cpk3YqeY.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.BlcbPCsK.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.Dv7bq1NH.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.DKmvTuUh.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-utilities.CMmiCZuF.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.BvW1I87K.js","/cdn/shopifycloud/checkout-web/assets/c1/purchasing-company-isValidPurchasingCompanyBillingAddress.D8fJMoK0.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion.DY6X0_9l.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors.CzXHovYh.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.D2t8UPfc.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.NmlECKAR.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery.CluQPsrF.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation.DaKq9W_N.js","/cdn/shopifycloud/checkout-web/assets/c1/CaptureEvents-ButtonWithRegisterWebPixel.cHMiKVnC.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.9La1npoH.js","/cdn/shopifycloud/checkout-web/assets/c1/page-Information.FXwYRh6q.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.Dd-CmKv_.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.CBN1MG8O.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.fybtBocU.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour.IfUBMzBn.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer.VyT-3Gcx.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod.DZFFjIkm.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.CFfPu3fM.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.DUVtnk4Y.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox.CQibSAup.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.C3OoUthO.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index.CDw8MCJz.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.CmxVt6Cq.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.cEPgpjhq.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.BwMAjs4h.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.DmM1n0lz.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NotFound.C-ppsiYq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/utilities.F5mjvpnu.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ButtonWithRegisterWebPixel.cHonVK30.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SplitDeliveryMerchandiseContainer.pVQgcb_P.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NoAddressLocationFullDetour.CpFaJIpx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayPaymentRequiredMethod.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletSandbox.CnR7qNLY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0001/8192/7990/files/crtz-right-turn-v3_x320.gif?v=1613610000"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  