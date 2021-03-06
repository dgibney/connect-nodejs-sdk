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
var CancelTerminalCheckoutResponse = require('../model/CancelTerminalCheckoutResponse');
var CreateTerminalCheckoutRequest = require('../model/CreateTerminalCheckoutRequest');
var CreateTerminalCheckoutResponse = require('../model/CreateTerminalCheckoutResponse');
var GetTerminalCheckoutResponse = require('../model/GetTerminalCheckoutResponse');
var SearchTerminalCheckoutsRequest = require('../model/SearchTerminalCheckoutsRequest');
var SearchTerminalCheckoutsResponse = require('../model/SearchTerminalCheckoutsResponse');

/**
 * Terminal service.
 * @module api/TerminalApi
 */

/**
 * Constructs a new TerminalApi. 
 * @alias module:api/TerminalApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * CancelTerminalCheckout
   * Note: This endpoint is in beta.
   * Cancels a Terminal checkout request, if the status of the request permits it.
   * @param {String} checkoutId Unique ID for the desired &#x60;TerminalCheckout&#x60;
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CancelTerminalCheckoutResponse} and HTTP response
   */
  this.cancelTerminalCheckoutWithHttpInfo = function(checkoutId) {
    var postBody = null;

    // verify the required parameter 'checkoutId' is set
    if (checkoutId === undefined || checkoutId === null) {
      throw new Error("Missing the required parameter 'checkoutId' when calling cancelTerminalCheckout");
    }


    var pathParams = {
      'checkout_id': checkoutId
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
    var returnType = CancelTerminalCheckoutResponse;

    return this.apiClient.callApi(
      '/v2/terminals/checkouts/{checkout_id}/cancel', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CancelTerminalCheckout
   * Cancels a Terminal checkout request, if the status of the request permits it.
   * @param {String} checkoutId Unique ID for the desired &#x60;TerminalCheckout&#x60;
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CancelTerminalCheckoutResponse}
   */
  this.cancelTerminalCheckout = function(checkoutId) {
    return this.cancelTerminalCheckoutWithHttpInfo(checkoutId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreateTerminalCheckout
   * Note: This endpoint is in beta.
   * Creates a new Terminal checkout request and sends it to the specified device to take a payment for the requested amount.
   * @param {module:model/CreateTerminalCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateTerminalCheckoutResponse} and HTTP response
   */
  this.createTerminalCheckoutWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createTerminalCheckout");
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
    var returnType = CreateTerminalCheckoutResponse;

    return this.apiClient.callApi(
      '/v2/terminals/checkouts', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateTerminalCheckout
   * Creates a new Terminal checkout request and sends it to the specified device to take a payment for the requested amount.
   * @param {module:model/CreateTerminalCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateTerminalCheckoutResponse}
   */
  this.createTerminalCheckout = function(body) {
    return this.createTerminalCheckoutWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * GetTerminalCheckout
   * Note: This endpoint is in beta.
   * Retrieves a Terminal checkout request by checkout_id.
   * @param {String} checkoutId Unique ID for the desired &#x60;TerminalCheckout&#x60;
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetTerminalCheckoutResponse} and HTTP response
   */
  this.getTerminalCheckoutWithHttpInfo = function(checkoutId) {
    var postBody = null;

    // verify the required parameter 'checkoutId' is set
    if (checkoutId === undefined || checkoutId === null) {
      throw new Error("Missing the required parameter 'checkoutId' when calling getTerminalCheckout");
    }


    var pathParams = {
      'checkout_id': checkoutId
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
    var returnType = GetTerminalCheckoutResponse;

    return this.apiClient.callApi(
      '/v2/terminals/checkouts/{checkout_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * GetTerminalCheckout
   * Retrieves a Terminal checkout request by checkout_id.
   * @param {String} checkoutId Unique ID for the desired &#x60;TerminalCheckout&#x60;
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetTerminalCheckoutResponse}
   */
  this.getTerminalCheckout = function(checkoutId) {
    return this.getTerminalCheckoutWithHttpInfo(checkoutId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SearchTerminalCheckouts
   * Note: This endpoint is in beta.
   * Retrieves a filtered list of Terminal checkout requests created by the account making the request.
   * @param {module:model/SearchTerminalCheckoutsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchTerminalCheckoutsResponse} and HTTP response
   */
  this.searchTerminalCheckoutsWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchTerminalCheckouts");
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
    var returnType = SearchTerminalCheckoutsResponse;

    return this.apiClient.callApi(
      '/v2/terminals/checkouts/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SearchTerminalCheckouts
   * Retrieves a filtered list of Terminal checkout requests created by the account making the request.
   * @param {module:model/SearchTerminalCheckoutsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchTerminalCheckoutsResponse}
   */
  this.searchTerminalCheckouts = function(body) {
    return this.searchTerminalCheckoutsWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
