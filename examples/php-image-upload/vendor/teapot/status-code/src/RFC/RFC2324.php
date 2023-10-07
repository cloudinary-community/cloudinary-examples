<?php
/**
 * Interface representing extended HTTP status codes for RFC2324. These codes
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
 * @deprecated
 * @author    Barney Hanlon <barney@shrikeh.net>
 * @copyright 2013-2016 B Hanlon. All rights reserved.
 * @license   MIT http://opensource.org/licenses/MIT
 *
 * @see https://github.com/teapot-php/status-code
 */

namespace Teapot\StatusCode\RFC;

use Teapot\StatusCode\RFC\Status\Informational as InformationalStatus;
use Teapot\StatusCode\RFC\Stream\Legacy as LegacyStream;

/**
 * Interface representing extended HTTP status codes for RFC2324. These codes
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
 * @deprecated
 * @author    Barney Hanlon <barney@shrikeh.net>
 * @copyright 2013-2016 B Hanlon. All rights reserved.
 * @license   MIT http://opensource.org/licenses/MIT
 *
 * @see https://github.com/teapot-php/status-code
 */
interface RFC2324 extends InformationalStatus, LegacyStream
{
    /**
     * The HTCPCP server is a teapot; the resulting entity may be short and
     * stout. Demonstrations of this behaviour exist.
     *
     * @see https://datatracker.ietf.org/doc/html/rfc2324#section-2.3.2
     *
     * @var int
     */
    public const I_AM_A_TEAPOT = 418;
}
