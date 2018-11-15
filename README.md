# halo-react
React component to simplify adding Halos to your React app.


### Installing
with yarn
`yarn add halo-react`

with NPM
`npm install --save halo-react`

### Component Usage

`import { HaloComponent } from 'halo-react';`

`<HaloComponent vertcies={ object containing the data points } title={ string } size={ number } endpoint={ string } />`

#### Example of verticies object
```
'vertices': {
        'size':       (float),
        'speed':      (float),
        'brightness': (float),
        'complexity': (float),
        'color':      (float),
        'wobble':     (float),
        'colorCenter': (float),
        'colorCenterRatio': (float),
        'waveCount':  (int), 
        'highlightRing': (float)
      } 
```


|Property Name  	| Description	                      | Type            |
|-----------------|:---------------------------------|:----------------|
|size|	The relative size of the halo.|	float: 0.0 - 1.0|
|speed|	The speed of halo activity.|	float: 0.0 - 1.0|
|color|	The color of the halo, from cool to warm.|	float: 0.0 - 1.0|
|complexity|	The complexity of halo activity.|	float: 0.0 - 1.0|
|brightness|	The intensity of halo color.|	float: 0.0 - 1.0|
|wobble|	The stability of the halo motion.|	float: 0.0 - 1.0|
|colorCenter|	The color at the center of the halo.|	float: 0.0 - 1.0|
|colorCenterRatio	|The percentage of the halo occupied by the center color.|	float: 0.0 - 1.0|
|waveCount|	The number of radiating waves.|	int: 0-10|
|highlightRing|	The location of the highlight ring, as a percentage of the total possible halo.|	float: 0.0 - 1.0|

### API docs
This component handles most of these requirements, however the definition of the verticies object, advanced features, and general information is contained in the API docs. 

[API Docs](http://sandbox.ora.me/docs#intro)
