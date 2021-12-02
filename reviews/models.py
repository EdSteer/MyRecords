from django.db import models

class Review(models.Model):
    text = models.TextField()
    rating = models.IntegerField()
    item = models.ForeignKey("items.Item", on_delete=models.CASCADE)

    def __str__(self):
        return f"Review: {self.rating}/5. {self.text}"
