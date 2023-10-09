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
 * Class DropShadowQualifier
 */
class DropShadowQualifier extends EffectQualifier
{
    /**
     * DropShadowQualifier constructor.
     *
     * @param int $azimuth   Value in range 0 - 360 (degrees).
     * @param int $elevation Value in range 0 - 90 (degrees).
     * @param int $spread    Value in range 0 -100.
     */
    public function __construct($azimuth = null, $elevation = null, $spread = null)
    {
        parent::__construct(MiscEffect::DROP_SHADOW);

        $this->value->setSimpleValue('properties', new ListExpressionQualifierMultiValue());

        $this->azimuth($azimuth);
        $this->elevation($elevation);
        $this->spread($spread);
    }

    /**
     * Sets the direction the light is coming from to cause the shadow effect. 
     *
     * @param int $azimuth Value in range 0 - 360 (degrees).
     *
     * @return $this
     */
    public function azimuth($azimuth)
    {
        $this->value->getSimpleValue('properties')->setSimpleNamedValue('azimuth', $azimuth);

        return $this;
    }

    /**
     *  Sets the height of the light source above the 'ground' to cause the shadow effect.
     *
     * @param int $elevation Value in range 0 - 90 (degrees).
     *
     * @return $this
     */
    public function elevation($elevation)
    {
        $this->value->getSimpleValue('properties')->setSimpleNamedValue('elevation', $elevation);

        return $this;
    }

    /**
     * Sets the spread of the light source. A small number means 'point' light. A larger number means 'area' light. 
     *
     * @param int $spread Value in range 0 -100.
     *
     * @return $this
     */
    public function spread($spread)
    {
        $this->value->getSimpleValue('properties')->setSimpleNamedValue('spread', $spread);

        return $this;
    }
}
