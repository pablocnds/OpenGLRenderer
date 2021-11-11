#version 330 core
struct Material {
    sampler2D diffuse;
    sampler2D specular;
    float     shininess;
};
struct Light {
    vec3 position;
  
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
};

in vec3 Normal;
in vec3 FragPos;
in vec2 TexCoords;

out vec4 FragColor;

uniform vec3 viewPosition;

uniform Material material;
uniform Light light;

void main()
{
	// Ambient lighting
	vec3 ambientColor = light.ambient * vec3(texture(material.diffuse, TexCoords));
	
	// Diffuse lighting
	vec3 norm = normalize(Normal);
	vec3 lightDir = normalize(light.position - FragPos);
	float diffusion = max(dot(norm, lightDir), 0.0);
	
	vec3 diffColor = light.diffuse * diffusion * vec3(texture(material.diffuse, TexCoords));
	
	// Specular lighting
	vec3 viewDir = normalize(viewPosition - FragPos);
	vec3 reflectDir = reflect(-lightDir, norm);
	float angularDistance = max(dot(reflectDir, viewDir), 0.0);

	vec3 specColor = (pow(angularDistance, material.shininess) * vec3(texture(material.specular, TexCoords))) * light.specular;

	// Final color
	vec3 color = ambientColor + diffColor + specColor;

    FragColor = vec4(color, 1.0);
}