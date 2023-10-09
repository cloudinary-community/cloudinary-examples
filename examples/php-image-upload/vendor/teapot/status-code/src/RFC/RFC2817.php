<?php
/**
 * Interface representing extended HTTP status codes for RFC2817. These codes
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

use Teapot\StatusCode\RFC\Status\ProposedStandard;
use Teapot\StatusCode\RFC\Stream\IETF as IETFStream;

/**
 * Interface representing extended HTTP status codes for RFC2817. These codes
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
interface RFC2817 extends IETFStream, ProposedStandard
{
    /**
     * The Upgrade response header field advertises possible protocol upgrades
     * a server MAY accept. In conjunction with the "426 Upgrade Required"
     * status code, a server can advertise the exact protocol upgrades that a
     * client MUST accept to complete the request. The server MAY include an
     * Upgrade header in any response other than 101 or 426 to indicate a
     * willingness to switch to any (combination) of the protocols listed.
     *
     * @see https://datatracker.ietf.org/doc/html/rfc2817#section-4.2
     *
     * @var int
     */
    public const UPGRADE_REQUIRED = 426;
}
