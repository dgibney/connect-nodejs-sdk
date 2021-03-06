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
var DeviceCode = require('./DeviceCode');
var Error = require('./Error');




/**
 * The CreateDeviceCodeResponse model module.
 * Note: This model is in beta.
 * @module model/CreateDeviceCodeResponse
 */

/**
 * Constructs a new <code>CreateDeviceCodeResponse</code>.
 * 
 * @alias module:model/CreateDeviceCodeResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CreateDeviceCodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateDeviceCodeResponse} obj Optional instance to populate.
 * @return {module:model/CreateDeviceCodeResponse} The populated <code>CreateDeviceCodeResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('device_code')) {
      obj['device_code'] = DeviceCode.constructFromObject(data['device_code']);
    }
    }
  return obj;
}

/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * The created DeviceCode object containing the device code string.
 * @member {module:model/DeviceCode} device_code
 */
exports.prototype['device_code'] = undefined;



module.exports = exports;



