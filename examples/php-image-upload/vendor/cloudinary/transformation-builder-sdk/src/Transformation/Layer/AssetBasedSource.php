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

/**
 * Class AssetBasedLayer
 */
abstract class AssetBasedSource extends BaseSource
{
    /**
     * AssetBasedLayer constructor.
     *
     * @param $asset
     */
    public function __construct($asset = null)
    {
        parent::__construct();

        $this->setSource($asset);
    }

    /**
     * Sets the source of the layer.
     *
     * @param string|BaseSourceQualifier $source The source.
     *
     * @return $this
     */
    public function setSource($source)
    {
        if ($source instanceof BaseSourceQualifier) {
            $this->getSourceQualifier()->setQualifierValue($source->getValue());

            return $this;
        }

        $this->getSourceQualifier()->setQualifierValue(new SourceValue($source));

        return $this;
    }
}
