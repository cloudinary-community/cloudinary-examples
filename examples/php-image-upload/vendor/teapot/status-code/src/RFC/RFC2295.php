<?php
/**
 * Interface representing extended HTTP status codes for RFC2295. These codes
 * are represented as an interface so that developers may implement it and then
 * use parent::[CODE] to gain a code, or to extend the codes using
 * static::[CODE] and override their default description.
 *
 * This allows for codes to be repurposed in a natural way where the core,
 * traditional use would not be meaningful.
 *
 * PHP version 5.3
 *
 * @category StatusCode
 *
 * @package Teapot\StatusCode\RFC
 *
 * @author    Barney Hanlon <barney@shrikeh.net>
 * @copyright 2013-2016 B Hanlon. All rights reserved.
 * @license   MIT http://opensource.org/licenses/MIT
 *
 * @see https://github.com/teapot-php/status-code
 */

namespace Teapot\StatusCode\RFC;

use Teapot\StatusCode\RFC\Status\Experimental as ExperimentalStatus;
use Teapot\StatusCode\RFC\Stream\IETF as IETFStream;

/**
 * Interface representing extended HTTP status codes for RFC2295. These codes
 * are represented as an interface so that developers may implement it and then
 * use parent::[CODE] to gain a code, or to extend the codes using
 * static::[CODE] and override their default description.
 *
 * This allows for codes to be repurposed in a natural way where the core,
 * traditional use would not be meaningful.
 *
 * @category StatusCode
 *
 * @package Teapot\StatusCode\RFC
 *
 * @author    Barney Hanlon <barney@shrikeh.net>
 * @copyright 2013-2016 B Hanlon. All rights reserved.
 * @license   MIT http://opensource.org/licenses/MIT
 *
 * @see https://github.com/teapot-php/status-code
 */
interface RFC2295 extends ExperimentalStatus, IETFStream
{
    /**
     * Transparent content negotiation for the request results in a circular
     * reference.
     *
     * @see https://datatracker.ietf.org/doc/html/rfc2295#section-8.1
     *
     * @var int
     */
    public const VARIANT_ALSO_NEGOTIATES = 506;
}
