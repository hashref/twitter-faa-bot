# Twitter FAA Bot

I have people close to me that are thinking about becoming an Air Traffic Controller. The FAA hiring window is small and doesn't come along very often. I am not a regular Twitter user, so I wrote this simple node script that searches Twitter for recent posts by @FAANews with the #BeATC hash tag. If it finds any new Tweets, it will email me a notification, which I check everyday.

This is a very small project that I threw together in about an hour. It's really dumb at the moment. The Twitter API endpoint that I used gives results for the last seven days. If the search returns any results, it will notify. I was thinking about tracking the specific posts that the notification is being sent for, but I'd have to store data and, frankly, there just isn't all that much activity in this search for me to worry about that. Perhaps, if I get annoyed when there actually is some activity to include this functionality.

## Configuration

I used [node-config](https://github.com/node-config/node-config), for setting up my Twitter API key and Gmail credentials. To configure them using your credentials, just create `config/local.json` and add the override details...

```json
{
  "bearerToken": "GET_TOKEN_FROM_TWITTER",
  "smtp": {
    "user": "GMAIL_USERNAME",
    "password": "GMAIL_APPLICATION_PASSWORD"
  }
}
```

## Building

This is a typescript project, so you have to have `ts-node` installed to run it outright. I did add a build feature if you wanted to convert it to `js` and just run it with `node` instead.

In the project root...

```sh
mkdir dist
yarn build
```

You should be able to run it with `node`

```sh
node --experimental-specifier-resolution=node --no-warnings ./dist/index.js
```

__NOTE:__ I'm using [emailjs](https://github.com/eleith/emailjs). So I had to compile to `ESNext` rather than `commonJS`. This is beacuse emailjs removed support for the `require()` module loading directive (meaning, it only support `import` now). Because of this you have to include the flag `--experimental-specifier-resolution=node` to tell `node` to use the import module loading directives. To squelch the warning associated with this flag, also include `--no-warnings`

## Executing

There are two ways you can run this...

### yarn

```sh
yarn start
```

### node

```sh
node --experimental-specifier-resolution=node --no-warnings ./dist/index.js
```

To run it from outside of the project root directory, include the `NODE_CONFIG_DIR` environmental variable.

```sh
NODE_CONFIG_DIR=~/<PROJECT_ROOT>/config node --experimental-specifier-resolution=node --no-warnings <PROJECT_ROOT>/dist/index.js
```

