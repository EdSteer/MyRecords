from django.urls import path
from . import views
from .views import ReviewListView
from .views import ReviewDetailView

urlpatterns = [
    path('<int:pk>/', ReviewDetailView.as_view()),     
    path('', ReviewListView.as_view()),
]