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

use Cloudinary\ArrayUtils;
use Cloudinary\StringUtils;
use InvalidArgumentException;

/**
 * Class LayerQualifierFactory
 */
class LayerQualifierFactory
{
    /**
     * Handle overlays.
     *
     * Overlay properties can come as array or as string.
     *
     * @param string|array $layerQualifiers
     * @param string       $layerStackPosition Supported values: LayerStackPosition::OVERLAY,
     *                                         LayerStackPosition::UNDERLAY
     *
     * @return BaseSourceQualifier
     *
     * @see LayerStackPosition::OVERLAY
     */
    public static function fromParams($layerQualifiers, $layerStackPosition = LayerStackPosition::OVERLAY)
    {
        return self::handleQualifierValue($layerQualifiers)->setStackPosition($layerStackPosition);
    }

    /**
     * Handles layer qualifier value.
     *
     * @param string|array $layerQualifiers The layer qualifiers.
     *
     * @return BaseSourceQualifier
     */
    protected static function handleQualifierValue($layerQualifiers)
    {
        // Handle layer params
        if (is_array($layerQualifiers)) {
            $resourceType = ArrayUtils::get($layerQualifiers, 'resource_type');
            $deliveryType = ArrayUtils::get($layerQualifiers, 'type');

            // Fetch layer
            $fetchUrl = ArrayUtils::get($layerQualifiers, 'fetch', ArrayUtils::get($layerQualifiers, 'url'));
            if (! empty($fetchUrl) || $deliveryType === 'fetch') {
                return (new FetchSourceQualifier($fetchUrl))->assetType($resourceType);
            }

            $text     = ArrayUtils::get($layerQualifiers, 'text');
            $publicId = ArrayUtils::get($layerQualifiers, 'public_id');
            // Text layer
            if (! empty($text) || $resourceType === 'text') {
                $textStyle = TextStyle::fromParams($layerQualifiers);

                if (! ($publicId !== null xor ! empty((string)$textStyle))) {
                    throw new InvalidArgumentException(
                        'Must supply either style qualifiers or a public_id when providing text qualifier' .
                        ' in a text layer'
                    );
                }

                return (new TextSourceQualifier($text, $textStyle))->styleFromPublicId($publicId);
            }

            if ($publicId === null) {
                throw new InvalidArgumentException("Must supply public_id for $resourceType layer");
            }

            $format = ArrayUtils::get($layerQualifiers, 'format');
            if ($format !== null) {
                $publicId .= '.' . $format;
            }

            if ($resourceType === 'subtitles') {
                return new SubtitlesSourceQualifier($publicId, $layerQualifiers);
            }

            if ($resourceType === 'lut') {
                return new LutSourceQualifier($publicId);
            }

            if ($resourceType === 'video') {
                return new VideoSourceQualifier($publicId);
            }

            // this is a fallback for unknown(?)/future resource types
            $components = [];

            // Build a components array.
            if ($resourceType !== 'image') {
                $components[] = $resourceType;
            }

            if ($deliveryType !== 'upload') {
                $components[] = $deliveryType;
            }
            $components[] = $publicId;

            // Build a valid layer string.
            $layerQualifiers = ArrayUtils::implodeQualifierValues(...$components);
        } elseif (is_string($layerQualifiers)) {
            // Handle fetch layer from string definition.
            if (StringUtils::contains($layerQualifiers, 'fetch:')) {
                return new FetchSourceQualifier($layerQualifiers);
            }
        }

        return new ImageSourceQualifier($layerQualifiers);
    }
}
