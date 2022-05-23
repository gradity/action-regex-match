# Replace string javascript action

This action replace specific string with exact match.

## Inputs

## `text`

**Required** Text match sample.

## `regexExp`

**Required** Regex expression.

## Outputs

## `match`

Boolean result.

## Example usage
```
uses: actions/action-regex-match@v1.0.0
with:
  text: 'v1.0.0-staging'
  regexExp: /(v.*-staging)/g
```

```match: true```