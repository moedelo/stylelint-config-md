module.exports = {
    "extends": "stylelint-config-recommended",
    "rules": {
        "at-rule-empty-line-before": [
            "always",
            {
                "except": [
                    "blockless-after-same-name-blockless",
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always-single-line",
        "at-rule-semicolon-newline-after": "always",
        "at-rule-no-unknown": null,

        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        "block-no-empty": true,

        "color-no-hex": true,

        "comment-empty-line-before": [
            "always",
            {
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "stylelint-commands"
                ]
            }
        ],
        "comment-whitespace-inside": "always",

        "custom-property-empty-line-before": [
            "always",
            {
                "except": [
                    "after-custom-property",
                    "first-nested"
                ],
                "ignore": [
                    "after-comment",
                    "inside-single-line-block"
                ]
            }
        ],

        "declaration-block-no-duplicate-properties": true,
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-semicolon-newline-after": "always-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": [
            "always",
            {
                "except": [
                    "after-declaration",
                    "first-nested"
                ],
                "ignore": [
                    "after-comment",
                    "inside-single-line-block"
                ]
            }
        ],

        "function-comma-newline-after": "always-multi-line",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never-single-line",
        "function-whitespace-after": "always",

        "property-no-vendor-prefix": true,

        "max-empty-lines": 1,
        "max-nesting-depth": 3,

        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",

        "no-eol-whitespace": true,
        "no-missing-end-of-source-newline": true,
        "no-extra-semicolons": true,
        "no-descending-specificity": null,


        "property-case": "lower",

        "number-leading-zero": "always",
        "number-no-trailing-zeros": true,

        "rule-empty-line-before": [
            "always-multi-line",
            {
                "except": [
                    "first-nested"
                ],
                "ignore": [
                    "after-comment"
                ]
            }
        ],

        "selector-no-qualifying-type": true,
        "selector-max-type": 1,
        "selector-attribute-brackets-space-inside": "never",
        "selector-class-pattern": [
            "^.[a-z]+((--|__)?[a-zA-Z0-9]+)*$",
            {
                "resolveNestedSelectors": true
            }
        ],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": ["global", "local"]
            }
        ],
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-max-empty-lines": 0,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "single",
        "selector-nested-pattern": "^(?!&__|&--)(.|\n|\r)*$",
        "selector-max-id": 0,
        "selector-type-no-unknown": true,
        "selector-type-case": "lower",

        "unit-case": "lower",
        "indentation": 4,
        "length-zero-no-unit": true,

        "value-no-vendor-prefix": true,
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0
    }
};
