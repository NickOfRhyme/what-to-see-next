# What to See Next

'What to See Next' is a React Native app that allows you to search for films on [The Movie Database](https://themoviedb.org).

## Installation

If, after cloning the repository, you want to compile your own version of the app, you first need to obtain a (free) API key. Instructions on how to do so are [here](https://developers.themoviedb.org/3/getting-started/introduction).

You then need to add a file entitled 'app.json' to the root of the repository folder, with the following contents:

```
{
  "expo": {
    "name": "what-to-see-next",
    "slug": "what-to-see-next",
    "platforms": ["ios", "android", "web"],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "extra": {
      "tmdbKey": "YOUR_API_KEY_GOES_HERE"
    }
  }
}
```

You are then ready to compile your own version of the app. Enjoy!
