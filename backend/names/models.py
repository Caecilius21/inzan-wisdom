from django.db import models
from backend.names.managers import *

GENDER_CHOICES = [
    ('M', 'Male'),
    ('F', 'Female'),
    ('N', 'Neutral'),
]


class Name(models.Model):
    latin_transcription = models.CharField(max_length=100)
    tifinagh_transcription = models.CharField(max_length=100)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    objects = NameManager()

    def __str__(self):
        return self.latin_transcription