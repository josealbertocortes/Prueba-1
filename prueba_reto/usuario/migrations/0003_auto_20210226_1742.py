# Generated by Django 3.1.4 on 2021-02-26 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0002_usuario_creado'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='estadocliente',
            field=models.CharField(max_length=200),
        ),
    ]
