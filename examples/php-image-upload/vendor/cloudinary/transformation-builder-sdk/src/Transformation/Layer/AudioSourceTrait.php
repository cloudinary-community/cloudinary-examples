<?php
/**
 * This file is part of the Cloudinary PHP package.
 *
 * (c) Cloudinary
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Cloudinary\Transformation;

use Cloudinary\ClassUtils;

/**
 * Trait AudioSourceTrait
 *
 * @api
 */
trait AudioSourceTrait
{
    /**
     * Adds another audio layer.
     *
     * @param string $audioId The public ID of the new audio layer.
     *
     * @return static|AudioSource
     */
    public static function audio($audioId = null)
    {
        return static::createWithSource(ClassUtils::verifyInstance($audioId, AudioSource::class));
    }
}
