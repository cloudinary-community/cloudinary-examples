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

use Cloudinary\StringUtils;
use Cloudinary\Transformation\Qualifier\BaseQualifier;

/**
 * Class FullListExpressionQualifierMultiValue
 *
 * This class represents a complex list expression value of the cloudinary transformation qualifier.
 *
 * @used-by BaseQualifier
 */
class FullListExpressionQualifierMultiValue extends ListExpressionQualifierMultiValue
{
    /**
     * Serializes to string.
     *
     * @return string
     */
    public function __toString()
    {
        $string = parent::__toString();
        if (!empty($string)) {
            return '(' . $string . ')';
        }

        return $string;
    }
}
