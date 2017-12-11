# SquareConnect.V1EmployeesApi

All URIs are relative to *https://connect.squareup.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmployee**](V1EmployeesApi.md#createEmployee) | **POST** /v1/me/employees | Creates an employee for a business.
[**createEmployeeRole**](V1EmployeesApi.md#createEmployeeRole) | **POST** /v1/me/roles | Creates an employee role you can then assign to employees.
[**createTimecard**](V1EmployeesApi.md#createTimecard) | **POST** /v1/me/timecards | Creates a timecard for an employee. Each timecard corresponds to a single shift.
[**deleteTimecard**](V1EmployeesApi.md#deleteTimecard) | **DELETE** /v1/me/timecards/{timecard_id} | Deletes a timecard. Deleted timecards are still accessible from Connect API endpoints, but the value of their deleted field is set to true. See Handling deleted timecards for more information.
[**listCashDrawerShifts**](V1EmployeesApi.md#listCashDrawerShifts) | **GET** /v1/{location_id}/cash-drawer-shifts | Provides the details for all of a location&#39;s cash drawer shifts during a date range. The date range you specify cannot exceed 90 days.
[**listEmployeeRoles**](V1EmployeesApi.md#listEmployeeRoles) | **GET** /v1/me/roles | Provides summary information for all of a business&#39;s employee roles.
[**listEmployees**](V1EmployeesApi.md#listEmployees) | **GET** /v1/me/employees | Provides summary information for all of a business&#39;s employees.
[**listTimecardEvents**](V1EmployeesApi.md#listTimecardEvents) | **GET** /v1/me/timecards/{timecard_id}/events | Provides summary information for all events associated with a particular timecard.
[**listTimecards**](V1EmployeesApi.md#listTimecards) | **GET** /v1/me/timecards | Provides summary information for all of a business&#39;s employee timecards.
[**retrieveCashDrawerShift**](V1EmployeesApi.md#retrieveCashDrawerShift) | **GET** /v1/{location_id}/cash-drawer-shifts/{shift_id} | Provides the details for a single cash drawer shift, including all events that occurred during the shift.
[**retrieveEmployee**](V1EmployeesApi.md#retrieveEmployee) | **GET** /v1/me/employees/{employee_id} | Provides the details for a single employee.
[**retrieveEmployeeRole**](V1EmployeesApi.md#retrieveEmployeeRole) | **GET** /v1/me/roles/{role_id} | Provides the details for a single employee role.
[**retrieveTimecard**](V1EmployeesApi.md#retrieveTimecard) | **GET** /v1/me/timecards/{timecard_id} | Provides the details for a single timecard.
[**updateEmployee**](V1EmployeesApi.md#updateEmployee) | **PUT** /v1/me/employees/{employee_id} | V1 UpdateEmployee
[**updateEmployeeRole**](V1EmployeesApi.md#updateEmployeeRole) | **PUT** /v1/me/roles/{role_id} | Modifies the details of an employee role.
[**updateTimecard**](V1EmployeesApi.md#updateTimecard) | **PUT** /v1/me/timecards/{timecard_id} | Modifies a timecard&#39;s details. This creates an API_EDIT event for the timecard. You can view a timecard&#39;s event history with the List Timecard Events endpoint.


<a name="createEmployee"></a>
# **createEmployee**
> V1Employee createEmployee(body)

Creates an employee for a business.

Creates an employee for a business.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var body = new SquareConnect.V1Employee(); // V1Employee | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createEmployee(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1Employee**](V1Employee.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Employee**](V1Employee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEmployeeRole"></a>
# **createEmployeeRole**
> V1EmployeeRole createEmployeeRole(employeeRole)

Creates an employee role you can then assign to employees.

Creates an employee role you can then assign to employees.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var employeeRole = new SquareConnect.V1EmployeeRole(); // V1EmployeeRole | An EmployeeRole object with a name and permissions, and an optional owner flag.

apiInstance.createEmployeeRole(employeeRole).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeRole** | [**V1EmployeeRole**](V1EmployeeRole.md)| An EmployeeRole object with a name and permissions, and an optional owner flag. | 

### Return type

[**V1EmployeeRole**](V1EmployeeRole.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createTimecard"></a>
# **createTimecard**
> V1Timecard createTimecard(body)

Creates a timecard for an employee. Each timecard corresponds to a single shift.

Creates a timecard for an employee. Each timecard corresponds to a single shift.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var body = new SquareConnect.V1Timecard(); // V1Timecard | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.createTimecard(body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1Timecard**](V1Timecard.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Timecard**](V1Timecard.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTimecard"></a>
# **deleteTimecard**
> Object deleteTimecard(timecardId)

Deletes a timecard. Deleted timecards are still accessible from Connect API endpoints, but the value of their deleted field is set to true. See Handling deleted timecards for more information.

Deletes a timecard. Deleted timecards are still accessible from Connect API endpoints, but the value of their deleted field is set to true. See Handling deleted timecards for more information.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var timecardId = "timecardId_example"; // String | The ID of the timecard to delete.

apiInstance.deleteTimecard(timecardId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timecardId** | **String**| The ID of the timecard to delete. | 

### Return type

**Object**

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listCashDrawerShifts"></a>
# **listCashDrawerShifts**
> [V1CashDrawerShift] listCashDrawerShifts(locationId, opts)

Provides the details for all of a location&#39;s cash drawer shifts during a date range. The date range you specify cannot exceed 90 days.

Provides the details for all of a location&#39;s cash drawer shifts during a date range. The date range you specify cannot exceed 90 days.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var locationId = "locationId_example"; // String | The ID of the location to list cash drawer shifts for.

var opts = { 
  'order': "order_example", // String | The order in which cash drawer shifts are listed in the response, based on their created_at field. Default value: ASC
  'beginTime': "beginTime_example", // String | The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days.
  'endTime': "endTime_example" // String | The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time.
};
apiInstance.listCashDrawerShifts(locationId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list cash drawer shifts for. | 
 **order** | **String**| The order in which cash drawer shifts are listed in the response, based on their created_at field. Default value: ASC | [optional] 
 **beginTime** | **String**| The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time minus 90 days. | [optional] 
 **endTime** | **String**| The beginning of the requested reporting period, in ISO 8601 format. Default value: The current time. | [optional] 

### Return type

[**[V1CashDrawerShift]**](V1CashDrawerShift.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listEmployeeRoles"></a>
# **listEmployeeRoles**
> [V1EmployeeRole] listEmployeeRoles(opts)

Provides summary information for all of a business&#39;s employee roles.

Provides summary information for all of a business&#39;s employee roles.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var opts = { 
  'order': "order_example", // String | The order in which employees are listed in the response, based on their created_at field.Default value: ASC 
  'limit': 56, // Number | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
  'batchToken': "batchToken_example" // String | A pagination cursor to retrieve the next set of results for your original query to the endpoint.
};
apiInstance.listEmployeeRoles(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **String**| The order in which employees are listed in the response, based on their created_at field.Default value: ASC  | [optional] 
 **limit** | **Number**| The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. | [optional] 
 **batchToken** | **String**| A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 

### Return type

[**[V1EmployeeRole]**](V1EmployeeRole.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listEmployees"></a>
# **listEmployees**
> [V1Employee] listEmployees(opts)

Provides summary information for all of a business&#39;s employees.

Provides summary information for all of a business&#39;s employees.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var opts = { 
  'order': "order_example", // String | The order in which employees are listed in the response, based on their created_at field.      Default value: ASC 
  'beginUpdatedAt': "beginUpdatedAt_example", // String | If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format
  'endUpdatedAt': "endUpdatedAt_example", // String | If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format.
  'beginCreatedAt': "beginCreatedAt_example", // String | If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format.
  'endCreatedAt': "endCreatedAt_example", // String | If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format.
  'status': "status_example", // String | If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE).
  'externalId': "externalId_example", // String | If provided, the endpoint returns only employee entities with the specified external_id.
  'limit': 56, // Number | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
  'batchToken': "batchToken_example" // String | A pagination cursor to retrieve the next set of results for your original query to the endpoint.
};
apiInstance.listEmployees(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **String**| The order in which employees are listed in the response, based on their created_at field.      Default value: ASC  | [optional] 
 **beginUpdatedAt** | **String**| If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format | [optional] 
 **endUpdatedAt** | **String**| If filtering results by there updated_at field, the end of the requested reporting period, in ISO 8601 format. | [optional] 
 **beginCreatedAt** | **String**| If filtering results by their created_at field, the beginning of the requested reporting period, in ISO 8601 format. | [optional] 
 **endCreatedAt** | **String**| If filtering results by their created_at field, the end of the requested reporting period, in ISO 8601 format. | [optional] 
 **status** | **String**| If provided, the endpoint returns only employee entities with the specified status (ACTIVE or INACTIVE). | [optional] 
 **externalId** | **String**| If provided, the endpoint returns only employee entities with the specified external_id. | [optional] 
 **limit** | **Number**| The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. | [optional] 
 **batchToken** | **String**| A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 

### Return type

[**[V1Employee]**](V1Employee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTimecardEvents"></a>
# **listTimecardEvents**
> [V1TimecardEvent] listTimecardEvents(timecardId)

Provides summary information for all events associated with a particular timecard.

Provides summary information for all events associated with a particular timecard.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var timecardId = "timecardId_example"; // String | The ID of the timecard to list events for.

apiInstance.listTimecardEvents(timecardId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timecardId** | **String**| The ID of the timecard to list events for. | 

### Return type

[**[V1TimecardEvent]**](V1TimecardEvent.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTimecards"></a>
# **listTimecards**
> [V1Timecard] listTimecards(opts)

Provides summary information for all of a business&#39;s employee timecards.

Provides summary information for all of a business&#39;s employee timecards.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var opts = { 
  'order': "order_example", // String | The order in which timecards are listed in the response, based on their created_at field.
  'employeeId': "employeeId_example", // String | If provided, the endpoint returns only timecards for the employee with the specified ID.
  'beginClockinTime': "beginClockinTime_example", // String | If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format.
  'endClockinTime': "endClockinTime_example", // String | If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format.
  'beginClockoutTime': "beginClockoutTime_example", // String | If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format.
  'endClockoutTime': "endClockoutTime_example", // String | If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format.
  'beginUpdatedAt': "beginUpdatedAt_example", // String | If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format.
  'endUpdatedAt': "endUpdatedAt_example", // String | If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format.
  'deleted': true, // Boolean | If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don't provide this parameter, both valid and deleted timecards are returned.
  'limit': 56, // Number | The maximum integer number of employee entities to return in a single response. Default 100, maximum 200.
  'batchToken': "batchToken_example" // String | A pagination cursor to retrieve the next set of results for your original query to the endpoint.
};
apiInstance.listTimecards(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **String**| The order in which timecards are listed in the response, based on their created_at field. | [optional] 
 **employeeId** | **String**| If provided, the endpoint returns only timecards for the employee with the specified ID. | [optional] 
 **beginClockinTime** | **String**| If filtering results by their clockin_time field, the beginning of the requested reporting period, in ISO 8601 format. | [optional] 
 **endClockinTime** | **String**| If filtering results by their clockin_time field, the end of the requested reporting period, in ISO 8601 format. | [optional] 
 **beginClockoutTime** | **String**| If filtering results by their clockout_time field, the beginning of the requested reporting period, in ISO 8601 format. | [optional] 
 **endClockoutTime** | **String**| If filtering results by their clockout_time field, the end of the requested reporting period, in ISO 8601 format. | [optional] 
 **beginUpdatedAt** | **String**| If filtering results by their updated_at field, the beginning of the requested reporting period, in ISO 8601 format. | [optional] 
 **endUpdatedAt** | **String**| If filtering results by their updated_at field, the end of the requested reporting period, in ISO 8601 format. | [optional] 
 **deleted** | **Boolean**| If true, only deleted timecards are returned. If false, only valid timecards are returned.If you don&#39;t provide this parameter, both valid and deleted timecards are returned. | [optional] 
 **limit** | **Number**| The maximum integer number of employee entities to return in a single response. Default 100, maximum 200. | [optional] 
 **batchToken** | **String**| A pagination cursor to retrieve the next set of results for your original query to the endpoint. | [optional] 

### Return type

[**[V1Timecard]**](V1Timecard.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveCashDrawerShift"></a>
# **retrieveCashDrawerShift**
> V1CashDrawerShift retrieveCashDrawerShift(locationId, shiftId)

Provides the details for a single cash drawer shift, including all events that occurred during the shift.

Provides the details for a single cash drawer shift, including all events that occurred during the shift.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var locationId = "locationId_example"; // String | The ID of the location to list cash drawer shifts for.

var shiftId = "shiftId_example"; // String | The shift's ID.

apiInstance.retrieveCashDrawerShift(locationId, shiftId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **String**| The ID of the location to list cash drawer shifts for. | 
 **shiftId** | **String**| The shift&#39;s ID. | 

### Return type

[**V1CashDrawerShift**](V1CashDrawerShift.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveEmployee"></a>
# **retrieveEmployee**
> V1Employee retrieveEmployee(employeeId)

Provides the details for a single employee.

Provides the details for a single employee.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var employeeId = "employeeId_example"; // String | The employee's ID.

apiInstance.retrieveEmployee(employeeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **String**| The employee&#39;s ID. | 

### Return type

[**V1Employee**](V1Employee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveEmployeeRole"></a>
# **retrieveEmployeeRole**
> V1EmployeeRole retrieveEmployeeRole(roleId)

Provides the details for a single employee role.

Provides the details for a single employee role.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var roleId = "roleId_example"; // String | The role's ID.

apiInstance.retrieveEmployeeRole(roleId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**| The role&#39;s ID. | 

### Return type

[**V1EmployeeRole**](V1EmployeeRole.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveTimecard"></a>
# **retrieveTimecard**
> V1Timecard retrieveTimecard(timecardId)

Provides the details for a single timecard.

Provides the details for a single timecard.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var timecardId = "timecardId_example"; // String | The timecard's ID.

apiInstance.retrieveTimecard(timecardId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timecardId** | **String**| The timecard&#39;s ID. | 

### Return type

[**V1Timecard**](V1Timecard.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEmployee"></a>
# **updateEmployee**
> V1Employee updateEmployee(employeeId, body)

V1 UpdateEmployee

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var employeeId = "employeeId_example"; // String | The ID of the role to modify.

var body = new SquareConnect.V1Employee(); // V1Employee | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateEmployee(employeeId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeId** | **String**| The ID of the role to modify. | 
 **body** | [**V1Employee**](V1Employee.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Employee**](V1Employee.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEmployeeRole"></a>
# **updateEmployeeRole**
> V1EmployeeRole updateEmployeeRole(roleId, body)

Modifies the details of an employee role.

Modifies the details of an employee role.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var roleId = "roleId_example"; // String | The ID of the role to modify.

var body = new SquareConnect.V1EmployeeRole(); // V1EmployeeRole | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateEmployeeRole(roleId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleId** | **String**| The ID of the role to modify. | 
 **body** | [**V1EmployeeRole**](V1EmployeeRole.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1EmployeeRole**](V1EmployeeRole.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTimecard"></a>
# **updateTimecard**
> V1Timecard updateTimecard(timecardId, body)

Modifies a timecard&#39;s details. This creates an API_EDIT event for the timecard. You can view a timecard&#39;s event history with the List Timecard Events endpoint.

Modifies a timecard&#39;s details. This creates an API_EDIT event for the timecard. You can view a timecard&#39;s event history with the List Timecard Events endpoint.

### Example
```javascript
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.V1EmployeesApi();

var timecardId = "timecardId_example"; // String | TThe ID of the timecard to modify.

var body = new SquareConnect.V1Timecard(); // V1Timecard | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

apiInstance.updateTimecard(timecardId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timecardId** | **String**| TThe ID of the timecard to modify. | 
 **body** | [**V1Timecard**](V1Timecard.md)| An object containing the fields to POST for the request.  See the corresponding object definition for field details. | 

### Return type

[**V1Timecard**](V1Timecard.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
