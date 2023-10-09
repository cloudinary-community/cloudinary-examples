<?php
/**
 * Interface representing extended HTTP status codes for RFC5842. These codes
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
 * Interface representing extended HTTP status codes for RFC5842. These codes
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
interface RFC5842 extends ExperimentalStatus, IETFStream
{
    /**
     * The members of a DAV binding have already been enumerated in a previous
     * reply to this request, and are not being included again.
     *
     * The 208 (Already Reported) status code can be used inside a DAV: propstat
     * response element to avoid enumerating the internal members of multiple
     * bindings to the same collection repeatedly.  For each binding to a
     * collection inside the request's scope, only one will be reported with
     * a 200 status, while subsequent DAV:response elements for all other
     * bindings will use the 208 status, and no DAV:response elements for
     * their descendants are included.
     *
     * @see https://datatracker.ietf.org/doc/html/rfc5842#section-7.1
     *
     * @var int
     */
    public const ALREADY_REPORTED = 208;

    /**
     * The 508 (Loop Detected) status code indicates that the server detected
     * an infinite loop while processing a request with "Depth: infinity".
     * (sent in lieu of 208).
     *
     * @see https://datatracker.ietf.org/doc/html/rfc5842#section-7.2
     *
     * @var int
     */
    public const LOOP_DETECTED = 508;
}
