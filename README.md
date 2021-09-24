# 📚 rollup-jest-boilerplate

# UDF Query Param Parser
A slim URL parser for query params to javascript objects to be used in User Defined Functions.

# Usage
The main use case is for parsing query params in a URL to a javascript object within a User Defined Function in BigQuery.
This environment doesn't have access to any browser global objects like window, document, etc... So we have to make sure we are using only objects/methods that are available in the without the browser.

```js
  var obj = urlQueryStringToObject(url)

  // read the specs for cases that are supported
  // In bigquery a JSON object is a string so we need to stringify it when using it in a user defined function
```
Example of usage in BigQuery
```SQL
CREATE OR REPLACE FUNCTION url_query_string_to_object(url STRING) 
RETURNS STRING 
LANGUAGE js AS r"""
  return JSON.stringify(urlQueryStringToObject(url));
"""
OPTIONS (
  library = ["gs://path-to-your-version-of-this-library/lib/url-query-string-to-object.js"]
)

SELECT 
  *,
  url_query_string_to_object(url) AS parsed_params
FROM [your-table]
```


## How to use the boilerplate that built this library

Decide of a new library name, let's say `new-super-library` (🤦🏼‍♀️), then in a terminal:

```sh
curl --output rollup-jest-boilerplate.zip -LOk https://github.com/algolia/rollup-jest-boilerplate/archive/master.zip
unzip rollup-jest-boilerplate.zip
rm rollup-jest-boilerplate.zip
mv rollup-jest-boilerplate-master new-super-library
```



## Running tests

```sh
yarn
yarn test
yarn test --watch
```

## Dev mode

When developing you can run:

```
yarn watch
```

This will regenerate the build files each time a source file is changed and serve on http://127.0.0.1:5000.

### Previewing umd build in the browser

If your package works in the browser, you can open `dev/index.html` to try it out.

## Publishing

```sh
npm publish
```

## Additional tooling


