from django.urls import path 
  
# importing views from views..py 
from .views import *

app_name='usuario'

urlpatterns = [ 
    path('',listadoususario,name="listado"),
    path('creacion',altausuario,name="altausuario"),
    path('actualizar/<id>',actualizarusuario,name="actualizar"),
    path('detalle/<id>', detalleusuario,name="detalle" ), 
    path('eliminar/<id>', elimanarusuario,name="eliminar" ),

] 