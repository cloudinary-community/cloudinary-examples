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

use Cloudinary\ArrayUtils;
use Cloudinary\ClassUtils;

/**
 * Defines how the audio layer is applied.
 *
 * **Learn more**: <a
 * href="https://cloudinary.com/documentation/video_layers#audio_overlays" target="_blank">
 * Audio overlays</a>
 *
 * @api
 */
class AudioOverlay extends BaseSourceContainer
{
    /**
     * @var Timeline $timeline The timeline position of the overlay.
     */
    protected $timeline;

    /**
     * BaseLayerContainer constructor.
     *
     * @param BaseSource|string $source
     * @param Timeline|null     $timeline
     */
    public function __construct(
        $source = null,
        $timeline = null
    ) {
        parent::__construct($source);

        $this->timeline($timeline);
    }

    /**
     * Sets the timeline position of the overlay.
     *
     * @param Timeline|null $timeline The timeline position of the overlay.
     *
     * @return AudioOverlay
     */
    public function timeline(Timeline $timeline = null)
    {
        $this->timeline = $timeline;

        return $this;
    }

    /**
     * Indicates that the video should be concatenated on to the container video and not added as an overlay.
     *
     * @return $this
     */
    protected function concatenate()
    {
        $this->source->setFlag(LayerFlag::splice());

        return $this;
    }

    /**
     * Sets the source.
     *
     * @param BaseSource $source The source.
     *
     * @return static
     */
    public function source($source)
    {
        $this->source = ClassUtils::verifyInstance($source, BaseSource::class, AudioSource::class);

        return $this;
    }

    /**
     * @return array
     */
    protected function getSubActionQualifiers()
    {
        $subActionQualifiers = parent::getSubActionQualifiers();

        $subActionQualifiers['additional'] = ArrayUtils::mergeNonEmpty(
            $subActionQualifiers['additional'],
            $this->timeline? $this->timeline->getStringQualifiers(): []
        );

        return $subActionQualifiers;
    }
}
