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
 * Defines how to manipulate a fetched video layer.
 *
 * **Learn more**: <a
 * href=https://cloudinary.com/documentation/video_layers#layer_transformations target="_blank">
 * Video overlays</a>
 *
 * @api
 */
class FetchVideoSource extends VideoSource
{
    /**
     * VideoLayer constructor.
     *
     * @param $source
     */
    public function __construct($source)
    {
        parent::__construct($source);

        $this->setSource($source);
    }
    /**
     * Sets the source of the layer.
     *
     * @param string|FetchSourceQualifier $source The source.
     *
     * @return $this
     */
    public function setSource($source)
    {

        if ($source instanceof FetchSourceQualifier) {
            $this->getSourceQualifier()->fetchUrl($source->getValue());

            return $this;
        }

        $this->getSourceQualifier()->fetchUrl((string)$source);


        return $this;
    }

    /**
     * Gets the layer qualifier.
     *
     * @return FetchSourceQualifier
     *
     * @internal
     */
    protected function getSourceQualifier()
    {
        if (! isset($this->qualifiers['source'])) {
            $this->qualifiers['source'] = (new FetchSourceQualifier(null))->assetType("video");
        }

        return $this->qualifiers['source'];
    }
}
