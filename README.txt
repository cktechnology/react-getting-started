On a fresh checkout of this project all you have to do is run the following at the command line:

>npm install --global babel-cli

this gives you the babel command line compiler at a global level which allows you to compile JSX files into js files

then run:

>babel --presets react src --watch --out-dir build

this will compile a react app in the src folder and put the output to the build directory and will continue to monitor the src
folder for any changes and compile those files on the fly.