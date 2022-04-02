from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('names/', include('backend.names.urls')),
    path('', include('frontend.urls')),
]
