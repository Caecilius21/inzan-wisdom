import pandas as pd
import numpy as np
from rest_framework.decorators import api_view
from rest_framework.response import Response

from backend.names.models import *


@api_view(['GET'])
def name_list(request):
    try:

        df = Name.objects.df_all()
        categories = df.columns
        data = df.to_json()

        return Response({
            "categories": categories,
            "data": data,
        })

    except Exception as e:
        print(e)
        return Response({
            "categories": [],
            "data": [],
        })
