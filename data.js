var APP_DATA = {
  "scenes": [
    {
      "id": "0-red---1",
      "name": "red - 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.9392208363999188,
        "pitch": 0.12335762858095478,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.5015241116976323,
          "pitch": -1.0269045533362782,
          "rotation": 0,
          "target": "2-old"
        },
        {
          "yaw": -0.9787517877783891,
          "pitch": 0.6499542065956323,
          "rotation": 0,
          "target": "1-red-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-red-2",
      "name": "red-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06782393108898077,
          "pitch": 0.8877604855891708,
          "rotation": 0,
          "target": "0-red---1"
        },
        {
          "yaw": 0.07715584911897899,
          "pitch": -0.35069275452572235,
          "rotation": 0,
          "target": "2-old"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-old",
      "name": "old",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.48786974198833555,
          "pitch": -0.8047695463334428,
          "rotation": 0,
          "target": "0-red---1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "cozy home - kitchen",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
