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
 * Class ListEffectQualifier
 */
class ListEffectQualifier extends EffectQualifier
{
    const PROPERTIES = 'properties';

    /**
     * ListEffectQualifier constructor.
     *
     * @param string $effectName The name of the effect.
     * @param mixed  ...$values  The effect values.
     */
    public function __construct($effectName, ...$values)
    {
        parent::__construct($effectName);

        $this->getValue()->setSimpleValue(self::PROPERTIES, new ListExpressionQualifierMultiValue(...$values));
    }

    /**
     * @return mixed
     */
    public function getPropertiesValue()
    {
        return parent::getValue()->getSimpleValue(self::PROPERTIES);
    }
}
