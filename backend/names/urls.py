from django.urls import path
from . import views


urlpatterns = [
    path('api/name-list/', views.name_list),
]
