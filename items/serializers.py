from rest_framework import serializers
from .models import Item
from reviews.serializers import ReviewSerializer

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class PopulatedItemSerializer(ItemSerializer):
    review_set = ReviewSerializer(read_only=True, many=True)