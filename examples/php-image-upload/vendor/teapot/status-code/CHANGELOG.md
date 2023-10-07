# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

For a full diff see [`2.1.0...main`][2.1.0...main].

## [`2.1.0`][2.1.0]

For a full diff see [`2.0.1...2.1.0`][2.0.1...2.1.0].

### Changed

- Dropped support for PHP 5.4 ([#57]), by [@localheinz]
- Dropped support for PHP 5.5 ([#58]), by [@localheinz]
- Dropped support for PHP 5.6 ([#59]), by [@localheinz]
- Dropped support for PHP 7.0 ([#60]), by [@localheinz]
- Dropped support for PHP 7.1 ([#61]), by [@localheinz]
- Dropped support for PHP 7.2 ([#62]), by [@localheinz]
- Dropped support for PHP 7.3 ([#63]), by [@localheinz]
- Dropped support for PHP 7.4 ([#64]), by [@localheinz]

## [`2.0.1`][2.0.1]

For a full diff see [`2.0.0...2.0.1`][2.0.0...2.0.1].

### Fixed

- Fixed reference from `Vendor\Symfony::HTTP_UPGRADE_REQUIRED` to undefined constant `RFC\RFC2817::UPDATE_REQUIRED` ([#56]), by [@jtheuerkauf]

## [`2.0.0`][2.0.0]

For a full diff see [`v1.1.2...2.0.0`][v1.1.2...2.0.0].

### Added

- Added `CHANGELOG.md` ([#25]), by [@localheinz]

### Fixed

- Updated links to RFCs ([#24]), by [@localheinz]

### Removed

- Removed deprecated constants `Teapot\StatusCode\RFC\RFC7231::NON_AUTHORATIVE_INFORMATION` and `Teapot\StatusCode\RFC\RFC2616::NON_AUTHORATIVE_INFORMATION` ([#26]), by [@localheinz]

## [`v1.1.2`][v1.1.2]

For a full diff see [`v1.1.1...v1.1.2`][v1.1.1...v1.1.2].

## [`v1.1.1`][v1.1.1]

For a full diff see [`v1.1.0...v1.1.1`][v1.1.0...v1.1.1].

## [`v1.1.0`][v1.1.0]

For a full diff see [`v1.0.2...v1.1.0`][v1.0.2...v1.1.0].

## [`v1.0.2`][v1.0.2]

For a full diff see [`v1.0.1...v1.0.2`][v1.0.1...v1.0.2].

## [`v1.0.1`][v1.0.1]

For a full diff see [`v1.0.0...v1.0.1`][v1.0.0...v1.0.1].

## [`v1.0.0`][v1.0.0]

For a full diff see [`1091250...v1.0.0`][1091250...v1.0.0].

[v1.0.0]: https://github.com/teapot-php/status-code/releases/tag/v1.0.-
[v1.0.1]: https://github.com/teapot-php/status-code/releases/tag/v1.0.1
[v1.0.2]: https://github.com/teapot-php/status-code/releases/tag/v1.0.2
[v1.1.0]: https://github.com/teapot-php/status-code/releases/tag/v1.1.0
[v1.1.1]: https://github.com/teapot-php/status-code/releases/tag/v1.1.1
[v1.1.2]: https://github.com/teapot-php/status-code/releases/tag/v1.1.2
[2.0.0]: https://github.com/teapot-php/status-code/releases/tag/2.0.0
[2.0.1]: https://github.com/teapot-php/status-code/releases/tag/2.0.1

[1091250...v1.0.0]: https://github.com/teapot-php/status-code/compare/1091250...v1.0.0
[v1.0.0...v1.0.1]: https://github.com/teapot-php/status-code/compare/v1.0.0...v1.0.1
[v1.0.1...v1.0.2]: https://github.com/teapot-php/status-code/compare/v1.0.1...v1.0.2
[v1.0.2...v1.1.0]: https://github.com/teapot-php/status-code/compare/v1.0.2...v1.1.0
[v1.1.0...v1.1.1]: https://github.com/teapot-php/status-code/compare/v1.1.0...v1.1.1
[v1.1.1...v1.1.2]: https://github.com/teapot-php/status-code/compare/v1.1.1...v1.1.2
[v1.1.2...2.0.0]: https://github.com/teapot-php/status-code/compare/v1.1.2...2.0.0
[2.0.0...2.0.1]: https://github.com/teapot-php/status-code/compare/2.0.0...2.0.1
[2.0.1...2.1.0]: https://github.com/teapot-php/status-code/compare/2.0.1...2.1.0
[2.1.0...main]: https://github.com/teapot-php/status-code/compare/2.1.0...main

[#24]: https://github.com/teapot-php/status-code/pull/24
[#25]: https://github.com/teapot-php/status-code/pull/25
[#26]: https://github.com/teapot-php/status-code/pull/26
[#56]: https://github.com/teapot-php/status-code/pull/56
[#57]: https://github.com/teapot-php/status-code/pull/57
[#58]: https://github.com/teapot-php/status-code/pull/58
[#59]: https://github.com/teapot-php/status-code/pull/59
[#60]: https://github.com/teapot-php/status-code/pull/60
[#61]: https://github.com/teapot-php/status-code/pull/61
[#62]: https://github.com/teapot-php/status-code/pull/62
[#63]: https://github.com/teapot-php/status-code/pull/63
[#64]: https://github.com/teapot-php/status-code/pull/64

[@jtheuerkauf]: https://github.com/jtheuerkauf
[@localheinz]: https://github.com/localheinz
