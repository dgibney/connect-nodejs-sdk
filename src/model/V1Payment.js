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
var Device = require('./Device');
var V1Money = require('./V1Money');
var V1PaymentItemization = require('./V1PaymentItemization');
var V1PaymentTax = require('./V1PaymentTax');
var V1Refund = require('./V1Refund');
var V1Tender = require('./V1Tender');




/**
 * The V1Payment model module.
 * @module model/V1Payment
 * @version 2.5.2
 */

/**
 * Constructs a new <code>V1Payment</code>.
 * @alias module:model/V1Payment
 * @class
 */
var exports = function() {
  var _this = this;

























};

/**
 * Constructs a <code>V1Payment</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Payment} obj Optional instance to populate.
 * @return {module:model/V1Payment} The populated <code>V1Payment</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('merchant_id')) {
      obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('creator_id')) {
      obj['creator_id'] = ApiClient.convertToType(data['creator_id'], 'String');
    }
      if (data.hasOwnProperty('device')) {
      obj['device'] = Device.constructFromObject(data['device']);
    }
      if (data.hasOwnProperty('payment_url')) {
      obj['payment_url'] = ApiClient.convertToType(data['payment_url'], 'String');
    }
      if (data.hasOwnProperty('receipt_url')) {
      obj['receipt_url'] = ApiClient.convertToType(data['receipt_url'], 'String');
    }
      if (data.hasOwnProperty('inclusive_tax_money')) {
      obj['inclusive_tax_money'] = V1Money.constructFromObject(data['inclusive_tax_money']);
    }
      if (data.hasOwnProperty('additive_tax_money')) {
      obj['additive_tax_money'] = V1Money.constructFromObject(data['additive_tax_money']);
    }
      if (data.hasOwnProperty('tax_money')) {
      obj['tax_money'] = V1Money.constructFromObject(data['tax_money']);
    }
      if (data.hasOwnProperty('tip_money')) {
      obj['tip_money'] = V1Money.constructFromObject(data['tip_money']);
    }
      if (data.hasOwnProperty('discount_money')) {
      obj['discount_money'] = V1Money.constructFromObject(data['discount_money']);
    }
      if (data.hasOwnProperty('total_collected_money')) {
      obj['total_collected_money'] = V1Money.constructFromObject(data['total_collected_money']);
    }
      if (data.hasOwnProperty('processing_fee_money')) {
      obj['processing_fee_money'] = V1Money.constructFromObject(data['processing_fee_money']);
    }
      if (data.hasOwnProperty('net_total_money')) {
      obj['net_total_money'] = V1Money.constructFromObject(data['net_total_money']);
    }
      if (data.hasOwnProperty('refunded_money')) {
      obj['refunded_money'] = V1Money.constructFromObject(data['refunded_money']);
    }
      if (data.hasOwnProperty('swedish_rounding_money')) {
      obj['swedish_rounding_money'] = V1Money.constructFromObject(data['swedish_rounding_money']);
    }
      if (data.hasOwnProperty('gross_sales_money')) {
      obj['gross_sales_money'] = V1Money.constructFromObject(data['gross_sales_money']);
    }
      if (data.hasOwnProperty('net_sales_money')) {
      obj['net_sales_money'] = V1Money.constructFromObject(data['net_sales_money']);
    }
      if (data.hasOwnProperty('inclusive_tax')) {
      obj['inclusive_tax'] = ApiClient.convertToType(data['inclusive_tax'], [V1PaymentTax]);
    }
      if (data.hasOwnProperty('additive_tax')) {
      obj['additive_tax'] = ApiClient.convertToType(data['additive_tax'], [V1PaymentTax]);
    }
      if (data.hasOwnProperty('tender')) {
      obj['tender'] = ApiClient.convertToType(data['tender'], [V1Tender]);
    }
      if (data.hasOwnProperty('refunds')) {
      obj['refunds'] = ApiClient.convertToType(data['refunds'], [V1Refund]);
    }
      if (data.hasOwnProperty('itemizations')) {
      obj['itemizations'] = ApiClient.convertToType(data['itemizations'], [V1PaymentItemization]);
    }
    }
  return obj;
}

/**
 * The payment's unique identifier.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The unique identifier of the merchant that took the payment.
 * @member {String} merchant_id
 */
exports.prototype['merchant_id'] = undefined;
/**
 * The time when the payment was created, in ISO 8601 format.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The unique identifier of the Square account that took the payment.
 * @member {String} creator_id
 */
exports.prototype['creator_id'] = undefined;
/**
 * The device that took the payment.
 * @member {module:model/Device} device
 */
exports.prototype['device'] = undefined;
/**
 * The URL of the payment's detail page in the merchant dashboard. The merchant must be signed in to the merchant dashboard to view this page.
 * @member {String} payment_url
 */
exports.prototype['payment_url'] = undefined;
/**
 * The URL of the receipt for the payment. Note that for split tender payments, this URL corresponds to the receipt for the first tender listed in the payment's tender field. Each Tender object has its own receipt_url field you can use to get the other receipts associated with a split tender payment.
 * @member {String} receipt_url
 */
exports.prototype['receipt_url'] = undefined;
/**
 * The sum of all inclusive taxes associated with the payment.
 * @member {module:model/V1Money} inclusive_tax_money
 */
exports.prototype['inclusive_tax_money'] = undefined;
/**
 * The sum of all additive taxes associated with the payment.
 * @member {module:model/V1Money} additive_tax_money
 */
exports.prototype['additive_tax_money'] = undefined;
/**
 * The total of all taxes applied to the payment. This is always the sum of inclusive_tax_money and additive_tax_money.
 * @member {module:model/V1Money} tax_money
 */
exports.prototype['tax_money'] = undefined;
/**
 * The total of all tips applied to the payment.
 * @member {module:model/V1Money} tip_money
 */
exports.prototype['tip_money'] = undefined;
/**
 * The total of all discounts applied to the payment.
 * @member {module:model/V1Money} discount_money
 */
exports.prototype['discount_money'] = undefined;
/**
 * The total of all discounts applied to the payment.
 * @member {module:model/V1Money} total_collected_money
 */
exports.prototype['total_collected_money'] = undefined;
/**
 * The total of all processing fees collected by Square for the payment.
 * @member {module:model/V1Money} processing_fee_money
 */
exports.prototype['processing_fee_money'] = undefined;
/**
 * The amount to be deposited into the merchant's bank account for the payment.
 * @member {module:model/V1Money} net_total_money
 */
exports.prototype['net_total_money'] = undefined;
/**
 * The total of all refunds applied to the payment.
 * @member {module:model/V1Money} refunded_money
 */
exports.prototype['refunded_money'] = undefined;
/**
 * The total of all sales, including any applicable taxes, rounded to the smallest legal unit of currency (e.g., the nearest penny in USD, the nearest nickel in CAD)
 * @member {module:model/V1Money} swedish_rounding_money
 */
exports.prototype['swedish_rounding_money'] = undefined;
/**
 * The total of all sales, including any applicable taxes.
 * @member {module:model/V1Money} gross_sales_money
 */
exports.prototype['gross_sales_money'] = undefined;
/**
 * The total of all sales, minus any applicable taxes.
 * @member {module:model/V1Money} net_sales_money
 */
exports.prototype['net_sales_money'] = undefined;
/**
 * All of the inclusive taxes associated with the payment.
 * @member {Array.<module:model/V1PaymentTax>} inclusive_tax
 */
exports.prototype['inclusive_tax'] = undefined;
/**
 * All of the additive taxes associated with the payment.
 * @member {Array.<module:model/V1PaymentTax>} additive_tax
 */
exports.prototype['additive_tax'] = undefined;
/**
 * All of the additive taxes associated with the payment.
 * @member {Array.<module:model/V1Tender>} tender
 */
exports.prototype['tender'] = undefined;
/**
 * All of the refunds applied to the payment.
 * @member {Array.<module:model/V1Refund>} refunds
 */
exports.prototype['refunds'] = undefined;
/**
 * The items purchased in the payment.
 * @member {Array.<module:model/V1PaymentItemization>} itemizations
 */
exports.prototype['itemizations'] = undefined;



module.exports = exports;



