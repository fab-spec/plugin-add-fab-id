# `@fab/plugin-add-fab-id`

Drop this into your `fab.config.json5` to add `X-FAB-ID` to outgoing requests:

```json5
{
  plugins: {
    // ...
    '@fab/plugin-add-fab-id': {},
    // ...
  }
}
```

<pre>
> curl -I http://localhost:3000
HTTP/1.1 200 OK
X-Powered-By: Express
content-type: text/html; charset=utf-8
<strong>X-FAB-ID: 1a0b0d929c5c46c3ecd37d362b9a7a6f</strong>
Content-Length: 70662
ETag: W/"11406-PuPRFA3W8a7l9h+fkybbSwTtsO4"
Date: Tue, 23 Jun 2020 18:28:28 GMT
Connection: keep-alive
</pre>

See https://fab.dev for more info.

## Customisation

You can pass a `header` argument to change which HTTP header is used:

```json5
{
  plugins: {
    // ...
    '@fab/plugin-add-fab-id': {
      header: 'X-SOMETHING-ELSE'
    },
    // ...
  }
}
```

<pre>
> curl -I http://localhost:3000
HTTP/1.1 200 OK
X-Powered-By: Express
content-type: text/html; charset=utf-8
<strong>X-SOMETHING-ELSE: 24c5e0be45fcf1dd2aa75a432823dbbc</strong>
Content-Length: 70662
ETag: W/"11406-PuPRFA3W8a7l9h+fkybbSwTtsO4"
Date: Tue, 23 Jun 2020 18:30:33 GMT
Connection: keep-alive
</pre>

> Note: our FAB ID actually changed when we set a new header for this plugin, since [any change to a FAB results in a new FAB ID](https://fab.dev/kb/production#content-addressable-compilation), one of FAB's [production guarantees](https://fab.dev/kb/production).
