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
var CreateDeviceCodeRequest = require('../model/CreateDeviceCodeRequest');
var CreateDeviceCodeResponse = require('../model/CreateDeviceCodeResponse');
var GetDeviceCodeResponse = require('../model/GetDeviceCodeResponse');
var ListDeviceCodesResponse = require('../model/ListDeviceCodesResponse');

/**
 * Devices service.
 * @module api/DevicesApi
 */

/**
 * Constructs a new DevicesApi. 
 * @alias module:api/DevicesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * CreateDeviceCode
   * Note: This endpoint is in beta.
   * Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected terminal mode.
   * @param {module:model/CreateDeviceCodeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateDeviceCodeResponse} and HTTP response
   */
  this.createDeviceCodeWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createDeviceCode");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-06-25';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateDeviceCodeResponse;

    return this.apiClient.callApi(
      '/v2/devices/codes', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateDeviceCode
   * Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected terminal mode.
   * @param {module:model/CreateDeviceCodeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateDeviceCodeResponse}
   */
  this.createDeviceCode = function(body) {
    return this.createDeviceCodeWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * GetDeviceCode
   * Note: This endpoint is in beta.
   * Retrieves DeviceCode with the associated ID.
   * @param {String} id The unique identifier for the device code.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetDeviceCodeResponse} and HTTP response
   */
  this.getDeviceCodeWithHttpInfo = function(id) {
    var postBody = null;

    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getDeviceCode");
    }


    var pathParams = {
      'id': id
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-06-25';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = GetDeviceCodeResponse;

    return this.apiClient.callApi(
      '/v2/devices/codes/{id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * GetDeviceCode
   * Retrieves DeviceCode with the associated ID.
   * @param {String} id The unique identifier for the device code.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetDeviceCodeResponse}
   */
  this.getDeviceCode = function(id) {
    return this.getDeviceCodeWithHttpInfo(id)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListDeviceCodes
   * Note: This endpoint is in beta.
   * Lists all DeviceCodes associated with the merchant.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
   * @param {String} opts.locationId If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty.
   * @param {String} opts.productType If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListDeviceCodesResponse} and HTTP response
   */
  this.listDeviceCodesWithHttpInfo = function(opts) {
    opts = opts || {};
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
      'cursor': opts['cursor'],
      'location_id': opts['locationId'],
      'product_type': opts['productType']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-06-25';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListDeviceCodesResponse;

    return this.apiClient.callApi(
      '/v2/devices/codes', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListDeviceCodes
   * Lists all DeviceCodes associated with the merchant.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
   * @param {String} opts.locationId If specified, only returns DeviceCodes of the specified location. Returns DeviceCodes of all locations if empty.
   * @param {String} opts.productType If specified, only returns DeviceCodes targeting the specified product type. Returns DeviceCodes of all product types if empty.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListDeviceCodesResponse}
   */
  this.listDeviceCodes = function(opts) {
    return this.listDeviceCodesWithHttpInfo(opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
