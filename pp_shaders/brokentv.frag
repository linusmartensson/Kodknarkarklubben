#define pi 3.1415265

float pp_rand(vec2 n)
{
  return 0.5 + 0.5 * 
     fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
}

vec3 pp(vec3 c,vec2 uv, float t)
{
	vec3 gray = vec3(0.33*c.r+c.g+c.b);
	vec2 p = 2.0 * uv - 1.0;
	float border = pow(abs(sin(uv.x*pi))*abs(sin(uv.y*pi)),1.0);
	t *= 25.0;
	//saturate
	c = mix(gray,c,0.3);
	
	//scanline
	c.rgb += 0.02*abs(sin(0.3*t+uv.y*iResolution.y*0.01));
	c += 0.05*clamp(tan(t*200.0),0.0,1.0);
	// apply border
	border = clamp(border*4.0,0.0,1.0);
	c *= border;
	//c = vec3(1.0);
	uv.y = 1.0 - uv.y;
	c *= 0.2+pi*(clamp(sin(uv.y*pi) * sin(uv.y*0.5),-1.0,1.0));
	
	//last erase scanline + noise
	//c = vec3(0.0);
	c *= 0.7+clamp(0.5+sin(uv.y*iResolution.y),0.0,0.1);
	
	return c;
}
/*
void main(void)
{
	vec2 uv = gl_FragCoord.xy / iResolution.xy;
	vec3 color = texture2D(iChannel0,uv).rgb;
	color = pp(color,uv,iGlobalTime);
	gl_FragColor = vec4(color,1.0);
}*/