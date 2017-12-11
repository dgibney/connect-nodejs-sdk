/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var AdditionalRecipient = require('./AdditionalRecipient');
var Address = require('./Address');
var Order = require('./Order');




/**
 * The Checkout model module.
 * @module model/Checkout
 * @version 2.5.1
 */

/**
 * Constructs a new <code>Checkout</code>.
 * Square Checkout lets merchants accept online payments for supported payment types using a checkout workflow hosted on squareup.com.
 * @alias module:model/Checkout
 * @class
 */
var exports = function() {
  var _this = this;











};

/**
 * Constructs a <code>Checkout</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Checkout} obj Optional instance to populate.
 * @return {module:model/Checkout} The populated <code>Checkout</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('checkout_page_url')) {
      obj['checkout_page_url'] = ApiClient.convertToType(data['checkout_page_url'], 'String');
    }
      if (data.hasOwnProperty('ask_for_shipping_address')) {
      obj['ask_for_shipping_address'] = ApiClient.convertToType(data['ask_for_shipping_address'], 'Boolean');
    }
      if (data.hasOwnProperty('merchant_support_email')) {
      obj['merchant_support_email'] = ApiClient.convertToType(data['merchant_support_email'], 'String');
    }
      if (data.hasOwnProperty('pre_populate_buyer_email')) {
      obj['pre_populate_buyer_email'] = ApiClient.convertToType(data['pre_populate_buyer_email'], 'String');
    }
      if (data.hasOwnProperty('pre_populate_shipping_address')) {
      obj['pre_populate_shipping_address'] = Address.constructFromObject(data['pre_populate_shipping_address']);
    }
      if (data.hasOwnProperty('redirect_url')) {
      obj['redirect_url'] = ApiClient.convertToType(data['redirect_url'], 'String');
    }
      if (data.hasOwnProperty('order')) {
      obj['order'] = Order.constructFromObject(data['order']);
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('additional_recipients')) {
      obj['additional_recipients'] = ApiClient.convertToType(data['additional_recipients'], [AdditionalRecipient]);
    }
    }
  return obj;
}

/**
 * ID generated by Square Checkout when a new checkout is requested.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The URL that the buyer's browser should be redirected to after the checkout is completed.
 * @member {String} checkout_page_url
 */
exports.prototype['checkout_page_url'] = undefined;
/**
 * If `true`, Square Checkout will collect shipping information on your behalf and store that information with the transaction information in your Square Dashboard.  Default: `false`.
 * @member {Boolean} ask_for_shipping_address
 */
exports.prototype['ask_for_shipping_address'] = undefined;
/**
 * The email address to display on the Square Checkout confirmation page and confirmation email that the buyer can use to contact the merchant.  If this value is not set, the confirmation page and email will display the primary email address associated with the merchant's Square account.  Default: none; only exists if explicitly set.
 * @member {String} merchant_support_email
 */
exports.prototype['merchant_support_email'] = undefined;
/**
 * If provided, the buyer's email is pre-populated on the checkout page as an editable text field.  Default: none; only exists if explicitly set.
 * @member {String} pre_populate_buyer_email
 */
exports.prototype['pre_populate_buyer_email'] = undefined;
/**
 * If provided, the buyer's shipping info is pre-populated on the checkout page as editable text fields.  Default: none; only exists if explicitly set.
 * @member {module:model/Address} pre_populate_shipping_address
 */
exports.prototype['pre_populate_shipping_address'] = undefined;
/**
 * The URL to redirect to after checkout is completed with `checkoutId`, Square's `orderId`, `transactionId`, and `referenceId` appended as URL parameters. For example, if the provided redirect_url is `http://www.example.com/order-complete`, a successful transaction redirects the customer to:  `http://www.example.com/order-complete?checkoutId=xxxxxx&orderId=xxxxxx&referenceId=xxxxxx&transactionId=xxxxxx`  If you do not provide a redirect URL, Square Checkout will display an order confirmation page on your behalf; however Square strongly recommends that you provide a redirect URL so you can verify the transaction results and finalize the order through your existing/normal confirmation workflow.
 * @member {String} redirect_url
 */
exports.prototype['redirect_url'] = undefined;
/**
 * Order to be checked out.
 * @member {module:model/Order} order
 */
exports.prototype['order'] = undefined;
/**
 * The time when the checkout was created, in RFC 3339 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * Additional recipients (other than the merchant) receiving a portion of this checkout. For example, fees assessed on the purchase by a third party integration.
 * @member {Array.<module:model/AdditionalRecipient>} additional_recipients
 */
exports.prototype['additional_recipients'] = undefined;



module.exports = exports;


