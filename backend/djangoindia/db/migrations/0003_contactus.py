# Generated by Django 4.2.13 on 2024-07-18 18:29

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0002_newslettersubscription'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.CharField(max_length=500)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
