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
 * Defines how to manipulate an audio layer.
 *
 * **Learn more**: <a
 * href="https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_video_overlays" target="_blank">
 * Video overlays</a>
 *
 * @api
 */
class AudioSource extends AssetBasedSource
{
    use VideoTransformationTrait; // FIXME: keep only relevant audio transformations.
    use AudioSourceTrait;

    /**
     * AudioSource constructor.
     *
     * @param $source
     */
    public function __construct($source)
    {
        parent::__construct(ClassUtils::verifyInstance($source, AudioSourceQualifier::class));
    }

    /**
     * Getter for the audio (video) transformation.
     *
     * Creates a new VideoTransformation if not initialized.
     *
     * @return VideoTransformation
     *
     * @internal
     */
    public function getTransformation()
    {
        if (! isset($this->transformation)) {
            $this->transformation = new VideoTransformation();
        }

        return $this->transformation;
    }

    /**
     * Getter for the layer qualifier.
     *
     * @return AudioSourceQualifier
     *
     * @internal
     */
    protected function getSourceQualifier()
    {
        if (! isset($this->qualifiers['source'])) {
            $this->qualifiers['source'] = new AudioSourceQualifier(null);
        }

        return $this->qualifiers['source'];
    }


    /**
     * Named constructor.
     *
     * @param BaseSource|string $source The layer source.
     *
     * @return static
     */
    protected static function createWithSource($source)
    {
        return $source;
    }
}
