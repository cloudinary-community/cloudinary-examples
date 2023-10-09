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

use Cloudinary\Transformation\Qualifier\BaseQualifier;

/**
 * Class ListExpressionQualifierMultiValue
 *
 * This class represents a complex list expression value of the cloudinary transformation qualifier.
 *
 * @used-by BaseQualifier
 */
class ListExpressionQualifierMultiValue extends ExpressionQualifierMultiValue
{
    const VALUE_DELIMITER = ';';
}
