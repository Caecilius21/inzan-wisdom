import pandas as pd
from django.db import models


class NameManager(models.Manager):
    def df_all(self):
        queryset = self.values().all()
        df = pd.DataFrame(queryset)

        return df
