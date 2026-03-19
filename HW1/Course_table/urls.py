from django.urls import path
from . import views


urlpatterns = [
    path('addcourse', views.add_course_table, name='add_couse_table'),
    path('courselist', views.list_course_table, name='list_course_table'),
]