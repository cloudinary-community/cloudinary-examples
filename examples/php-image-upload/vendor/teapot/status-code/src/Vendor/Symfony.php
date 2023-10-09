<?php
/**
 * Interface representing extended HTTP status codes used by the Symfony
 * framework. These codes are represented as an interface so that developers
 * may implement it and then use parent::[CODE] to gain a code, or to extend
 * the codes using static::[CODE] and override their default description.
 *
 * This allows for codes to be repurposed in a natural way where the core,
 * traditional use would not be meaningful.
 *
 * PHP version 5.3
 *
 * @category StatusCode
 *
 * @package Teapot\StatusCode\Vendor
 *
 * @author    Barney Hanlon <barney@shrikeh.net>
 * @copyright 2013-2016 B Hanlon. All rights reserved.
 * @license   MIT http://opensource.org/licenses/MIT
 *
 * @see https://github.com/teapot-php/status-code
 */

namespace Teapot\StatusCode\Vendor;

use Teapot\StatusCode\RFC\RFC2295;
use Teapot\StatusCode\RFC\RFC2324;
use Teapot\StatusCode\RFC\RFC2518;
use Teapot\StatusCode\RFC\RFC2774;
use Teapot\StatusCode\RFC\RFC2817;
use Teapot\StatusCode\RFC\RFC3229;
use Teapot\StatusCode\RFC\RFC3648;
use Teapot\StatusCode\RFC\RFC4918;
use Teapot\StatusCode\RFC\RFC5842;
use Teapot\StatusCode\RFC\RFC6585;
use Teapot\StatusCode\RFC\RFC7231;
use Teapot\StatusCode\RFC\RFC7232;
use Teapot\StatusCode\RFC\RFC7233;
use Teapot\StatusCode\RFC\RFC7235;
use Teapot\StatusCode\RFC\RFC7538;
use Teapot\StatusCode\RFC\RFC7540;
use Teapot\StatusCode\RFC\RFC7725;

/**
 * Interface representing extended HTTP status codes used by the Symfony
 * framework. These codes are represented as an interface so that developers
 * may implement it and then use parent::[CODE] to gain a code, or to extend
 * the codes using static::[CODE] and override their default description.
 *
 * This allows for codes to be repurposed in a natural way where the core,
 * traditional use would not be meaningful.
 *
 * @category StatusCode
 *
 * @package Teapot\StatusCode\Vendor
 *
 * @author    Barney Hanlon <barney@shrikeh.net>
 * @copyright 2013-2016 B Hanlon. All rights reserved.
 * @license   MIT http://opensource.org/licenses/MIT
 *
 * @see https://github.com/teapot-php/status-code
 */
interface Symfony
{
    public const HTTP_CONTINUE                                                  = RFC7231::CONTINUING;
    public const HTTP_SWITCHING_PROTOCOLS                                       = RFC7231::SWITCHING_PROTOCOLS;
    public const HTTP_PROCESSING                                                = RFC2518::PROCESSING;
    public const HTTP_OK                                                        = RFC7231::OK;
    public const HTTP_CREATED                                                   = RFC7231::CREATED;
    public const HTTP_ACCEPTED                                                  = RFC7231::ACCEPTED;
    public const HTTP_NON_AUTHORITATIVE_INFORMATION                             = RFC7231::NON_AUTHORITATIVE_INFORMATION;
    public const HTTP_NO_CONTENT                                                = RFC7231::NO_CONTENT;
    public const HTTP_RESET_CONTENT                                             = RFC7231::RESET_CONTENT;
    public const HTTP_PARTIAL_CONTENT                                           = RFC7233::PARTIAL_CONTENT;
    public const HTTP_MULTI_STATUS                                              = RFC4918::MULTI_STATUS;
    public const HTTP_ALREADY_REPORTED                                          = RFC5842::ALREADY_REPORTED;
    public const HTTP_IM_USED                                                   = RFC3229::IM_USED;
    public const HTTP_MULTIPLE_CHOICES                                          = RFC7231::MULTIPLE_CHOICES;
    public const HTTP_MOVED_PERMANENTLY                                         = RFC7231::MOVED_PERMANENTLY;
    public const HTTP_FOUND                                                     = RFC7231::FOUND;
    public const HTTP_SEE_OTHER                                                 = RFC7231::SEE_OTHER;
    public const HTTP_NOT_MODIFIED                                              = RFC7232::NOT_MODIFIED;
    public const HTTP_USE_PROXY                                                 = RFC7231::USE_PROXY;
    public const HTTP_RESERVED                                                  = RFC7231::UNUSED;
    public const HTTP_TEMPORARY_REDIRECT                                        = RFC7231::TEMPORARY_REDIRECT;
    public const HTTP_PERMANENTLY_REDIRECT                                      = RFC7538::PERMANENT_REDIRECT;
    public const HTTP_BAD_REQUEST                                               = RFC7231::BAD_REQUEST;
    public const HTTP_UNAUTHORIZED                                              = RFC7235::UNAUTHORIZED;
    public const HTTP_PAYMENT_REQUIRED                                          = RFC7231::PAYMENT_REQUIRED;
    public const HTTP_FORBIDDEN                                                 = RFC7231::FORBIDDEN;
    public const HTTP_NOT_FOUND                                                 = RFC7231::NOT_FOUND;
    public const HTTP_METHOD_NOT_ALLOWED                                        = RFC7231::METHOD_NOT_ALLOWED;
    public const HTTP_NOT_ACCEPTABLE                                            = RFC7231::NOT_ACCEPTABLE;
    public const HTTP_PROXY_AUTHENTICATION_REQUIRED                             = RFC7235::PROXY_AUTHENTICATION_REQUIRED;
    public const HTTP_REQUEST_TIMEOUT                                           = RFC7231::REQUEST_TIMEOUT;
    public const HTTP_CONFLICT                                                  = RFC7231::CONFLICT;
    public const HTTP_GONE                                                      = RFC7231::GONE;
    public const HTTP_LENGTH_REQUIRED                                           = RFC7231::LENGTH_REQUIRED;
    public const HTTP_PRECONDITION_FAILED                                       = RFC7232::PRECONDITION_FAILED;
    public const HTTP_REQUEST_ENTITY_TOO_LARGE                                  = RFC7231::PAYLOAD_TOO_LARGE;
    public const HTTP_REQUEST_URI_TOO_LONG                                      = RFC7231::URI_TOO_LONG;
    public const HTTP_UNSUPPORTED_MEDIA_TYPE                                    = RFC7231::UNSUPPORTED_MEDIA_TYPE;
    public const HTTP_REQUESTED_RANGE_NOT_SATISFIABLE                           = RFC7233::RANGE_NOT_SATISFIABLE;
    public const HTTP_EXPECTATION_FAILED                                        = RFC7231::EXPECTATION_FAILED;
    public const HTTP_I_AM_A_TEAPOT                                             = RFC2324::I_AM_A_TEAPOT;
    public const HTTP_MISDIRECTED_REQUEST                                       = RFC7540::MISDIRECTED_REQUEST;
    public const HTTP_UNPROCESSABLE_ENTITY                                      = RFC4918::UNPROCESSABLE_ENTITY;
    public const HTTP_LOCKED                                                    = RFC4918::ENTITY_LOCKED;
    public const HTTP_FAILED_DEPENDENCY                                         = RFC4918::FAILED_DEPENDENCY;
    public const HTTP_RESERVED_FOR_WEBDAV_ADVANCED_COLLECTIONS_EXPIRED_PROPOSAL = RFC3648::UNORDERED_COLLECTION;
    public const HTTP_UPGRADE_REQUIRED                                          = RFC2817::UPGRADE_REQUIRED;
    public const HTTP_PRECONDITION_REQUIRED                                     = RFC6585::PRECONDITION_REQUIRED;
    public const HTTP_TOO_MANY_REQUESTS                                         = RFC6585::TOO_MANY_REQUESTS;
    public const HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE                           = RFC6585::REQUEST_HEADER_FIELDS_TOO_LARGE;
    public const HTTP_UNAVAILABLE_FOR_LEGAL_REASONS                             = RFC7725::UNAVAILABLE_FOR_LEGAL_REASONS;
    public const HTTP_INTERNAL_SERVER_ERROR                                     = RFC7231::INTERNAL_SERVER_ERROR;
    public const HTTP_NOT_IMPLEMENTED                                           = RFC7231::NOT_IMPLEMENTED;
    public const HTTP_BAD_GATEWAY                                               = RFC7231::BAD_GATEWAY;
    public const HTTP_SERVICE_UNAVAILABLE                                       = RFC7231::SERVICE_UNAVAILABLE;
    public const HTTP_GATEWAY_TIMEOUT                                           = RFC7231::GATEWAY_TIMEOUT;
    public const HTTP_VERSION_NOT_SUPPORTED                                     = RFC7231::HTTP_VERSION_NOT_SUPPORTED;
    public const HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL                      = RFC2295::VARIANT_ALSO_NEGOTIATES;
    public const HTTP_INSUFFICIENT_STORAGE                                      = RFC4918::INSUFFICIENT_STORAGE;
    public const HTTP_LOOP_DETECTED                                             = RFC5842::LOOP_DETECTED;
    public const HTTP_NOT_EXTENDED                                              = RFC2774::NOT_EXTENDED;
    public const HTTP_NETWORK_AUTHENTICATION_REQUIRED                           = RFC6585::NETWORK_AUTHENTICATION_REQUIRED;
}
