from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('names/', include('backend.names.urls')),
    path('translate/', include('backend.translate.urls')),
    path('', include('frontend.urls')),
]
