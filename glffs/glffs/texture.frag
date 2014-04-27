#version 410

uniform vec2 res;
uniform sampler2D tex;
out vec4 c;

void main(){
	c =texture2D(tex, gl_FragCoord.xy/res*vec2(1.0,-1.0));
}