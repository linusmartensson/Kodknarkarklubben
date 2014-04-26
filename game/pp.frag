precision mediump float; 
uniform vec2 res; 
uniform float t;
uniform float xpos;
uniform float xacc;

vec3 o;

float rand(float a){
	return fract(mod(a*90321.12312,4351.023));
}

float noise(float a){
	return mix(rand(floor(a)-1.0), rand(floor(a)), 1.0-(cos(fract(a)*3.14159)*0.5+0.5));
}

void rot(inout vec2 v, in float t){
	float c = cos(t);
	float s = sin(t);
	v *= mat2(c, -s, s, c);
}


float groundheight(vec3 pos){
	return pos.y + 
		(-10.0+sin(pos.z*0.052)*10.0+sin(pos.x*0.01+t)*20.0)
		*min(4.0,abs((pos.x*pos.x*0.1)*0.001));
}

float box(vec3 p, vec3 b){
	vec3 d = abs(p) - b;
	return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));
}

float cylinder(vec3 p, float w){
	return length(p.xz)-w;
}


float ship(vec3 p){
	vec3 po = p-o+vec3(sin(t),2.7,-5.0);


	rot(po.yz, -0.0);
	rot(po.yx, xacc*-0.1);
	vec3 poo = po;
	vec3 pooo = po+vec3(0.0,0.0,-4.0);
	rot(po.yx, 3.14159-0.4);
	float mm = (po.z)*0.2;
	float p1 = box(po, vec3(2.0,0.3,3.0));
	rot(po.yx, 3.14159+0.8);
	float p2 = box(po, vec3(2.0,0.3,3.0));


	float k = 1.0;

	rot(poo.xz, k);
	float p3 = box(poo, vec3(1.3,1.0,3.3));
	rot(poo.xz, -k*2.0);
	p3 = max(box(poo, vec3(1.3,1.0,3.3)),p3);
	
	return min(max(p3,min(p1,p2)), box(pooo, vec3(0.3,0.3,4.0)));
}

float d(vec3 pos){
	
	vec3 p = pos;
	pos.x = mod(pos.x,120.0)-60.0;
	pos.z = mod(pos.z,10.0)-5.0;

 

	float z = 100000000.0;

	z = min(cylinder(pos,2.0),z);

	z = min(z,groundheight(p));
	rot(pos.xy, 3.14159/4.0);

	return z;
}


void main() { 
	gl_FragColor = vec3(1.0);
}