<?php
/**
 * This file is part of the Cloudinary PHP package.
 *
 * (c) Cloudinary
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Cloudinary;


/**
 * Class TransformationUtils
 *
 * @internal
 */
class TransformationUtils
{
    /**
     * Converts a float value to the string representation.
     *
     * @param mixed $value
     *
     * @return mixed|string
     */
    public static function floatToString($value)
    {
        if (! is_float($value)) {
            return $value;
        }

        // Ensure that trailing decimal(.0) part is not cropped when float is provided.
        // e.g. float 1.0 should be returned as "1.0" and not "1" as it happens by default.
        if ($value - (int)$value === 0.0) {
            return sprintf("%.1f", $value);
        }

        $locale = localeconv();
        $string = (string)$value;
        $string = str_replace($locale['decimal_point'], '.', $string);

        return $string;
    }

    /**
     * Helper method for converting boolean to int representation as string.
     *
     * @param mixed $value Candidate to convert. If not boolean, returned as is
     *
     * @return string
     */
    public static function boolToIntString($value)
    {
        if (! is_bool($value)) {
            return $value;
        }

        return $value ? '1' : '0';
    }


    /**
     * Converts bytes to kilobytes.
     *
     * @param int $bytes The input value to convert.
     *
     * @return int
     */
    public static function bytesToKB($bytes)
    {
        return (int)ceil($bytes / 1024);
    }

    /**
     * Used for formatting number to string with sign (+/-).
     *
     * @param int $number The number to format
     *
     * @return string
     */
    public static function formatSigned($number)
    {
        return $number > 0 ? "+$number" : (string)$number;
    }
}
