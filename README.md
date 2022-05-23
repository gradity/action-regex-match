# Replace string javascript action

This action replace specific string with exact match.

## Inputs

## `text`

**Required** Text range.

## `find`

**Required** Exact string to replace.

## `replace`

**Required** Value to replace with.

## Outputs

## `result`

Result of replaced string in text.

## Example usage
```
uses: actions/replace-string-action@v1.0
with:
  text: 'hello-world'
  find: 'world'
  replace: 'people'
```

```result: hello-people```