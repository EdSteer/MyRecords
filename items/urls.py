from django.urls import path
from .views import ItemDetailView 
from .views import ItemListView
from . import views


urlpatterns = [
    path('<int:pk>/', ItemDetailView.as_view()),
    path('', ItemListView.as_view())
]