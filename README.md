# Gongxian's Homepage

A personal academic homepage built on Jekyll and published with GitHub Pages.

## Content

| Path | What it holds |
| --- | --- |
| `_pages/` | Standalone pages: home, publications, teaching, CV |
| `_publications/` | One Markdown file per paper |
| `_teaching/` | One Markdown file per course |
| `_data/` | Site data: navigation, author details, CV data |
| `images/`, `files/` | Portraits, favicons and downloadable PDFs |
| `backups/` | Compressed snapshots of the site (not published) |

Publication venues are resolved through a single include,
`_includes/pub-venue.html`. Both the refinement rail and each entry call it, so a
filter value can never drift away from the metadata it filters on. Counts come from
`_includes/pub-count.html`.

## Presentation layer

The whole look lives in `_sass/modern/`, imported by `assets/css/main.scss`:

| Partial | Responsibility |
| --- | --- |
| `_tokens.scss` | Colours, type, spacing and the light/dark palettes |
| `_base.scss` | Reset, typography, prose, tables, controls |
| `_chrome.scss` | Masthead, navigation, theme control, footer |
| `_profile.scss` | Two-column layout and the identity column |
| `_content.scss` | Reading column, numbered sections, archive entries |
| `_publications.scss` | Publication entries and the refinement rail |
| `_cv.scss` | CV entries |
| `_syntax.scss` | Code highlighting |

`_sass/vendor/font-awesome/` supplies the interface icons, and
`assets/css/academicons.css` supplies the scholarly profile icons.

The only script is `assets/js/site.js`, which is dependency free. It handles the
colour theme control and the publication filters; everything else, including the
publication list itself, is rendered on the server.

## Local preview

```sh
bundle install
bundle exec jekyll serve
```
