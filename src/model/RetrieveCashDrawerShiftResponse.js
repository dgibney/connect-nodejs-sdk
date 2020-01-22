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
var CashDrawerShift = require('./CashDrawerShift');
var Error = require('./Error');




/**
 * The RetrieveCashDrawerShiftResponse model module.
 * Note: This model is in beta.
 * @module model/RetrieveCashDrawerShiftResponse
 */

/**
 * Constructs a new <code>RetrieveCashDrawerShiftResponse</code>.
 *
 * @alias module:model/RetrieveCashDrawerShiftResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>RetrieveCashDrawerShiftResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveCashDrawerShiftResponse} obj Optional instance to populate.
 * @return {module:model/RetrieveCashDrawerShiftResponse} The populated <code>RetrieveCashDrawerShiftResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('cash_drawer_shift')) {
      obj['cash_drawer_shift'] = CashDrawerShift.constructFromObject(data['cash_drawer_shift']);
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The cash drawer shift queried for.
 * @member {module:model/CashDrawerShift} cash_drawer_shift
 */
exports.prototype['cash_drawer_shift'] = undefined;
/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;


