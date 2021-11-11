# OpenGLRenderer
Simple OpenGL renderer using Phong Shading. This is an old version. 

![image](https://user-images.githubusercontent.com/44004166/141356084-0487e9bf-be56-472b-ae55-934549ad0b49.png)

The shaders are in the `simple.frag` and the `simple.vert` files. This version doesn't have model loading implemented.

## Dependencies
IMPORTANT: It might be necessary to generate the GLAD bindings [here](https://glad.dav1d.de/#profile=core&language=c&specification=gl&loader=on&api=gl%3D4.6). Choose version 3.3 or higher with _Core_ profile, with the _generate loader_ option ticked out and everything else on None. Replace the newly generated `glad.c` file for the old one.

The OpenGL library has to be installed and linked by the compiler.

It also requires the library [GLFW](https://www.glfw.org/).

With the dependencies met, it should be possible to get the scene shown in the image above and move freely.
