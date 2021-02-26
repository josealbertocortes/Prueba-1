from django.shortcuts import render,redirect,get_object_or_404
from .models import Usuario
# Create your views here.
def listadoususario(request):
    context ={} 
    context["datos"] = Usuario.objects.all() 
          
    return render(request, "usuario/crud/listado_usuario.html", context) 

def altausuario(request): 
    # dictionary for initial data with  
    # field names as keys 
    context ={} 
    
  
    # add the dictionary during initialization 
    if request.method == "POST":
        nombre = request.POST["nombre"]
        apellido = request.POST["apellido"]
        numerotelefonico = request.POST["numerotelefonico"]
        email = request.POST["email"]
        edad = request.POST["edad"]
        estadocliente = request.POST["estadocliente"]
        calle = request.POST["calle"]
        ciudad = request.POST["ciudad"]
        estado = request.POST["estado"]
        codigopostal = request.POST["codigopostal"]
        pais = request.POST["pais"]
        informacion = request.POST["informacion"]
        usuario = Usuario.objects.create(nombre=nombre,apellido=apellido,numerotelefonico=numerotelefonico,email=email,edad=edad,estadocliente=estadocliente,calle=calle,ciudad=ciudad,
        estado=estado,codigopostal=codigopostal,pais=pais,informacion=informacion)
        usuario.save()
        return redirect("/")
          
    
    return render(request, "usuario/crud/creacion_usuario.html", context) 

def detalleusuario(request, id): 
    # dictionary for initial data with  
    # field names as keys 
    contexto ={} 
  
    # add the dictionary during initialization 
    contexto["datos"] = Usuario.objects.get(id = id) 
          
    return render(request, "usuario/crud/detalle_usuario.html", contexto) 

def actualizarusuario(request, id): 
    # dictionary for initial data with  
    # field names as keys 
    contexto ={} 
  
    # fetch the object related to passed id 
    obj = get_object_or_404(Usuario, id = id) 
  
    # pass the object as instance in form 
    if request.method == "POST":
        nombre = request.POST["nombre"]
        apellido = request.POST["apellido"]
        numerotelefonico = request.POST["numerotelefonico"]
        email = request.POST["email"]
        edad = request.POST["edad"]
        estadocliente = request.POST["estadocliente"]
        calle = request.POST["calle"]
        ciudad = request.POST["ciudad"]
        estado = request.POST["estado"]
        codigopostal = request.POST["codigopostal"]
        pais = request.POST["pais"]
        informacion = request.POST["informacion"]
        obj.nombre = nombre
        obj.apellido = apellido
        obj.numerotelefonico =numerotelefonico
        obj.email=email
        obj.edad=edad
        obj.estadocliente=estadocliente
        obj.calle=calle
        obj.ciudad=ciudad
        obj.estado=estado
        obj.codigopostal=codigopostal
        obj.pais=pais
        obj.informacion=informacion
        obj.save()
        return redirect("/"+"detalle/"+id) 
  
    # add form dictionary to context 
    contexto["nombre"] = obj.nombre
    contexto["apellido"] = obj.apellido
    contexto["numerotelefonico"]=obj.numerotelefonico
    contexto["email"]=obj.email
    contexto["edad"]=obj.edad
    contexto["estadocliente"]=obj.estadocliente
    contexto["calle"]=obj.calle
    contexto["ciudad"]=obj.ciudad
    contexto["estado"]=obj.estado
    contexto["codigopostal"]=obj.codigopostal
    contexto["pais"]=obj.pais
    contexto["informacio"]=obj.informacion


  
    return render(request, "usuario/crud/actualizar.html", contexto)

def elimanarusuario(request, id): 
    # dictionary for initial data with  
    # field names as keys 
    contexto ={} 
  
    # fetch the object related to passed id 
    obj = get_object_or_404(Usuario, id = id) 
  
  
    if request.method =="POST": 
        # delete object 
        obj.delete() 
        # after deleting redirect to  
        # home page 
        return HttpResponseRedirect("/") 
  
    return render(request, "usuario/crud/elimar_usuario.html", contexto) 