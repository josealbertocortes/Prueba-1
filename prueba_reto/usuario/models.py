from django.db import models

# Create your models here.
class Usuario(models.Model):
    nombre = models.CharField(max_length = 200) 
    apellido = models.CharField(max_length = 200) 
    numerotelefonico = models.CharField(max_length = 200) 
    email = models.EmailField(max_length = 200) 
    edad = models.IntegerField() 
    estadocliente = models.CharField(max_length = 200) 
    calle = models.CharField(max_length = 200) 
    ciudad = models.CharField(max_length = 200) 
    estado = models.CharField(max_length = 200) 
    codigopostal  = models.CharField(max_length = 7) 
    pais  = models.CharField(max_length = 7) 
    informacion =  models.CharField(max_length = 7) 
    creado = models.DateTimeField(auto_now_add=True)



