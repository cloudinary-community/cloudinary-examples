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
 * Class BackgroundRemoval
 *
 * Uses the Cloudinary AI Background Removal add-on to make the background of an image transparent.
 *
 *
 * **Learn more**: <a
 * href="https://cloudinary.com/documentation/transformation_reference#e_background_removal" target="_blank">
 * Background removal</a>
 *
 * @api
 */
class BackgroundRemoval extends EffectAction
{
    const FINE_EDGES = 'fineedges';
    const HINTS      = 'hints';

    /**
     * RemoveBackground constructor.
     *
     * @param bool|null $fineEdges        Enables detailed background removal around a foreground object with fine
     *                                    detail around its edges.
     * @param array     $hints            A list of foreground objects to keep.
     */
    public function __construct($fineEdges = null, $hints = [])
    {
        parent::__construct(new ListEffectQualifier(PixelEffect::BACKGROUND_REMOVAL));

        $this->fineEdges($fineEdges);
        $this->hints($hints);
    }

    /**
     * Provides better results if you know that the object has more clear-cut edges.
     *
     * @param bool|null $fineEdges Whether to apply fine edges mode.
     *
     * @return BackgroundRemoval
     */
    public function fineEdges($fineEdges = true)
    {
        $value = $fineEdges === true ? 'y' : ($fineEdges === false ? 'n' : $fineEdges);

        $this->getMainQualifier()->getPropertiesValue()->setSimpleNamedValue(self::FINE_EDGES, $value);

        return $this;
    }

    /**
     * Sets a list of foreground objects to keep.
     *
     * @param array $foregroundObjects A list of foreground objects to keep.
     *
     * @return BackgroundRemoval
     */
    public function hints(...$foregroundObjects)
    {
        $this->getMainQualifier()->getPropertiesValue()->setSimpleNamedValue(
            self::HINTS,
            new FullListExpressionQualifierMultiValue(
                ...$foregroundObjects
            )
        );

        return $this;
    }
}
