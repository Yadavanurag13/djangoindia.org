# Generated by Django 4.2.5 on 2025-02-14 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("db", "0002_remove_user_organization_user_about_user_bio_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="eventuserregistration",
            name="rsvp_notes",
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name="eventuserregistration",
            name="status",
            field=models.CharField(
                choices=[
                    ("rsvped", "RSVPed"),
                    ("waitlisted", "Waitlisted"),
                    ("cancelled", "Cancelled"),
                    ("attended", "Attended"),
                ],
                max_length=50,
            ),
        ),
    ]
