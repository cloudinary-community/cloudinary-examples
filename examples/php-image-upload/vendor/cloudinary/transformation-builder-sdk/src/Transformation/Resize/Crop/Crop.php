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

use Cloudinary\Transformation\CropMode;
use Cloudinary\Transformation\Expression\Expression;

/**
 * Class Crop
 */
class Crop extends BaseResizeAction
{
    use CropTrait;

    use FocalGravityTrait;
    use AbsolutePositionTrait;
    use ZoomTrait;

    /**
     * Crop constructor.
     *
     * @param string|CropMode       $cropMode
     * @param int|string|Expression $width
     * @param int|string|Expression $height
     * @param mixed                 $gravity
     * @param float|int|string      $x
     * @param float|int|string      $y
     */
    public function __construct($cropMode, $width = null, $height = null, $gravity = null, $x = null, $y = null)
    {
        parent::__construct($cropMode, $width, $height);

        $this->gravity($gravity);
        $this->position($x, $y);
    }

    /**
     * Internal setter for the point value.
     *
     * @param $value
     *
     * @return static
     *
     * @internal
     */
    public function setPointValue($value)
    {
        if (! isset($this->qualifiers[AbsolutePosition::getName()])) {
            $this->addQualifier(Position::absolute());
        }

        $this->qualifiers[AbsolutePosition::getName()]->setPointValue($value);

        return $this;
    }
}
