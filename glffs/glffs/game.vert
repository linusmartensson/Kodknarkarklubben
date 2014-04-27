#version 410
in vec2 a;
void main(){
	gl_Position=vec4(a*2.0-1.0,0.5,1.0);
}