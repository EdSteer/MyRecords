from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Record
from .serializers import RecordSerializer
from rest_framework import status


class RecordListView(APIView):

    def get (self, request):
        records = Record.objects.all()
        print("records ->", records)
        serialized_records = RecordSerializer(records, many=True)
        print("serialized listeings ->", serialized_records.data)
        return Response(serialized_records.data, status=status.HTTP_200_OK)


# Create your views here.
