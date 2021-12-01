from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Record
from .serializers import RecordSerializer
from rest_framework import status
from django.http import HttpResponse


class RecordListView(APIView):

    def post(self, request):
        re = RecordSerializer(data = request.data)
        if re.is_valid():
            return Response(re.data, status=status.HTTP_201_CREATED)
        else:
            return Response(re.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get (self, request):
        records = Record.objects.all()       
        serialized_records = RecordSerializer(records, many=True)        
        return Response(serialized_records.data, status=status.HTTP_200_OK)


class RecordDetailView(APIView):

    def get(self, request, pk):
        re = Record.objects.get(id=pk)
        serialized_re = RecordSerializer(re)
        return Response(serialized_re.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        try:
            re = Record.objects.get(id=pk)
            re.delete()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        re =Record.objects.get(id=pk)
        updated_re =  RecordSerializer(data = request.data)
        if updated_re.is_valid():
            updated_re.save()
            return Response(updated_re.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_re.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


# Create your views here.
