from django.db import models

class Record(models.Model):
    artist = models.CharField(max_length=100, default=None)
    title = models.CharField(max_length=100, default=None)
    label = models.CharField(max_length=100, default=None)
    catalog_number = models.CharField(max_length=100, blank=True)
    image = models.CharField(max_length=500, blank=True)
    video = models.CharField(max_length=500, blank=True)

    def __str__(self):
          return f'{self.artist}'
