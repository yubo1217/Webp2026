# from django.shortcuts import render
from rest_framework.views import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
import json

from .models import Course_table
# Create your views here.

@api_view(['GET'])
def add_course_table(request):
    Department = request.GET.get('Department', '')
    CourseTitle = request.GET.get('CourseTitle', '')
    Instructor = request.GET.get('Instructor', '')

    new_course_table = Course_table()
    new_course_table.Department = Department
    new_course_table.CourseTitle = CourseTitle
    new_course_table.Instructor = Instructor
    new_course_table.save()

    if CourseTitle:
        return Response({"data": CourseTitle + " insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )
@api_view(['GET'])
def list_course_table(request):
    courses = Course_table.objects.all().values()
    return JsonResponse(list(courses), safe=False)