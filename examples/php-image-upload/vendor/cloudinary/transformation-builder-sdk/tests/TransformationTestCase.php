<?php
/**
 * This file is part of the Cloudinary PHP package.
 *
 * (c) Cloudinary
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Cloudinary\Test;

use Cloudinary\StringUtils;
use PHPUnit\Framework\TestCase;


if (! defined('JSON_INVALID_UTF8_SUBSTITUTE')) {
    //PHP < 7.2 Define it as 0 so it does nothing
    define('JSON_INVALID_UTF8_SUBSTITUTE', 0);
}

/**
 * Class CloudinaryTestCase
 *
 * Base class for all tests.
 */
abstract class TransformationTestCase extends TestCase
{
    const ASSET_ID       = 'sample';
    const VIDEO_ASSET_ID = 'dog';

    const IMG_EXT        = 'png';
    const IMG_EXT_JPG    = 'jpg';
    const IMG_EXT_GIF    = 'gif';
    const IMAGE_NAME     = self::ASSET_ID . '.' . self::IMG_EXT;
    const IMAGE_NAME_GIF = self::ASSET_ID . '.' . self::IMG_EXT_GIF;

    const VIDEO_EXT       = 'mp4';
    const VIDEO_NAME      = self::VIDEO_ASSET_ID . '.' . self::VIDEO_EXT;
    const FETCH_IMAGE_URL = 'https://res.cloudinary.com/demo/image/upload/' . self::IMAGE_NAME;
    const FETCH_VIDEO_URL = 'https://res.cloudinary.com/demo/video/upload/' . self::VIDEO_NAME;

    const B64_FETCH_VIDEO_URL = 'aHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby92aWRlby91cGxvYWQvZG9nLm1wNA==';

    /**
     * Asserts that string representations of the objects are equal.
     *
     * @param mixed  $expected
     * @param mixed  $actual
     * @param string $message
     */
    public static function assertStrEquals($expected, $actual, $message = '')
    {
        self::assertEquals((string)$expected, (string)$actual, $message);
    }

    /**
     * Generate a data provider.
     *
     * @param        $array
     * @param string $prefixValue
     * @param string $suffixValue
     * @param string $prefixMethod
     * @param string $suffixMethod
     *
     * @return array[]
     */
    protected static function generateDataProvider(
        $array,
        $prefixValue = '',
        $suffixValue = '',
        $prefixMethod = '',
        $suffixMethod = ''
    ) {
        return array_map(
            static function ($value) use ($prefixValue, $suffixValue, $prefixMethod, $suffixMethod) {
                return [
                    'value'  => $prefixValue . $value . $suffixValue,
                    'method' => StringUtils::snakeCaseToCamelCase($prefixMethod . $value . $suffixMethod),
                ];
            },
            $array
        );
    }
}
