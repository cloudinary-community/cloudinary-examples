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
 * Trait ForegroundObjectTrait
 *
 * @api
 */
trait ForegroundObjectTrait
{
    /**
     * ForegroundObject airplane.
     *
     * @return static
     */
    public static function airplane()
    {
        return new static(ForegroundObject::AIRPLANE);
    }

    /**
     * ForegroundObject bus.
     *
     * @return static
     */
    public static function bus()
    {
        return new static(ForegroundObject::BUS);
    }

    /**
     * ForegroundObject diningTable.
     *
     * @return static
     */
    public static function diningTable()
    {
        return new static(ForegroundObject::DINING_TABLE);
    }

    /**
     * ForegroundObject sheep.
     *
     * @return static
     */
    public static function sheep()
    {
        return new static(ForegroundObject::SHEEP);
    }

    /**
     * ForegroundObject bicycle.
     *
     * @return static
     */
    public static function bicycle()
    {
        return new static(ForegroundObject::BICYCLE);
    }

    /**
     * ForegroundObject car.
     *
     * @return static
     */
    public static function car()
    {
        return new static(ForegroundObject::CAR);
    }

    /**
     * ForegroundObject dog.
     *
     * @return static
     */
    public static function dog()
    {
        return new static(ForegroundObject::DOG);
    }

    /**
     * ForegroundObject sofa.
     *
     * @return static
     */
    public static function sofa()
    {
        return new static(ForegroundObject::SOFA);
    }

    /**
     * ForegroundObject bird.
     *
     * @return static
     */
    public static function bird()
    {
        return new static(ForegroundObject::BIRD);
    }

    /**
     * ForegroundObject cat.
     *
     * @return static
     */
    public static function cat()
    {
        return new static(ForegroundObject::CAT);
    }

    /**
     * ForegroundObject horse.
     *
     * @return static
     */
    public static function horse()
    {
        return new static(ForegroundObject::HORSE);
    }

    /**
     * ForegroundObject train.
     *
     * @return static
     */
    public static function train()
    {
        return new static(ForegroundObject::TRAIN);
    }

    /**
     * ForegroundObject boat.
     *
     * @return static
     */
    public static function boat()
    {
        return new static(ForegroundObject::BOAT);
    }

    /**
     * ForegroundObject chair.
     *
     * @return static
     */
    public static function chair()
    {
        return new static(ForegroundObject::CHAIR);
    }

    /**
     * ForegroundObject person.
     *
     * @return static
     */
    public static function person()
    {
        return new static(ForegroundObject::PERSON);
    }

    /**
     * ForegroundObject tv.
     *
     * @return static
     */
    public static function tv()
    {
        return new static(ForegroundObject::TV);
    }

    /**
     * ForegroundObject bottle.
     *
     * @return static
     */
    public static function bottle()
    {
        return new static(ForegroundObject::BOTTLE);
    }

    /**
     * ForegroundObject cow.
     *
     * @return static
     */
    public static function cow()
    {
        return new static(ForegroundObject::COW);
    }

    /**
     * ForegroundObject pottedPlant.
     *
     * @return static
     */
    public static function pottedPlant()
    {
        return new static(ForegroundObject::POTTED_PLANT);
    }

    /**
     * ForegroundObject motorbike.
     *
     * @return static
     */
    public static function motorbike()
    {
        return new static(ForegroundObject::MOTORBIKE);
    }
}
