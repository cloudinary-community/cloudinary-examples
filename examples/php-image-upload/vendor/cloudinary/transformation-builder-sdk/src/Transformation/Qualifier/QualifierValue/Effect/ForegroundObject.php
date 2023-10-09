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
 *  Defines the available foreground objects.
 *
 * @api
 */
class ForegroundObject extends BaseArgument
{
    const AIRPLANE     = 'airplane';
    const BUS          = 'bus';
    const DINING_TABLE = 'dining_table';
    const SHEEP        = 'sheep';
    const BICYCLE      = 'bicycle';
    const CAR          = 'car';
    const DOG          = 'dog';
    const SOFA         = 'sofa';
    const BIRD         = 'bird';
    const CAT          = 'cat';
    const HORSE        = 'horse';
    const TRAIN        = 'train';
    const BOAT         = 'boat';
    const CHAIR        = 'chair';
    const PERSON       = 'person';
    const TV           = 'tv';
    const BOTTLE       = 'bottle';
    const COW          = 'cow';
    const POTTED_PLANT = 'potted_plant';
    const MOTORBIKE    = 'motorbike';

    use ForegroundObjectTrait;
}
