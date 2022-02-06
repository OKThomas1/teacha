# Generated by Django 4.0.2 on 2022-02-06 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_profile_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='lat',
            field=models.DecimalField(blank=True, decimal_places=15, max_digits=18, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='lng',
            field=models.DecimalField(blank=True, decimal_places=15, max_digits=18, null=True),
        ),
    ]