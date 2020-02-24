/* Using bare status codes in your responses isn't recommended. 
we includes a set of named constants that you can use to make your code more obvious and readable.
*/
function statusCodeFactory(code, message) {
  message = message.replace(/\n+/g, " ").replace(/\s+/g, " ");

  return code;
}

const status = {
  //Successful - 2xx

  HTTP_200_OK: statusCodeFactory(200, "OK"),
  HTTP_201_CREATED: statusCodeFactory(201, "Created"),
  HTTP_202_ACCEPTED: statusCodeFactory(202, "Accepted"),
  HTTP_203_NON_AUTHORITATIVE_INFORMATION: statusCodeFactory(
    203,
    "Non Authoritative Information"
  ),
  HTTP_204_NO_CONTENT: statusCodeFactory(204, "No Content"),
  HTTP_205_RESET_CONTENT: statusCodeFactory(205, "Reset Content"),
  HTTP_206_PARTIAL_CONTENT: statusCodeFactory(206, "Partial Content"),
  HTTP_207_MULTI_STATUS: statusCodeFactory(207, "Multi Status"),
  HTTP_208_ALREADY_REPORTED: statusCodeFactory(208, "Already Reaported"),
  HTTP_226_IM_USED: statusCodeFactory(226, "IM Used"),

  //Redirection - 3xx

  HTTP_300_MULTIPLE_CHOICES: statusCodeFactory(300, "Multiple Choices"),
  HTTP_301_MOVED_PERMANENTLY: statusCodeFactory(301, "Moved Permanently"),
  HTTP_302_FOUND: statusCodeFactory(302, "Found"),
  HTTP_303_SEE_OTHER: statusCodeFactory(303, "See Other"),
  HTTP_304_NOT_MODIFIED: statusCodeFactory(304, "Not Modified"),
  HTTP_305_USE_PROXY: statusCodeFactory(304, "USe Proxy"),
  HTTP_306_RESERVED: statusCodeFactory(306, "Reserved"),
  HTTP_307_TEMPORARY_REDIRECT: statusCodeFactory(307, "Temporary Redirect"),
  HTTP_308_PERMANENT_REDIRECT: statusCodeFactory(308, "Permanent Redirect"),

  // Client Error - 4xx

  HTTP_400_BAD_REQUEST: statusCodeFactory(400, "Bad Request"),
  HTTP_401_UNAUTHORIZED: statusCodeFactory(401, "Unauthorized"),
  HTTP_402_PAYMENT_REQUIRED: statusCodeFactory(402, "Payment Required"),
  HTTP_403_FORBIDDEN: statusCodeFactory(403, "Forbiden"),
  HTTP_404_NOT_FOUND: statusCodeFactory(404, "Not Found"),
  HTTP_405_METHOD_NOT_ALLOWED: statusCodeFactory(405, "Method Not  Allowed"),
  HTTP_406_NOT_ACCEPTABLE: statusCodeFactory(406, "Not acceptable"),
  HTTP_407_PROXY_AUTHENTICATION_REQUIRED: statusCodeFactory(
    407,
    "Proxy Authentication Required"
  ),
  HTTP_408_REQUEST_TIMEOUT: statusCodeFactory(408, "Request Timeout"),
  HTTP_409_CONFLICT: statusCodeFactory(409, "Conflict"),
  HTTP_410_GONE: statusCodeFactory(410, "Gone"),
  HTTP_411_LENGTH_REQUIRED: statusCodeFactory(411, "Length Required"),
  HTTP_412_PRECONDITION_FAILED: statusCodeFactory(412, "Precondition Failed"),
  HTTP_413_REQUEST_ENTITY_TOO_LARGE: statusCodeFactory(
    413,
    "Request Entity Too Large"
  ),
  HTTP_414_REQUEST_URI_TOO_LONG: statusCodeFactory(414, "Request URI Too Long"),
  HTTP_415_UNSUPPORTED_MEDIA_TYPE: statusCodeFactory(
    415,
    "Unsupported Media Type"
  ),
  HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE: statusCodeFactory(
    416,
    "Requested Range Not Satisfiable"
  ),
  HTTP_417_EXPECTATION_FAILED: statusCodeFactory(417, "Expectation Failed"),
  HTTP_422_UNPROCESSABLE_ENTITY: statusCodeFactory(422, "Unprocessable Entity"),
  HTTP_423_LOCKED: statusCodeFactory(423, "Locked"),
  HTTP_424_FAILED_DEPENDENCY: statusCodeFactory(424, "Failed Dependency"),
  HTTP_426_UPGRADE_REQUIRED: statusCodeFactory(426, "Upgrade Required"),
  HTTP_428_PRECONDITION_REQUIRED: statusCodeFactory(
    428,
    "Precondition Required"
  ),
  HTTP_429_TOO_MANY_REQUESTS: statusCodeFactory(429, "Too Many requests"),
  HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE: statusCodeFactory(
    431,
    "Request Headers Fields Too Large"
  ),
  HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS: statusCodeFactory(
    451,
    "Unavailable For Large Reason"
  ),

  // Server Error - 5xx

  HTTP_500_INTERNAL_SERVER_ERROR: statusCodeFactory(5, ""),
  HTTP_501_NOT_IMPLEMENTED: statusCodeFactory(501, "Not Implemented"),
  HTTP_502_BAD_GATEWAY: statusCodeFactory(502, "Bad Gateway"),
  HTTP_503_SERVICE_UNAVAILABLE: statusCodeFactory(503, "Service Unavailable"),
  HTTP_504_GATEWAY_TIMEOUT: statusCodeFactory(504, "Gateway Timeout"),
  HTTP_505_HTTP_VERSION_NOT_SUPPORTED: statusCodeFactory(
    505,
    "Http Version Not Supported"
  ),
  HTTP_506_VARIANT_ALSO_NEGOTIATES: statusCodeFactory(
    506,
    "Variant Also Negotiates"
  ),
  HTTP_507_INSUFFICIENT_STORAGE: statusCodeFactory(507, "Insufficient Storage"),
  HTTP_508_LOOP_DETECTED: statusCodeFactory(508, "Loop Detected"),
  HTTP_509_BANDWIDTH_LIMIT_EXCEEDED: statusCodeFactory(
    509,
    "Bandwidth Limit Exceed"
  ),
  HTTP_510_NOT_EXTENDED: statusCodeFactory(510, "Not Extended"),
  HTTP_511_NETWORK_AUTHENTICATION_REQUIRED: statusCodeFactory(
    511,
    "Network Authentication Required"
  )
};

module.exports = status;
