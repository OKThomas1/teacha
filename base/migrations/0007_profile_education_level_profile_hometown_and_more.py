# Generated by Django 4.0.2 on 2022-02-06 07:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0006_profile_lat_profile_lng'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='education_level',
            field=models.CharField(default='1st year', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='hometown',
            field=models.CharField(default='calgary', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='job_title',
            field=models.CharField(default='manager', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='school',
            field=models.CharField(default='ubco', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='profile',
            name='work',
            field=models.CharField(default='developer', max_length=50),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag', models.CharField(max_length=50)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
