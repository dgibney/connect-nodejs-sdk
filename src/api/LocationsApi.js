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
var ListLocationsResponse = require('../model/ListLocationsResponse');

/**
 * Locations service.
 * @module api/LocationsApi
 * @version 2.5.2
 */

/**
 * Constructs a new LocationsApi. 
 * @alias module:api/LocationsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * ListLocations
   * Provides the details for all of a business&#39;s locations.  Most other Connect API endpoints have a required &#x60;location_id&#x60; path parameter. The &#x60;id&#x60; field of the [&#x60;Location&#x60;](#type-location) objects returned by this endpoint correspond to that &#x60;location_id&#x60; parameter.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListLocationsResponse} and HTTP response
   */
  this.listLocationsWithHttpInfo = function() {
    var postBody = null;


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListLocationsResponse;

    return this.apiClient.callApi(
      '/v2/locations', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListLocations
   * Provides the details for all of a business&#39;s locations.  Most other Connect API endpoints have a required &#x60;location_id&#x60; path parameter. The &#x60;id&#x60; field of the [&#x60;Location&#x60;](#type-location) objects returned by this endpoint correspond to that &#x60;location_id&#x60; parameter.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListLocationsResponse}
   */
  this.listLocations = function() {
    return this.listLocationsWithHttpInfo()
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
