varying vec3 vertexNormal;
uniform vec3 rgb;

void main() {
  float intensity = pow(0.6 - dot(vertexNormal, vec3(0, 0, 1)), 2.0);
  
  gl_FragColor = vec4(rgb, 1.0) * intensity;
}